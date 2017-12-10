import React from "react";
import { storiesOf } from "@storybook/react";
import Homepage from "components/Homepage";

const datas = [
  {
    _id: "ID",
    nom: "NOM",
    adresse: "ADRESSE",
    tel: "TEL",
    description: "DESCRIPTION"
  }
];

storiesOf("Homepage", module)
  .add("without datas", () => <Homepage />)
  .add("with datas", () => <Homepage datas={datas} />);
