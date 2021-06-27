import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "../elements/Image";
import Typography from "@material-ui/core/Typography";
import CsvParse from "@vtex/react-csv-parse";

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
    setData({ data });
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
      <Grid item>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: "#2a3eb1" }}
        >
          <b>Upload your data!</b>
        </Typography>
      </Grid>
      <Grid item>
        <CsvParse
          keys={keys}
          onDataUploaded={handleData}
          onError={handleError}
          render={(onChange) => <input type="file" onChange={onChange} />}
        />
      </Grid>
      <br />
      <Grid item lg={10} md={10} sm={10} xs={10}>
        <Image
          className="has-shadow"
          src={require("./../../assets/images/undraw_online_articles_79ff.png")}
          alt="Features split 01"
          style={{ borderRadius: "20px" }}
        />
      </Grid>
    </Grid>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
