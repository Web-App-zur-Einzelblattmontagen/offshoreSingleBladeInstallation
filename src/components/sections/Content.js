import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CsvParse from "@vtex/react-csv-parse";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chart from "./Chart";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";

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
        display: "flex",
        flexWrap: "wrap",
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "25ch",
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
    const [average, setAverage] = useState(0);
    const [standardDeviation, setStandardDeviation] = useState(0);
    const [variance, setVariance] = useState(0);
    const [chartType, setChartType] = useState("LineChart");
    const [yAxisLabel, setYAxisLabel] = useState("deflection");
    const [yAxisStart, setYAxisStart] = useState(-0.5);
    const [yAxisEnd, setYAxisEnd] = useState(0.5);
    const chartTypeChange = (e) => {
        setChartType(e.target.value);
    };
 

    const yAxisLabelChange = (e) => {
        setYAxisLabel(e.target.value);
    };

    const handleData = (data) => {
        setData(data);
    };
    const handleError = (e) => {
        console.log(e);
    };
    const { classes } = props;
    useEffect(() => {
        try {
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                let number = data[i];
                let float = parseFloat(number[yAxisLabel]);
                sum += float;
            }
            sum = sum / data.length;
            setAverage(sum);
        } catch (error) {
            console.log(error);
        }
    }, [data, yAxisLabel]);

    useEffect(() => {
        try {
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                let number = data[i];
                let float = parseFloat(number[yAxisLabel]);
                let helper = float - average;
                sum += helper * helper;
            }
            sum = sum / data.length;
            setVariance(sum);
        } catch (error) {
            console.log(error);
        }
    }, [average, data, yAxisLabel]);

    useEffect(() => {
        try {
            setStandardDeviation(Math.sqrt(variance));
        } catch (error) {
            console.log(error);
        }
    }, [average, variance, data, yAxisLabel]);

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
                    style={{ color: "#2a3eb1" }}
                >
                    <b>Upload your data!</b>
                </Typography>
                <CsvParse
                    keys={keys}
                    onDataUploaded={handleData}
                    onError={handleError}
                    render={(onChange) => (
                        <input type="file" onChange={onChange} />
                    )}
                />
            </Grid>
            <br />
            <Typography
                variant="p"
                align="center"
                gutterBottom
                style={{ color: "#2a3eb1" }}
            >
                <b>
                    If you have no data, you can easily download here: &emsp;
                    <a
                        href="/testdatei_plots.csv"
                        download
                        style={{ textDecoration: "none" }}
                    >
                        Small testfile
                    </a>{" "}
                    &emsp;
                    <a
                        href="/testdatei_plots_lang.csv"
                        download
                        style={{ textDecoration: "none" }}
                    >
                        Large testfile
                    </a>
                </b>
            </Typography>
            <br />
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >
                <Grid item lg={5} md={5} sm={5} xs={5}>
                    <Chart
                        data={data}
                        yAxisLabel={yAxisLabel}
                        yAxisStart={yAxisStart}
                        yAxisEnd={yAxisEnd}
                        chartType={chartType}
                        style={{ marginLeft: 10 }}
                    />
                </Grid>

                <Grid
                    item
                    lg={5}
                    md={5}
                    sm={5}
                    xs={5}
                    style={{
                        border: "3px solid black",
                        borderRadius: "8px",
                        width: "100%",
                    }}
                >
                    <Typography
                        align="center"
                        variant="h5"
                        style={{ color: "#2a3eb1" }}
                    >
                        {" "}
                        Edit Plot!
                    </Typography>
                    <br />
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                            >
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={chartType}
                                    onChange={chartTypeChange}
                                >
                                    <MenuItem value={"LineChart"}>
                                        LineChart
                                    </MenuItem>
                                    <MenuItem value={"AreaChart"}>
                                        AreaChart
                                    </MenuItem>
                                    <MenuItem value={"ScatterChart"}>
                                        ScatterChart
                                    </MenuItem>
                                </Select>
                                <FormHelperText>
                                    Select the chart type
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                            >
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={yAxisLabel}
                                    onChange={yAxisLabelChange}
                                >
                                    <MenuItem value={"deflection"}>
                                        Deflection
                                    </MenuItem>
                                    <MenuItem value={"acc_x"}>
                                        Acceleration X
                                    </MenuItem>
                                    <MenuItem value={"acc_y"}>
                                        Acceleration Y
                                    </MenuItem>
                                    <MenuItem value={"acc_z"}>
                                        Acceleration Z
                                    </MenuItem>
                                    <MenuItem value={"vel_x"}>
                                        Velocity X
                                    </MenuItem>
                                    <MenuItem value={"vel_y"}>
                                        Velocity Y
                                    </MenuItem>
                                    <MenuItem value={"vel_z"}>
                                        Velocity Z
                                    </MenuItem>
                                    <MenuItem value={"pos_x"}>
                                        Position X
                                    </MenuItem>
                                    <MenuItem value={"pos_y"}>
                                        Position Y
                                    </MenuItem>
                                    <MenuItem value={"pos_z"}>
                                        Position Z
                                    </MenuItem>
                                </Select>
                                <FormHelperText>
                                    Select the y-axis label
                                </FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item style={{ marginTop: "20px" }}>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                            >
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Y-Axis Startpoint"
                                    defaultValue={yAxisStart}
                                    variant="filled"
                                    onChange={(e) =>
                                        setYAxisStart(Number(e.target.value))
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item style={{ marginTop: "20px" }}>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                            >
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Y-Axis Endpoint"
                                    defaultValue={yAxisEnd}
                                    variant={"filled"}
                                    onChange={(e) =>
                                        setYAxisEnd(Number(e.target.value))
                                    }
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <hr />
                    <Typography
                        align="center"
                        variant="h5"
                        style={{ color: "#2a3eb1" }}
                    >
                        {" "}
                        Data Evaluation
                    </Typography>
                    <br />
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <Typography
                                align="center"
                                variant="p"
                                style={{ color: "#2a3eb1" }}
                            >
                                <b>Average</b>
                            </Typography>
                            <br />
                            {average}
                        </Grid>
                        <Grid item>
                            <Typography
                                align="center"
                                variant="p"
                                style={{ color: "#2a3eb1" }}
                            >
                                <b>Variance</b>
                            </Typography>
                            <br />
                            {variance}
                        </Grid>
                        <Grid item>
                            {" "}
                            <Typography
                                align="center"
                                variant="p"
                                style={{ color: "#2a3eb1" }}
                            >
                                <b>Standard Deviation</b>
                            </Typography>
                            <br />
                            {standardDeviation}
                        </Grid>
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
