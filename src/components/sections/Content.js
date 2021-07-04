import React, {useState} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CsvParse from "@vtex/react-csv-parse";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chart from "./Chart"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
});


const keys = [
    "epoch",
    "acc_x",
    "acc_y",
    "acc_z",
    "vel_x",
    "vel_y",
    "vel_z",
    "pos_x",
    "pos_y",
    "pos_z",
    "deflection",
];

function Content(props) {
    const [data, setData] = useState({});
    const [chartType, setChartType] = useState("LineChart");
    const [yAxisLabel, setYAxisLabel] = useState("")

    const chartTypeChange = (e) => {
        setChartType(e.target.value)
    }

    const yAxisLabelChange = (e) => {
        setYAxisLabel(e.target.value)
    }

    const handleData = (data) => {
        setData(data);
        console.log(data);
    };
    const handleError = (e) => {
        console.log(e);
    };
    const {classes} = props;

    return (
        <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
        >
            <Grid>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    style={{color: "#2a3eb1"}}
                >
                    <b>Upload your data!</b>
                </Typography>
                <CsvParse
                    keys={keys}
                    onDataUploaded={handleData}
                    onError={handleError}
                    render={(onChange) => <input type="file" onChange={onChange}/>}
                />
            </Grid>
            <br/>
            <br/>
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                <Grid item lg={5} md={5} sm={5} xs={5}>
                    {/* TODO: Chart props übergeben */}
                    <Chart data={data} yAxisLabel={yAxisLabel}
                            chartType={chartType} style={{marginLeft: 10}}/>
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5}
                      style={{border: "3px solid black", borderRadius: "8px", width: "100%"}}>
                    <Typography align="center" variant="h5" style={{color: "#2a3eb1"}}> Edit Plot!</Typography>
                    <hr/>
                    <Grid container direction="column" justify="flex-start" alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="p" style={{color: "#2a3eb1"}}><b>Select the Chart-Type</b></Typography>
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={chartType}
                                    onChange={chartTypeChange}
                                >
                                    <MenuItem value={"LineChart"}>LineChart</MenuItem>
                                    <MenuItem value={"AreaChart"}>AreaChart</MenuItem>
                                    <MenuItem value={"ScatterChart"}>ScatterChart</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <hr/>
                    <Grid container direction="column" justify="flex-start" alignItems="center">
                        <Grid item><Typography variant="p" style={{color: "#2a3eb1"}}><b>Change the
                            Y-Axis label and intervall</b></Typography></Grid>
                        <Grid item><FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={yAxisLabel}
                                onChange={yAxisLabelChange}
                            >
                                <MenuItem value={"deflection"}>Deflection</MenuItem>
                                <MenuItem value={"acc_x"}>Acceleration X</MenuItem>
                                <MenuItem value={"acc_y"}>Acceleration Y</MenuItem>
                                <MenuItem value={"acc_z"}>Acceleration Z</MenuItem>
                                <MenuItem value={"vel_x"}>Velocity X</MenuItem>
                                <MenuItem value={"vel_y"}>Velocity Y</MenuItem>
                                <MenuItem value={"vel_z"}>Velocity Z</MenuItem>
                                <MenuItem value={"pos_x"}>Position X</MenuItem>
                                <MenuItem value={"pos_y"}>Position Y</MenuItem>
                                <MenuItem value={"pos_z"}>Position Z</MenuItem>
                            </Select>
                        </FormControl></Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
