import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import styles from "../../styles/ts/components/buttonStyle";

const useStyles = makeStyles(styles);

const RegularButton = React.forwardRef(
  (
    {
      color,
      round,
      children,
      fullWidth,
      disabled,
      simple,
      size,
      block,
      link,
      justIcon,
      fileButton,
      className,
      ...rest
    }: any,
    ref
  ) => {
    const classes = useStyles();
    const btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [classes.fileButton]: fileButton,
      [className]: className,
    });
    return (
      <Button {...rest} ref={ref} className={btnClasses}>
        {children}
      </Button>
    );
  }
);

RegularButton.displayName = "RegularButton";

export default RegularButton;
