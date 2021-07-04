import React from 'react';
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
    YAxis
} from "recharts";

function Chart(props) {


    if ((props.chartType) === "LineChart") {
        return (

            <LineChart
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
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"time"}
                       label={{value: "time", position: 'insideBottomRight', offset: -5}}

                />
                <YAxis dataKey={props.yAxisLabel} label={{value: props.yAxisLabel, angle: -90, position: 'insideLeft'}}
                       domain={[-0.5, 0.5]}/>
                <Tooltip/>
                <Legend/>
                <Line
                    type="monotone"
                    dataKey={props.yAxisLabel}
                    stroke="#8884d8"
                    activeDot={{r: 8}}
                />
            </LineChart>
        );
    } else if ((props.chartType) === "AreaChart") {
        return (
            <AreaChart
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
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"time"}
                       label={{value: "time", position: 'insideBottomRight', offset: -5}}

                />
                <YAxis dataKey={props.yAxisLabel} label={{value: props.yAxisLabel, angle: -90, position: 'insideLeft'}}
                       domain={[-0.5, 0.5]}/>
                <Tooltip/>
                <Legend/>
                <Area
                    type="monotone"
                    dataKey={props.yAxisLabel}
                    stroke="#8884d8"
                    activeDot={{r: 8}}
                />
            </AreaChart>
        )
    } else {
        return (
            <ScatterChart
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
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"time"}
                       label={{value: "time", position: 'insideBottomRight', offset: -5}}

                />
                <YAxis dataKey={props.yAxisLabel} label={{value: props.yAxisLabel, angle: -90, position: 'insideLeft'}}
                       domain={[-0.5, 0.5]}/>
                <Tooltip/>
                <Legend/>
                <Scatter
                    type="monotone"
                    dataKey={props.yAxisLabel}
                    stroke="#8884d8"
                    activeDot={{r: 8}}
                />
            </ScatterChart>
        )
    }

}

export default Chart;