import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
// @material-ui/icons
import { ExpandMore } from "@mui/icons-material";
import styles from "../../styles/ts/components/accordionStyle";

import { data } from "./test-data";

const useStyles = makeStyles(styles);

export default function CustomAccordion(props: {
  active?: any;
  collapses?: any;
  activeColor?: any;
}) {
  const [active, setActive] = React.useState(
    props.active.length === undefined ? [props.active] : props.active
  );

  const [single] = React.useState(
    props.active.length === undefined ? true : false
  );
  const handleChange = (panel: any) => () => {
    let newArray: any[];

    if (single) {
      if (active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (active.indexOf(panel) === -1) {
        newArray = [...active, panel];
      } else {
        newArray = [...active];
        newArray.splice(active.indexOf(panel), 1);
      }
    }
    setActive(newArray);
  };
  const { collapses, activeColor } = props;
  const classes: any = useStyles();
  return (
    <div className={classes.root}>
      {(collapses || data).map(
        (
          prop: {
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            content:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          },
          key: React.Key | null | undefined
        ) => {
          return (
            <Accordion
              expanded={active === key || active.indexOf(key) !== -1}
              onChange={handleChange(key)}
              key={key}
              classes={{
                root: classes.accordion,
                expanded: classes.accordionExpanded,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                classes={{
                  root: `${classes.accordionSummary} ${
                    classes[activeColor + "AccordionSummary"]
                  }`,
                  expanded: `${classes.accordionSummaryExpaned} ${
                    classes[activeColor + "AccordionSummaryExpaned"]
                  }`,
                  content: classes.accordionSummaryContent,
                  expandIconWrapper: classes.accordionSummaryExpandIcon,
                }}
              >
                <h4 className={classes.title}>{prop.title}</h4>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                {prop.content}
              </AccordionDetails>
            </Accordion>
          );
        }
      )}
    </div>
  );
}

CustomAccordion.defaultProps = {
  active: -1,
  activeColor: "primary",
};

CustomAccordion.propTypes = {
  // index of the default active collapse
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
  activeColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
  ]),
};
