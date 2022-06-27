import { Builder } from "@builder.io/react";
import Accordion from "./Accordion";
import { data } from "./test-data";

const builderdata = data.map((el) => ({
  name: el.title,
  defaultValue: el.content,
  type: "string",
}));

Builder.registerComponent(Accordion, {
  name: "Accordion",
  inputs: [
    {
      name: "active",
      type: "number",
      defaultValue: "0",
    },
    {
      name: "collapses",
      type: "list",
      subFields: [...builderdata],
    },
  ],
});
