import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import React from "react";
import NumericInput from "../index";
import getKnobs from "./getKnobs";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";

const storybook = storiesOf("Forms|NumericInput", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo(infoOptions)(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});

storybook.add(
  "controlled",
  withInfo(infoOptions)(() => {
    // create dummy component that wraps the Numeric Input and allows state:
    class StoryComp extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          value: this.props.value || 0
        };
      }

      onValueChange = value => {
        this.setState({ value: parseInt(value, 10) });
      };

      render() {
        const props = {
          ...this.props,
          onChange: this.onValueChange, // <--- Reason "StoryComp" is needed
          value: this.state.value // <--- Reason "StoryComp" is needed
        };

        console.log(`Yey value is: ${this.state.value}`);
        return <NumericInput {...props} />;
      }
    }

    const { ...otherProps } = getKnobs({
      value: 5,
      initialValue: undefined,
      disabled: false
    });

    return (
      <KnobbedThemeProvider>
        <StoryComp {...otherProps} />
      </KnobbedThemeProvider>
    );
  })
);

/*
{
    description: "controlled",
    getProps: () => (
    })
  }, */
