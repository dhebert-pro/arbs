import React from "react";
import { storiesOf } from "@storybook/react";
import CategorySlug from "components/CategorySlug";

storiesOf("CategorySlug", module).add("default", () => (
  <CategorySlug slug="slug" />
));
