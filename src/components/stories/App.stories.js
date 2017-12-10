import React from "react";
import { storiesOf } from "@storybook/react";
import App from "components/App";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("App", module);

stories.addDecorator(withKnobs);

stories.add("default", () => <App>{text("Content", "Content")}</App>);
