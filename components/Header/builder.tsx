import { Builder } from "@builder.io/react";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import { makeStyles } from "@mui/styles";
import Parallax from "../Parallax/Parallax";

import productStyle from "../../styles/ts/pages/productStyle";
const useStyles = makeStyles(productStyle);

const HeaderComponent = () => {
  const classes = useStyles();

  return (
    <>
      <Header
        brand="NextJS Material Kit PRO"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "rose",
        }}
      />
      <Parallax
        image="/img/bg6.jpg"
        filter="rose"
        className={classes.pageHeader}
      >
        <div className={classes.container}></div>
      </Parallax>
    </>
  );
};

Builder.registerComponent(HeaderComponent, {
  name: "Header",
  inputs: [],
});
