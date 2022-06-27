import { Builder } from "@builder.io/react";
import { makeStyles } from "@mui/styles";
import InfoArea from "./InfoArea";
import { Favorite } from "@mui/icons-material";

import productStyle from "../../styles/ts/pages/productStyle";
const useStyles = makeStyles(productStyle);

const Component = ({ title, description, icon }: any) => (
  <InfoArea
    title={title}
    description={description}
    icon={icon || Favorite}
    iconColor="rose"
    vertical
  />
);

Builder.registerComponent(InfoArea, {
  name: "Info area",
  inputs: [
    {
      name: "icon",
      type: "string",
    },
    {
      name: "icon color",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
  ],
});
