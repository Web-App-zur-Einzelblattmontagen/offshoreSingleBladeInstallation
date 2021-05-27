import React, { useState, usEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import Job from "./Job.js";

const styles = (theme) => ({
    paper: {
        maxWidth: "80%",
        margin: "auto",
        overflow: "hidden",
        border: "4px solid #000",
    },
    searchBar: {
        borderBottom: "2px solid #000",
        fontSize: 20,
    },
    searchInput: {
        fontSize: 20,
    },
    block: {
        display: "block",
    },
    contentWrapper: {
        margin: "40px 16px",
    },
});

function Content(props) {
    const [jobs, setJobs] = useState([
        {
            jobId: 347538392,
            jobStatus: true,
            jobName: "zzodhdhhshsuzehsh",
            jobDate: "30.04.2021, 17:45",
        },
        {
            jobId: 92909482,
            jobStatus: false,
            jobName: "Test345",
            jobDate: "01.04.2021, 12:45",
        },
        {
            jobId: 347538392,
            jobStatus: true,
            jobName: "zzodhdhhshsuzehsh",
            jobDate: "30.04.2021, 17:45",
        },
        {
            jobId: 92909482,
            jobStatus: false,
            jobName: "Test345",
            jobDate: "01.04.2021, 12:45",
        },
        {
            jobId: 347538392,
            jobStatus: true,
            jobName: "zzodhdhhshsuzehsh",
            jobDate: "30.04.2021, 17:45",
        },
        
        {
            jobId: 92909482,
            jobStatus: false,
            jobName: "Test345",
            jobDate: "01.04.2021, 12:45",
        },
        {
            jobId: 347538392,
            jobStatus: true,
            jobName: "zzodhdhhshsuzehsh",
            jobDate: "30.04.2021, 17:45",
        },
        {
            jobId: 92909482,
            jobStatus: false,
            jobName: "Test345",
            jobDate: "01.04.2021, 12:45",
        },
    ]);

    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <AppBar
                className={classes.searchBar}
                position="static"
                color="default"
                elevation={0}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon
                                className={classes.block}
                                color="inherit"
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by ..."
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.addUser}
                                style={{ fontSize: 20 }}
                            >
                                New Job
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon
                                        className={classes.block}
                                        style={{
                                            fontSize: 30,
                                            marginTop: 5,
                                            marginBottom: 5,
                                            marginRight: 10,
                                            marginLeft: 25,
                                        }}
                                        color="inherit"
                                    />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                {jobs.map((j) => {
                    return (
                        <Job
                            jobId={j.jobId}
                            jobStatus={j.jobStatus}
                            jobName={j.jobName}
                            jobDate={j.jobDate}
                        ></Job>
                    );
                })}
            </div>
        </Paper>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);