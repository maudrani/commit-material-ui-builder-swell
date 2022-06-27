import {
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
} from "../nextjs-material-kit-pro";

const accordionStyle = (theme: any) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
  },
  accordion: {
    boxShadow: "none",
    "&:before": {
      display: "none !important" as any,
    },
  },
  accordionExpanded: {
    margin: "0 !important" as any,
  },
  accordionSummary: {
    minHeight: "auto !important" as any,
    backgroundColor: "transparent",
    borderBottom: "1px solid " + grayColor[6],
    padding: "25px 10px 5px 0px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    color: grayColor[1],
  },
  primaryExpansionPanelSummary: {
    "&:hover": {
      color: primaryColor[0],
    },
  },
  secondaryExpansionPanelSummary: {
    "&:hover": {
      color: secondaryColor[0],
    },
  },
  warningExpansionPanelSummary: {
    "&:hover": {
      color: warningColor[0],
    },
  },
  dangerExpansionPanelSummary: {
    "&:hover": {
      color: dangerColor[0],
    },
  },
  successExpansionPanelSummary: {
    "&:hover": {
      color: successColor[0],
    },
  },
  infoExpansionPanelSummary: {
    "&:hover": {
      color: infoColor[0],
    },
  },
  roseExpansionPanelSummary: {
    "&:hover": {
      color: roseColor[0],
    },
  },
  accordionSummaryExpaned: {
    "& $accordionSummaryExpandIcon": {
      "@media (max-width: 1000px)": {
        top: "auto !important" as any,
      },
      transform: "rotate(180deg)",
      "@media (max-width: 700px)": {
        top: "10px !important" as any,
      },
      // some jss/css to make the cards look a bit better on Internet Explorer
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
        display: "inline-block !important" as any,
        top: "10px !important" as any,
      },
    },
  },
  primaryExpansionPanelSummaryExpaned: {
    color: primaryColor[0],
  },
  secondaryExpansionPanelSummaryExpaned: {
    color: secondaryColor[0],
  },
  warningExpansionPanelSummaryExpaned: {
    color: warningColor[0],
  },
  dangerExpansionPanelSummaryExpaned: {
    color: dangerColor[0],
  },
  successExpansionPanelSummaryExpaned: {
    color: successColor[0],
  },
  infoExpansionPanelSummaryExpaned: {
    color: infoColor[0],
  },
  roseExpansionPanelSummaryExpaned: {
    color: roseColor[0],
  },
  accordionSummaryContent: {
    margin: "0 !important" as any,
  },
  accordionSummaryExpandIcon: {
    "@media (max-width: 1000px)": {
      top: "auto !important" as any,
    },
    transform: "rotate(0deg)",
    color: "inherit",
    right: "10px",
    position: "absolute" as "absolute",
    "@media (max-width: 700px)": {
      top: "10px !important" as any,
    },
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important" as any,
    },
  },
  accordionSummaryExpandIconExpanded: {},
  title: {
    fontSize: "15px",
    fontWeight: "bolder",
    marginTop: "0",
    marginBottom: "0",
    color: "inherit",
  },
  accordionDetails: {
    display: "block",
    padding: "15px 0px 5px",
    fontSize: ".875rem",
  },
});

export default accordionStyle;
