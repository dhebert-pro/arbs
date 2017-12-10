import React from "react";
import { storiesOf } from "@storybook/react";
import CategorySlug from "components/CategorySlug";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("CategorySlug", module);

stories.addDecorator(withKnobs);

stories.add("default", () => <CategorySlug slug={text("Slug", "slug")} />);
