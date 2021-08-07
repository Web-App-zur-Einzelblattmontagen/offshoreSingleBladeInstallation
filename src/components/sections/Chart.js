import React, { useCallback } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useCurrentPng } from "recharts-to-png";
import FileSaver from "file-saver";
import download from "downloadjs";

function Chart(props) {
    const onDownload = (e) => {
        e.preventDefault();
        fetch("http://zelgai1234.pythonanywhere.com/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data: props.data,
                name: localStorage.getItem("userName"),
            }),
        }).then((response) => {
            response.blob().then((blob) => download(blob));
        });
    };
    const [getPng, { ref, isLoading }] = useCurrentPng();
    const handleDownload = useCallback(async () => {
        const png = await getPng();

        // Verify that png is not undefined
        if (png) {
            // Download with FileSaver
            FileSaver.saveAs(png, "myChart.png");
        }
    }, [getPng]);

    if (props.chartType === "LineChart") {
        return (
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                <Grid item>
                    <LineChart
                        ref={ref}
                        width={700}
                        height={600}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey={"time"}
                            label={{
                                value: "time",
                                position: "insideBottomRight",
                                offset: -20,
                            }}
                        />
                        <YAxis
                            dataKey={props.yAxisLabel}
                            label={{
                                value: props.yAxisLabel,
                                angle: -90,
                                position: "insideLeft",
                            }}
                            domain={[props.yAxisStart, props.yAxisEnd]}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey={props.yAxisLabel}
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </Grid>
                <br />
                <Grid item>
                    <Button
                        variant="outlined"
                        style={{ color: "#2a3eb1", margin: 15 }}
                        onClick={handleDownload}
                    >
                        Download Plot as PNG
                    </Button>
                    <Button
                        variant="outlined"
                        style={{ color: "#2a3eb1", margin: 15  }}
                        onClick={onDownload}
                    >
                        Download Report as PDF
                    </Button>
                </Grid>
            </Grid>
        );
    } else if (props.chartType === "AreaChart") {
        return (
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                <Grid item>
                    <AreaChart
                        ref={ref}
                        width={700}
                        height={700}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey={"time"}
                            label={{
                                value: "time",
                                position: "insideBottomRight",
                                offset: -20,
                            }}
                        />
                        <YAxis
                            dataKey={props.yAxisLabel}
                            label={{
                                value: props.yAxisLabel,
                                angle: -90,
                                position: "insideLeft",
                            }}
                            domain={[props.yAxisStart, props.yAxisEnd]}
                        />
                        <Tooltip />
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey={props.yAxisLabel}
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </AreaChart>
                </Grid>
                <br />
                <Grid item>
                    <Button
                        variant="outlined"
                        style={{ color: "#2a3eb1" , margin: 15 }}
                        onClick={handleDownload}
                    >
                        Download Plot as PNG
                    </Button>
                    <Button
                        variant="outlined"
                        style={{ color: "#2a3eb1" , margin: 15 }}
                        onClick={onDownload}
                    >
                        Download Report as PDF
                    </Button>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                <Grid item>
                    <ScatterChart
                        ref={ref}
                        width={700}
                        height={800}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 100,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey={"time"}
                            label={{
                                value: "time",
                                position: "insideBottomRight",
                                offset: -20,
                            }}
                        />
                        <YAxis
                            dataKey={props.yAxisLabel}
                            label={{
                                value: props.yAxisLabel,
                                angle: -90,
                                position: "insideLeft",
                            }}
                            domain={[props.yAxisStart, props.yAxisEnd]}
                        />
                        <Tooltip />
                        <Legend />
                        <Scatter
                            type="monotone"
                            dataKey={props.yAxisLabel}
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </ScatterChart>
                </Grid>
                <br />
                <Grid item>
                    <Button
                        variant="outlined"
                        style={{ color: "#2a3eb1", margin: 15  }}
                        onClick={handleDownload}
                    >
                        Download Plot as PNG
                    </Button>
                    <Button
                        variant="outlined"
                        style={{ color: "#2a3eb1", margin: 15  }}
                        onClick={onDownload}
                    >
                        Download Report as PDF
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default Chart;
