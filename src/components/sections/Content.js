import React, {useState} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CsvParse from "@vtex/react-csv-parse";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis,} from "recharts";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

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
    const [chartType, setChartType] = useState("");
    const [xAxisLabel, setXAxisLabel] = useState("")
    const chartTypeChange = (e) => {
        setChartType(e.target.value)
    }
    const xAxisLabelChange = (e) => {
        setXAxisLabel(e.target.value)
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
                    <LineChart
                        width={700}
                        height={700}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis domain={[-0.03, 0.03]}/>
                        <Tooltip/>
                        <Legend/>
                        <Line
                            type="monotone"
                            dataKey="pos_x"
                            stroke="#8884d8"
                            activeDot={{r: 8}}
                        />
                    </LineChart>
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
                            X-Axis label and intervall</b></Typography></Grid>
                        <Grid item><FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={xAxisLabel}
                                onChange={xAxisLabelChange}
                            >
                                <MenuItem value={"epoch"}>Epoch / Time</MenuItem>
                                <MenuItem value={"acc_x"}>Acceleration X</MenuItem>
                                <MenuItem value={"acc_y"}>Acceleration Y</MenuItem>
                                <MenuItem value={"acc_z"}>Acceleration Z</MenuItem>
                                <MenuItem value={"pos_x"}>Position X</MenuItem>
                                <MenuItem value={"pos_y"}>Position Y</MenuItem>
                                <MenuItem value={"pos_z"}>Position Z</MenuItem>
                            </Select>
                        </FormControl></Grid>
                        <Grid item>
                            <TextField
                                id="outlined-helperText"
                                defaultValue="-0.5"
                                helperText="Starting Point"
                                variant="outlined"
                                style={{width: "120px"}}
                                onChange = {e => console.log(e.target.value)}

                            />
                            <TextField
                                id="outlined-helperText"
                                defaultValue="0.5"
                                helperText="End-Point"
                                variant="outlined"
                                style={{width: "120px"}}

                            /></Grid>
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
