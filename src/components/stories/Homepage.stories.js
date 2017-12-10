import React from "react";
import { storiesOf } from "@storybook/react";
import Homepage from "components/Homepage";
import { withKnobs, object } from "@storybook/addon-knobs";

const datas = [
  {
    _id: "ID",
    nom: "NOM",
    adresse: "ADRESSE",
    tel: "TEL",
    description: "DESCRIPTION"
  }
];

const stories = storiesOf("Homepage", module);

stories.addDecorator(withKnobs);

stories
  .add("without datas", () => <Homepage />)
  .add("with datas", () => <Homepage datas={object("Datas", datas)} />);
