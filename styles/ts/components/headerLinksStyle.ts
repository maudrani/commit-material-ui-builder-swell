import {
  grayColor,
  whiteColor,
  mlAuto,
  hexToRgb,
} from "../nextjs-material-kit-pro";

import tooltip from "../others/tooltipsStyle";

const headerLinksStyle = (theme: any) => ({
  list: {
    "@media (max-width: 1000px)": {
      WebkitBoxAlign: "center" as "center",
      MsFlexAlign: "center",
      alignItems: "center",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row",
    },
    "@media (max-width: 700px)": {
      display: "block",
    },
    marginTop: "0px",
    display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    float: "left" as "left",
    color: "inherit",
    position: "relative" as "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    "@media (max-width: 700px)": {
      "& ul": {
        maxHeight: "300px",
        overflow: "scroll",
      },
      width: "100%",
      "&:not(:last-child)": {
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: grayColor[14],
        },
      },
    },
  },
  listItemText: {
    padding: "0 !important" as any,
  },
  navLink: {
    color: "inherit",
    position: "relative" as "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase" as "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative" as "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem",
    },
    "@media (max-width: 700px)": {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px",
    },
  },
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px",
    },
    "& svg": {
      marginRight: "0px",
    },
  },
  navButton: {
    position: "relative" as "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase" as "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "@media (max-width: 700px)": {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    "& $icons": {
      marginRight: "3px",
    },
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px",
    },
    color: whiteColor,
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase" as "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px",
    },
    position: "relative" as "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase" as "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    "&, &:hover, &:focus,&:active ": {
      color: "inherit",
      backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.1)",
    },
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "14px",
  },
  dropdownIcons: {
    width: "24px",
    height: "24px",
    marginRight: "14px",
    opacity: "0.5",
    marginTop: "-4px",
    top: "1px",
    verticalAlign: "middle",
    fontSize: "24px",
    position: "relative" as "relative",
  },
  socialIcons: {
    position: "relative" as "relative",
    fontSize: "1.25rem",
    maxWidth: "24px",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "0.75rem 1.25rem 0.75rem 0.75rem",
    },
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
  collapse: {
    "@media (max-width: 1000px)": {
      display: "flex !important" as any,
      MsFlexPreferredSize: "auto",
      flexBasis: "auto",
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center" as "center",
    MsFlexAlign: "center",
    alignItems: "center",
  },
  mlAuto,
});

export default headerLinksStyle;
