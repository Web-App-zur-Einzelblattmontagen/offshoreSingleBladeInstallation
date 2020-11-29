import React from 'react';
import logo from './bik-logo.png';
import bild1 from './bild1.png';
import bild2 from './bild2.png';
import bild3 from './bild3.png';
import bild4 from './bild4.png';
import bild5 from './bild5.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="header-nav">
                <img src={logo} alt="Logo"/>
                <ul>
                    <li><a href="http://127.0.0.1:8000/">Startseite</a></li>
                    <li><a href="http://127.0.0.1:8000/">Schriftliche Ausarbeitung</a></li>
                    <li><a href="http://127.0.0.1:8000/">Impressum</a></li>
                </ul>
            </nav>
            <div className="center-column">
                <div className="header-row">
                    <span>Erkennung von Zusammenhängen in den Daten aus Einzelblattmontagen</span>
                </div>
            </div>
            <br/>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-3">

                        <p className="Ueberschrift">Projektspezifische Motivation</p>

                        <p className="normalText">
                            Offshore Wind liefert bereits heute einen substantiellen Teil des Energiemixes. Um die
                            Installationskosten weiter zu senken, soll insbesondere der Installationsvorgang verbessert
                            werden.
                            Die Installation der Blätter stellt dabei die größte Herausforderung dar. Relativbewegungen
                            zwischen Gondel und Blattwurzel erschweren die Blattmontage. Überschreitet die
                            Relativbewegung einen gewissen Schwellwert, ist keine Installation mehr möglich und es kommt
                            zu einer kostspieligen Verzögerung.
                            Basierend auf Messdaten, welche während der Installation eines Windparks in der Nordsee
                            aufgezeichnet wurden, sollen mittels maschineller Lernenmethoden Korrelationen zwischen
                            Umweltgrößen, wie bspw. der Windgeschwindigkeit, und Beschleunigungen von Turm, Gondel und
                            Blatt erkannt werden.
                            In einem Softwaretechnikprojekt soll eine Web-App entwickelt werden, die, basierend auf
                            aufgezeichneten Daten, Zusammenhängen ausgibt, sodass anschließend Ingenieure diese
                            Ergebnisse für ein besseres Verständnis der Einzelblattmontage und ihre Umweltbedingungen
                            nutzen können.
                        </p>
                    </div>
                    <div className="col-3">
                        <img src={bild1} alt="Offshore Windanlagen Errichterschiff"/>

                        <img src={bild2} alt="Offshore Windanlage Einzelblattmontage"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3">
                        <img className="biggerPicture" src={bild3} alt="Windpark Borkum Landkarte"/>

                        <img className="biggerPicture" src={bild4} alt="Offshore Windrad"/>
                    </div>
                    <div className="col-3">

                        <p className="Ueberschrift">Windpark Borkum 2</p>

                        <p className="normalText">
                            Das Baufeld für den Trianel Windpark Borkum II liegt rund 45 Kilometer nördlich der
                            ostfriesischen Insel Borkum und etwa 44 Kilometer nordwestlich der Insel Juist.

                            Errichtet werden die 32 Windkraftanlagen des Herstellers Senvion in den nordöstlichen und
                            südwestlichen Quadranten des Windparkgebiets, gespiegelt zu den 40 Anlagen der ersten
                            Ausbaustufe.

                            Im Zentrum des rund 56 Quadratkilometer großen Gebiets befindet sich die parkinterne
                            Umspannplattform, die sich beide Ausbaustufen des Offshore-Windparks teilen.

                            Die Wassertiefe, in denen die Gründungsstrukturen und anschließend die Windkraftanlagen
                            installiert werden, betragen zwischen 25 und 35 Meter.
                            <br/>
                            <br/>
                            Für den Trianel Windpark Borkum II werden 32 Windenergieanlagen des Typs 6.2M152 Power
                            Upgrade des Anlagenherstellers Senvion mit einer Nennleistung von jeweils 6,33 Megawatt auf
                            Monopiles errichtet und an die bereits vorhandene parkinterne Umspannplattform
                            angeschlossen.

                            Ab einer Windgeschwindigkeit von 11,5 Meter pro Sekunde erreichen die Turbinen ihre maximale
                            Leistung. Eine automatische Abschaltung der Anlagen findet erst bei einer
                            Windgeschwindigkeiten ab 30 Meter pro Sekunde statt.

                            Die errichtete Struktur hat eine Gesamthöhe von über 200 Meter vom Meeresgrund bis zur
                            Blattspitze und ist somit höher als der Kölner Dom.

                            Der Rotorstern hat einen Durchmesser von 152 Meter und dreht sich mit einer Geschwindigkeit
                            von etwa 288 Kilometer pro Stunde, wobei er hierbei bis zu 10 Umdrehungen pro Minute
                            erreicht.
                        </p>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3">

                        <p className="Ueberschrift">Messdatenaufnahme</p>

                        <p className="normalText">
                            Offshore Wind liefert bereits heute einen substantiellen Teil des Energiemixes. Um die
                            Installationskosten weiter zu senken, soll insbesondere der Installationsvorgang
                            verbessert
                            werden.
                            Die Installation der Blätter stellt dabei die größte Herausforderung dar.
                            Relativbewegungen
                            zwischen Gondel und Blattwurzel erschweren die Blattmontage. Überschreitet die
                            Relativbewegung einen gewissen Schwellwert, ist keine Installation mehr möglich und es
                            kommt
                            zu einer kostspieligen Verzögerung.
                            Basierend auf Messdaten, welche während der Installation eines Windparks in der Nordsee
                            aufgezeichnet wurden, sollen mittels maschineller Lernenmethoden Korrelationen zwischen
                            Umweltgrößen, wie bspw. der Windgeschwindigkeit, und Beschleunigungen von Turm, Gondel
                            und
                            Blatt erkannt werden.
                            In einem Softwaretechnikprojekt soll eine Web-App entwickelt werden, die, basierend auf
                            aufgezeichneten Daten, Zusammenhängen ausgibt, sodass anschließend Ingenieure diese
                            Ergebnisse für ein besseres Verständnis der Einzelblattmontage und ihre
                            Umweltbedingungen
                            nutzen können.
                        </p>


                        <img src={bild1} alt="Offshore Windanlagen Errichterschiff"/>

                        <img src={bild2} alt="Offshore Windanlage Einzelblattmontage"/>

                    </div>


                    <div className="col-3">


                        <p className="Ueberschrift">Messdatenverarbeitung</p>

                        <p className="normalText">
                            Offshore Wind liefert bereits heute einen substantiellen Teil des Energiemixes. Um die
                            Installationskosten weiter zu senken, soll insbesondere der Installationsvorgang
                            verbessert
                            werden.
                            Die Installation der Blätter stellt dabei die größte Herausforderung dar.
                            Relativbewegungen
                            zwischen Gondel und Blattwurzel erschweren die Blattmontage. Überschreitet die
                            Relativbewegung einen gewissen Schwellwert, ist keine Installation mehr möglich und es
                            kommt
                            zu einer kostspieligen Verzögerung.
                            Basierend auf Messdaten, welche während der Installation eines Windparks in der Nordsee
                            aufgezeichnet wurden, sollen mittels maschineller Lernenmethoden Korrelationen zwischen
                            Umweltgrößen, wie bspw. der Windgeschwindigkeit, und Beschleunigungen von Turm, Gondel
                            und
                            Blatt erkannt werden.
                            In einem Softwaretechnikprojekt soll eine Web-App entwickelt werden, die, basierend auf
                            aufgezeichneten Daten, Zusammenhängen ausgibt, sodass anschließend Ingenieure diese
                            Ergebnisse für ein besseres Verständnis der Einzelblattmontage und ihre
                            Umweltbedingungen
                            nutzen können.
                        </p>
                        <img src={bild1} alt="Offshore Windanlagen Errichterschiff"/>

                        <img src={bild2} alt="Offshore Windanlage Einzelblattmontage"/>

                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3">

                        <p className="Ueberschrift">Uploadbereich</p>

                        <p className="normalText">
                            Offshore Wind liefert bereits heute einen substantiellen Teil des Energiemixes. Um die
                            Installationskosten weiter zu senken, soll insbesondere der Installationsvorgang verbessert
                            werden.
                            Die Installation der Blätter stellt dabei die größte Herausforderung dar. Relativbewegungen
                            zwischen Gondel und Blattwurzel erschweren die Blattmontage. Überschreitet die
                            Relativbewegung einen gewissen Schwellwert, ist keine Installation mehr möglich und es kommt
                            zu einer kostspieligen Verzögerung.
                            Basierend auf Messdaten, welche während der Installation eines Windparks in der Nordsee
                            aufgezeichnet wurden, sollen mittels maschineller Lernenmethoden Korrelationen zwischen
                            Umweltgrößen, wie bspw. der Windgeschwindigkeit, und Beschleunigungen von Turm, Gondel und
                            Blatt erkannt werden.
                            In einem Softwaretechnikprojekt soll eine Web-App entwickelt werden, die, basierend auf
                            aufgezeichneten Daten, Zusammenhängen ausgibt, sodass anschließend Ingenieure diese
                            Ergebnisse für ein besseres Verständnis der Einzelblattmontage und ihre Umweltbedingungen
                            nutzen können.
                        </p>
                    </div>
                    <div className="col-3">
                        <form>
                            <label>
                                Datei hochladen:
                                <input type="file" name="file"/>
                            </label>
                            <input type="submit" value="Absenden"/>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default App;
