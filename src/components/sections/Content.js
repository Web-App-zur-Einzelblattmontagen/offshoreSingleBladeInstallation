import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Image from "../elements/Image";

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
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <br />
      <Grid item>
        <Button variant="contained" color="primary">
          Upload your data!
        </Button>
      </Grid>
      <br />
      <br />
      <Grid item lg={10} md={10} sm={10} xs={10} >
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
