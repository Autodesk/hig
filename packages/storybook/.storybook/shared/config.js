import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";

addDecorator((story, context) => withInfo({ header: true })(story)(context));
addDecorator(withKnobs);
