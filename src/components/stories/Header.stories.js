import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "components/Header";

const stories = storiesOf("Header", module);;

stories.add("default", () => <Header />);
