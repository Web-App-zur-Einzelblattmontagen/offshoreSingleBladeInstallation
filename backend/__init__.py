from flask import Flask, render_template, request, jsonify, make_response, send_file
from fpdf import FPDF
import datetime
import pandas as pd
import numpy as np
import pickle
import os
from numpy import array
import seaborn as sn
import tensorflow as tf
import matplotlib.pyplot as plt
from windrose import WindroseAxes
import os
import textwrap
from random import randint

app = Flask(__name__)


#method for predicting classes via ROLF
def predict_ROLF(data):
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
    return results
#method for predicting classes via keras neuronal network
def predict_NN(data):
    model = tf.keras.models.load_model('model')
    data = pd.DataFrame.from_dict(data)
    del data['epoch']
    data = data.to_numpy()
    data = data.astype('float64')
    results = []
    for i in range(len(data)):
        results.append(np.argmax(model.predict(array([data[i]])))-1)
    return results
#combining predicitions and generating plot for pred. representation
def predict(name="person", data= None):
    result1 = predict_ROLF(data)
    result2 = predict_NN(data)
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
    plt.bar(x=np.arange(29), height=counter1, width=0.8, color=colors1)
    plt.bar(x=np.arange(29), height=counter2, color=colors2)
    plt.title('occurance of predicted clusters')
    plt.xlabel('cluster/class')
    plt.xticks(np.arange(29), rotation=90)
    plt.ylabel('occurance')
    plt.savefig('./generated/' + name + '_prediction.png')


def generateCorrelationMatrix(name="person", data= None):
    data = pd.DataFrame.from_dict(data)
    data = data.astype('float')
    corrMatrix = data.corr(method = 'pearson')
    plt.figure(figsize=(15, 17))
    sn.heatmap(corrMatrix, annot=True)
    plt.savefig('./generated/' + name + "_correlation_matrix.png")


def create_windrose_plot(name="person", data= None):
    wind_data = pd.DataFrame.from_dict(data)
    wind_speed_3 = pd.DataFrame.to_numpy(wind_data['wind_speed_3'], dtype='float32')
    wind_dir_3_corr = pd.DataFrame.to_numpy(wind_data['wind_dir_3_corr'], dtype='float32')
    ax = WindroseAxes.from_ax()
    plt.title('Windrose-Plot')
    ax.bar(wind_speed_3, wind_dir_3_corr, normed=True, opening=0.8, edgecolor='white')
    ax.set_xticklabels(['N', 'NW',  'W', 'SW', 'S', 'SE', 'E', 'NE'])
    ax.set_theta_zero_location('N')
    ax.set_legend()
    plt.xlabel('wind speed in [m/s]', loc='left')
    plt.savefig('./generated/' + name + "_windrose_plot.png")

def create_waverose_plot(name="person", data= None):
    wave_data = pd.DataFrame.from_dict(data)
    Dirp = pd.DataFrame.to_numpy(wave_data['Dirp'], dtype='float32')
    Hav = pd.DataFrame.to_numpy(wave_data['Hav'], dtype='float32')
    ax = WindroseAxes.from_ax()
    plt.title('Waverose-Plot')
    winter = cm = plt.get_cmap('winter')
    ax.bar(Dirp, Hav, normed=True, opening=0.8, edgecolor='white', cmap=winter)
    ax.set_legend()
    ax.set_xticklabels(['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'])
    ax.set_theta_zero_location('N')
    plt.xlabel('average wave height in [cm]', loc='left')
    plt.savefig('./generated/' + name + "_waverose_plot.png")


