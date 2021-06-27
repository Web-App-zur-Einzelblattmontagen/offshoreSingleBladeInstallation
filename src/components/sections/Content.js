import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "../elements/Image";
import Typography from "@material-ui/core/Typography";
import CsvParse from "@vtex/react-csv-parse";
import {
  LineChart,
  AreaChart,
  Line,
  XAxis,
  Area,
  YAxis,
  Bar,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const handleFileUpload = (event) => {};

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

  const handleData = (data) => {
    setData(data);
    console.log(data);
  };
  const handleError = (e) => {
    console.log(e);
  };
  const { classes } = props;

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
          render={(onChange) => <input type="file" onChange={onChange} />}
        />
      </Grid>
      <br />
      <Grid item lg={10} md={10} sm={10} xs={10}>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[-0.03, 0.03]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pos_x"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Grid>
    </Grid>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
