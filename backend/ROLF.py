import matplotlib.pyplot as plt
from sklearn import datasets
import time
import numpy as np
import pandas as pd
import seaborn as sn
from sklearn.tree import DecisionTreeClassifier
from sklearn import tree
from sklearn.decomposition import PCA
from sklearn.metrics import silhouette_score
import pickle as pickle

class ROLF():
    def __init__(self,p=1.5,lr_center = 0.1, lr_sigma = 0.1,initSigma = 2,strategy = ''):
        self.p = p
        self.lr_center = lr_center
        self.lr_sigma = lr_sigma
        self.initSigma = initSigma
        self.lables = None
        self.assignmensts = None
        self.center = None
        self.sigma = None
        self.strategy = strategy

    def _setSigma_Standard(self):
        return self.initSigma
    def _setSigma_Minimum(self):
        return np.min(self.sigma)
    def _setSigma_Maximum(self):
        return np.max(self.sigma)
    def _setSigma_Mean(self):
        return np.mean(self.sigma)

    def _set_setSigma_Strategy(self,strategy):
        """set the choosen strategy to init new neurons sigma"""
        if strategy == "min":
            return self._setSigma_Minimum
        elif strategy == "max":
            return self._setSigma_Maximum
        elif strategy == "mean":
            return self._setSigma_Mean
        else:
            return self._setSigma_Standard

    def _find_neurons(self,X,strategy):
        """Find the neurons in out training data
            k is the number of neurons found so far. We use this, so we are able to slice the center
            array, such that we do not have to perform the distance calculation for the zero (non center) elements.
            the first neuron gets initilized on the first pattern right away
        """
        X = np.asarray(X)
        funct_setSigma = self._set_setSigma_Strategy(self.strategy)
        self.center = np.zeros(X.shape)
        self.sigma = np.ones(len(X))*self.initSigma
        self.center[0] = X[0]
        k = 1
        for x in X:
            distance = np.linalg.norm(self.center[:k] - x,axis=1)
            acceptors = np.where(distance <= self.sigma[:k]*self.p)[0]
            if len(acceptors) > 0:
                winner = acceptors[np.argmin(distance[acceptors])]
                self.center[winner] += self.lr_center * (x-self.center[winner])
                self.sigma[winner] += self.lr_sigma * (distance[winner]-self.sigma[winner])
            else:
                self.center[k] = x
                self.sigma[k] = funct_setSigma()
                k += 1
        self.center = self.center[:k]
        self.sigma = self.sigma[:k]

    def _find_neighbourhood(self):
        """calculate the neighbourhood graph and assign cluster labels"""
        cluster_id = 0
        notIterated = list(np.arange(0,len(self.center)))
        self.lables = np.zeros(len(self.center),dtype=int)
        while len(notIterated) > 0:
            stack = [notIterated[0]]
            notIterated.remove(notIterated[0])
            while len(stack) > 0:
                NeuronNeuronDist = np.linalg.norm(self.center[stack[-1]] - self.center[notIterated],axis = 1)
                inPercField = NeuronNeuronDist - ((self.sigma[notIterated] + self.sigma[stack[-1]]) * self.p)
                connected = np.where(inPercField <= 0)
                self.lables[stack[-1]] = cluster_id
                stack.pop()
                for k in np.flip(connected[0]):
                    stack.append(notIterated[k])
                    notIterated.remove(notIterated[k])
            cluster_id += 1

    def fit(self,X,strategy = ""):
        """run the fitting process"""
        self._find_neurons(X,strategy)
        self._find_neighbourhood()

    def predict(self,x):
        """predict the label of a new pattern"""
        distance = np.linalg.norm(self.center - x,axis=1)
        acceptors = np.where(distance <= self.sigma*self.p)[0]
        if len(acceptors) > 0:
            return self.lables[acceptors[0]]
        else:
            return -1
    def savemodel(self):
        np.savetxt('ROLFcenter.csv', self.center, delimiter=',')
        np.savetxt('ROLFlables.csv', self.lables, delimiter=',')