import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

const useStyles = makeStyles(styles);

export default function GridContainer(props: {
  [x: string]: any;
  children: any;
  className: any;
}) {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: "",
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
