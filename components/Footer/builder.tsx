import { Builder } from "@builder.io/react";
import Footer from "./Footer";
import { makeStyles } from "@mui/styles";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Favorite } from "@mui/icons-material";

import productStyle from "../../styles/ts/pages/productStyle";
const useStyles = makeStyles(productStyle);

const Component = () => {
  const classes = useStyles();

  return (
    <Footer
      content={
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a href="#" target="_blank" className={classes.block}>
                  Commit Studio
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="#" target="_blank" className={classes.block}>
                  About us
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="#" className={classes.block}>
                  Blog
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="#" target="_blank" className={classes.block}>
                  Licenses
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getFullYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a href="#" target="_blank" className={classes.aClasses}>
              Commit Studio
            </a>{" "}
            for a better web.
          </div>
        </div>
      }
    />
  );
};

Builder.registerComponent(Component, {
  name: "Footer",
});
