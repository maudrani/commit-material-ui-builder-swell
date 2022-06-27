import { Builder } from "@builder.io/react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { Tooltip } from "@mui/material";
import Button from "../CustomButtons/Button";
import { makeStyles } from "@mui/styles";
import productStyle from "../../styles/ts/pages/productStyle";
import classNames from "classnames";
import { Favorite } from "@mui/icons-material";

const useStyles = makeStyles(productStyle);

const ComponentCard = () => {
  const classes = useStyles();
  return (
    <Card product>
      <CardHeader image>
        <a href="#pablo">
          <img src="/images/product/card-product1.jpg" alt="cardProduct" />
        </a>
      </CardHeader>
      <CardBody>
        <h6 className={classNames(classes.cardCategory, classes.textRose)}>
          Trending
        </h6>
        <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
        <div className={classes.cardDescription}>
          Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been crafted in Italy
          from hard-wearing red textured-leather.
        </div>
      </CardBody>
      <CardFooter className={classes.justifyContentBetween}>
        <div className={classes.price}>
          <h4>$1,459</h4>
        </div>
        <div className={classes.stats}>
          <Tooltip
            id="tooltip-top"
            title="Save to Wishlist"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button justIcon color="rose" simple>
              <Favorite />
            </Button>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  );
};

Builder.registerComponent(ComponentCard, {
  name: "Small Product Card",
  inputs: [
    {
      name: "active",
      type: "number",
      defaultValue: "0",
    },
  ],
});
