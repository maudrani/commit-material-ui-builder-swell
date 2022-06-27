/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
// @material-ui/icons
import Favorite from "@mui/icons-material";

import styles from "../../styles/ts/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props: {
  children?: any;
  content: any;
  theme: any;
  big: any;
  className?: any;
}) {
  const { children, content, theme, big, className } = props;
  const classes = useStyles();
  const themeType =
    theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined,
  });
  const aClasses = classNames({
    [classes.a]: true,
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
          " "
        )}
        {content}
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool,
  content: PropTypes.node.isRequired,
};
