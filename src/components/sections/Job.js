import React, { useState } from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default function Job(props) {
    //JOB ID

    //Name
    //Datenset Name
    //Einstellungen
    //Bearbeitete Daten
    //PLOT

    return (<div>
        <section className = "job__flex__container">
            <div className="job__status__flex__item">
                {props.jobStatus? <CheckCircleIcon/>: <RemoveCircleIcon/>}
            </div>
        </section>
    </div>);
}