def createReport(name="person",data= None):
    #CONST VARIABLES
    WIDTH2 = 210
    HEIGHT = 297
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font('Arial', '', 14)
    pdf.image("./assets/Logo_Partner_BIK_Bremen.png", 0, 5, w=70)
    pdf.text(x = 150, y = 27, txt=datetime.datetime.now().strftime("%Y-%m-%d"))
    pdf.ln(h=35)
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=0, txt='Offshore Single Blade Installation Report',border=0, ln=1, align="C")
    pdf.ln(h=8)
    pdf.set_font('Arial', '', 14)
    pdf.cell(w= 0, h=0, txt=name,border=0, ln=1, align="C")
    pdf.ln(h=9)
    pdf.image("./assets/titel.png", w=190)
    pdf.ln(h=8)
    pdf.image("./assets/titel3.PNG", 5, 200, WIDTH2/2-23, h=85)
    pdf.image("./assets/titel2.png", WIDTH2/2, 200, WIDTH2/2-23, h=85)
    #second page
    pdf.add_page()
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=0, txt='Machine Learning',border=0, ln=1, align="C")
    pdf.set_font('Arial', '', 14)
    pdf.text(txt="This plot shows the different wave heights in the specific direction, of the data ", x=10, y=25)
    pdf.text(txt="you have entered.", x=10, y= 35)
    pdf.text(txt="More information: https://windrose.readthedocs.io/en/latest/usage.html", x=10, y=45)
    predict(name, data)
    pdf.image('./generated/' + name + "_prediction.png", w=190, x=10, y=50)
    #third page
    pdf.add_page()
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=0, txt='Person Correlation Matrix',border=0, ln=1, align="C")
    pdf.set_font('Arial', '', 14)
    pdf.text(txt="The displayed correlation matrix is generated on the data you entered and shows the ", x=10, y=25)
    pdf.text(txt="linear correlation coefficient according to Person. The values range between -1 and 1", x=10, y=35)
    pdf.text(txt="where -1 stands for a negative linear correlation and 1 for a positive correlation.", x=10, y=45)
    pdf.text(txt="More information: https://www.spss-tutorials.com/pearson-correlation-coefficient/", x=10, y=55)
    generateCorrelationMatrix(name, data)
    pdf.ln(h=47)
    pdf.image('./generated/' + name + "_correlation_matrix.png", w=190, x=10)
    #fourth page
    pdf.add_page()
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=0, txt='Windrose',border=0, ln=1, align="C")
    pdf.set_font('Arial', '', 14)
    pdf.text(txt="This plot shows the different wind speeds in the specific direction of, the dataset.", x=10, y=25)
    pdf.text(txt="More information: https://windrose.readthedocs.io/en/latest/usage.html", x=10, y=35)
    create_windrose_plot(name, data)
    pdf.image('./generated/' + name +"_windrose_plot.png", w=190, x=10, y=50)
    #fifth page
    pdf.add_page()
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=0, txt='Waverose',border=0, ln=1, align="C")
    pdf.set_font('Arial', '', 14)
    pdf.text(txt="This plot shows the different wave heights in the specific direction, of the data ", x=10, y=25)
    pdf.text(txt="you have entered.", x=10, y= 35)
    pdf.text(txt="More information: https://windrose.readthedocs.io/en/latest/usage.html", x=10, y=45)
    create_waverose_plot(name, data)
    pdf.image('./generated/' + name + "_waverose_plot.png", w=190, x=10, y=50)
    with open('./generated/config.py', 'w') as f:
        config = randint(1, 1000)
        f.write(textwrap.dedent('''\
            def run_config (config):
                print("Config_File" + config)

            config = {random}        
                '''.format(random=config)))

    pdf.output('./generated/' + name + '.pdf', 'F')



@app.route('/', methods=['OPTIONS','POST', 'GET'])
def greeting():
    if request.method == 'OPTIONS':
        return build_preflight_response()
    elif request.method == 'POST' and request.get_json() != {}:
        req = request.get_json()
        data = req['data']
        name = req['name']

        createReport(name, data)
        return build_actual_response(send_file('./generated/' + name + '.pdf'))
    elif request.method == 'GET':
        return "GET"
    else:
        return build_preflight_response()

def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == '__main__':
    app.run(debug=True)