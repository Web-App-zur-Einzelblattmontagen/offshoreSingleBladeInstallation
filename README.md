# Offshore Single Blade Installation 💨 🌊 💧 🛥️ WebApp 🌐
## <a href="https://offshoresinglebladeassembly.web.app/" target="_blank">Visit this site here!</a>
## A web application that visualizes the current data and news, of the Covid 19 pandemic.

### CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Installation
 * Usage
 * Contributing
 * License


## Introduction
Against the background of the current worldwide covid-19-pandemic, I programmed this tracker to collect and visualize the latest data and news on the subject. The front end was created with the JavaScript Framework React / Redux and the current data on the pandemic is queried by an API (https://disease.sh/). 

<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a>
<br>

The web application is deployed and can be reached <a href="https://zelgaitracker.com/" target="_blank"> here</a>.
<br>
<br>
<img src="https://github.com/Zelgai123/CovidTracker/blob/main/src/images/preview.PNG"
     alt="Covid Tracker Preview" style="border-radius: 5px;"/>

## Installation
Please execute the following commands in a bash to start the web app in your local development environment.

```
$ git clone https://github.com/Zelgai123/CovidTracker.git or just download as .zip
$ cd CovidTracker
$ npm install
$ npm run start
$ open http://localhost:3000/ 
```


## Usage
Worldwide data is displayed by default. This configuration can be changed using the drop-down menu. The data will now be adapted to the selected country.
<br>
<br>
<img src="https://github.com/Zelgai123/CovidTracker/blob/main/src/images/dropdown.png"
     alt="Covid Tracker Preview" style="width: 200px; height: auto;"/>
<br>
<br>
The world map and especially the circles refer to the covid-cases by default. You can change this by clicking on one of the other two info boxes.
<br>
<br>
<img src="https://github.com/Zelgai123/CovidTracker/blob/main/src/images/infoboxes.png"
     alt="Covid Tracker Preview" style="border-radius: 5px;"/>
<br>
<br>
If you click on a country-specific circle on the map, a brief overview of the current Covid situation in this country opens.
<br>
<br>
<img src="https://github.com/Zelgai123/CovidTracker/blob/main/src/images/briefoverview.PNG"
     alt="Covid Tracker Preview" style="border-radius: 5px;"/>
<br>
<br>
The current Covid cases, in each country, are sorted and displayed in a scrollable list.
<br>
<br>
<img src="https://github.com/Zelgai123/CovidTracker/blob/main/src/images/sortedlist.png"
     alt="Covid Tracker Preview" style="border-radius: 5px;"/>
<br>
<br>
The diagram shows the temporal course of the worldwide new Covid cases. By hovering over the diagram with the mouse, the specific data can be displayed.
<br>
<br>
<img src="https://github.com/Zelgai123/CovidTracker/blob/main/src/images/datechart.png"
     alt="Covid Tracker Preview" style="border-radius: 5px;"/>
<br>
<br>



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
