import React from "react";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";

// core components
import {
  infoColor,
  whiteColor,
  title,
} from "../../styles/ts/nextjs-material-kit-pro";

const useStyles = makeStyles({
  progress: {
    color: infoColor[0],
    width: "6rem !important" as any as any,
    height: "6rem !important" as any as any,
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0",
  },
  iconWrapper: {
    display: "block",
  },
  title: {
    ...title,
    color: whiteColor,
  },
});

export default function PageChange(props: {
  path:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
}
