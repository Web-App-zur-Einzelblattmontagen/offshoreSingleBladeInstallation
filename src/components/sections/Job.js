import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "./Job.css";

export default function Job(props) {
    return (
        <div>
            <section className="job__flex__container">
                <div className="job__status__flex__item">
                    {props.jobStatus ? (
                        <CheckCircleIcon style={{ color: "green"}} />
                    ) : (
                        <RemoveCircleIcon style={{ color: "red" }} />
                    )}
                </div>
                <div className="job__name__flex__item">
                    <p>
                        <b>{props.jobName + " (" + props.jobId + ")"}</b>
                    </p>
                </div>
                <div className="job__name__flex__item">
                    <p>
                        <b>{props.jobDate}</b>
                    </p>
                </div>
                
            </section>
        </div>
    );
}
