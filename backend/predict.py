import datetime
import pandas as pd
import numpy as np
import subprocess
import pickle
from numpy import array
import seaborn as sn
import tensorflow as tf
import matplotlib.pyplot as plt


#combining predicitions and generating plot for pred. representation
def predict(data):
    with open('rolf.pickle', 'rb') as handle:
        rolf = pickle.load(handle)
    #preproccessed data
    data = pd.DataFrame.from_dict(data)
    del data['epoch']
    data = data.to_numpy()
    data = data.astype('float64')
    results = []
    for i in range(len(data)):
        results.append(rolf.predict(data[i]))
    result1 = results
    model = tf.keras.models.load_model('model')
    data = pd.DataFrame.from_dict(data)
    del data['epoch']
    data = data.to_numpy()
    data = data.astype('float64')
    results = []
    for i in range(len(data)):
        results.append(np.argmax(model.predict(array([data[i]])))-1)
    result2 = results
    result1 = np.array(result1)
    result2 = np.array(result2)

    assert len(result1) == len(result2)
    #couting through the arrays and generate plotting infos
    counter1 = np.zeros(29)
    counter2 = np.zeros(29)
    for int in np.unique(result1):
        for i in range(len(result1)):
            if result1[i] == int:
                counter1[int] = counter1[int] + 1
    for int in np.unique(result2):
        for i in range(len(result2)):
            if result1[i] == int:
                counter2[int] = counter2[int] + 1
    colors1 = []
    for i in range(29):
        color = list(np.random.choice(range(256), size=3) / 256)
        colors1.append(color)
    colors2 = []
    for i in range(29):
        color = list(np.random.choice(range(256), size=3) / 256)
        colors2.append(color)
    plt.bar(x=np.arange(29), height=counter1, color=colors1)
    plt.bar(x=np.arange(29), height=counter2, color=colors2)
    plt.title('occurance of predicted clusters')
    plt.xlabel('cluster/class')
    plt.xticks(np.arange(29), rotation=90)
    plt.ylabel('occurance')
    plt.savefig('prediction.png')