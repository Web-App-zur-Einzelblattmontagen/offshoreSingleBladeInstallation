from flask import Flask, render_template, request, jsonify, make_response, send_file
from fpdf import FPDF
import datetime
import pandas as pd
import seaborn as sn
import matplotlib.pyplot as plt
from windrose import WindroseAxes

app = Flask(__name__)

def generateCorrelationMatrix(name="person", data= None):
    data = pd.DataFrame.from_dict(data)
    data = data.astype('float')
    corrMatrix = data.corr(method = 'pearson')
    plt.figure(figsize=(15, 17))  # hierkannst du die Plotgröße verändern
    sn.heatmap(corrMatrix, annot=True)
    plt.savefig(name + "_correlation_matrix.png")

def create_windrose_plot(name="person", data= None):
    print(data)
    wind_data = pd.DataFrame.from_dict(data)
    ax = WindroseAxes.from_ax()
    plt.title('Windrose-Plot')
    ax.bar(wind_data['wind_dir_3_corr'], wind_data['wind_speed_3'], normed=True, opening=0.8, edgecolor='white')
    ax.set_xticklabels(['N', 'NW',  'W', 'SW', 'S', 'SE', 'E', 'NE'])
    ax.set_theta_zero_location('N')
    plt.xlabel('wind speed in [m/s]', loc='left')
    plt.savefig(name + "_windorse_plot.png")

def create_waverose_plot(name="person", data= None):
    wave_data = pd.DataFrame.from_dict(data)
    Dirp = pd.DataFrame.to_numpy(wave_data['Dirp'])
    Hav = pd.DataFrame.to_numpy(wave_data['Hav'])
    ax = WindroseAxes.from_ax()
    plt.title('Waverose-Plot of ' + datetime.datetime.now().strftime("%Y-%m-%d"))
    winter = cm = plt.get_cmap('winter')
    ax.bar(Dirp, Hav, normed=True, opening=0.8, edgecolor='white', cmap=winter)
    ax.set_legend()
    ax.set_xticklabels(['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'])
    ax.set_theta_zero_location('N')
    plt.xlabel('average wave height in [cm]', loc='left')
    plt.savefig(name + "_waveorse_plot.png")

def createReport(name="person",data= None): 
    WIDTH = 210
    HEIGHT = 297
    pdf = FPDF()
    #title page
    pdf.add_page()
    pdf.set_font('Arial', '', 14)
    pdf.image("./Logo_Partner_BIK_Bremen.png", 0, 5, w=70)
    pdf.text(x = 160, y = 27, txt=datetime.datetime.now().strftime("%Y-%m-%d"))
    pdf.ln(h=35)
    pdf.set_font('Arial', 'B', 18)
    pdf.cell(w= 0, h=0, txt='Offshore Single Blade Installation Report',border=0, ln=1, align="C")
    pdf.ln(h=8)
    pdf.set_font('Arial', '', 14)
    pdf.cell(w= 0, h=0, txt=name,border=0, ln=1, align="C")
    pdf.ln(h=9)
    pdf.image("./titel.png", w=190)
    pdf.ln(h=8)
    pdf.image("./titel3.png", 5, 200, WIDTH/2-23, h=85)
    pdf.image("./titel2.png", WIDTH/2, 200, WIDTH/2-23, h=85)
    #second page
    pdf.add_page()
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=0, txt='Person Correlation Matrix',border=0, ln=1, align="C")
    pdf.set_font('Arial', '', 14)
    pdf.text(txt="The displayed correlation matrix is generated on the data you entered and shows the ", x=10, y=25)
    pdf.text(txt="linear correlation coefficient according to Person. The values range between -1 and 1", x=10, y=35)
    pdf.text(txt="where -1 stands for a negative linear correation and 1 for a positive correlation.", x=10, y=45)
    pdf.text(txt="More information: https://www.spss-tutorials.com/pearson-correlation-coefficient/", x=10, y=55)
    generateCorrelationMatrix(name, data)
    pdf.ln(h=47)
    pdf.image(name + "_correlation_matrix.png", w=190)
    #third page
    pdf.add_page()
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=0, txt='Windrose',border=0, ln=1, align="C")
    pdf.set_font('Arial', '', 14)
    pdf.text(txt="This plot shows the different wind speeds in the specific direction of the data ", x=10, y=25)
    pdf.text(txt="you have entered.", x=10, y=35)
    pdf.text(txt="More information: https://windrose.readthedocs.io/en/latest/usage.html", x=10, y=45)
    create_windrose_plot(name, data)
    pdf.image(name + "_windorse_plot.png", w=190)

    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=120, txt='Waverose',border=0, ln=1, align="C")
    pdf.set_font('Arial', '', 14)
    pdf.text(txt="This plot shows the different wind speeds in the specific direction of the data ", x=10, y=85)
    pdf.text(txt="you have entered.", x=10, y=95)
    pdf.text(txt="More information: https://www.spss-tutorials.com/pearson-correlation-coefficient/", x=10, y=105)
    #create_waverose_plot(name, data)
    #pdf.image(name + "_waverose_plot.png", w=190)
    pdf.output(name + '.pdf', 'F')



@app.route('/', methods=['OPTIONS','POST', 'GET'])
def handleRequest():
    if request.method == 'OPTIONS': 
        return build_preflight_response()
    elif request.method == 'POST' and request.get_json() != {}: 
        req = request.get_json()
        data = req['data']
        name = req['name']
        print(data)
        createReport(name, data)
        return build_actual_response(send_file("./" + name + '.pdf'))
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