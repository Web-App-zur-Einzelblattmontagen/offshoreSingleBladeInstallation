from flask import Flask, render_template, request, jsonify, make_response, send_file
from fpdf import FPDF
import datetime
import pandas as pd
import seaborn as sn
import matplotlib.pyplot as plt

app = Flask(__name__)

def generateCorrelationMatrix(name="person", data= None):
    data = pd.DataFrame.from_dict(data)
    data = data.astype('float')
    corrMatrix = data.corr(method = 'pearson')
    plt.figure(figsize=(10, 10))  # hierkannst du die Plotgröße verändern
    sn.heatmap(corrMatrix, annot=True)
    plt.savefig(name + "_correlation_matrix.png")
    #plt.show()

def createReport(name="person",data= None): 
    WIDTH = 210
    HEIGHT = 297
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font('Arial', '', 14)
    pdf.image("./Logo_Partner_BIK_Bremen.png", 0, 5, w=70)
    pdf.text(x = 150, y = 27, txt=datetime.datetime.now().strftime("%Y-%m-%d %H:%M"))
    pdf.ln(h=35)
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w= 0, h=0, txt='Offshore Single Blade Installation Report',border=0, ln=1, align="C")
    pdf.ln(h=8)
    pdf.set_font('Arial', '', 14)
    pdf.cell(w= 0, h=0, txt=name,border=0, ln=1, align="C")
    pdf.ln(h=9)
    pdf.image("./titel.png", w=190)
    pdf.ln(h=8)
    pdf.image("./titel3.png", 5, 200, WIDTH/2-23, h=85)
    pdf.image("./titel2.png", WIDTH/2, 200, WIDTH/2-23, h=85)
    pdf.add_page()
    generateCorrelationMatrix(name, data)
    pdf.image(name + "_correlation_matrix.png", w=190)
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