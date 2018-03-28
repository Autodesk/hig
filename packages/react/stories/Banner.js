import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs/react";
import { Banner, Button, Text } from "../src/hig-react";

const availableTypes = Object.values(Banner.types);

function getBannerKnobs(props) {
  const { label, message, onDismiss, type, ...otherProps } = props;

  return {
    label: text("Label", label),
    message: text("Message", message),
    onDismiss: action("Banner dismissed", onDismiss),
    type: select("Type", availableTypes, type),
    isVisible: true,
    labelId: "unique-id",
    ...otherProps
  };
}

function BannerDemo({ children, ...props }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Banner {...getBannerKnobs(props)}>{children}</Banner>
    </div>
  );
}

function BannerStory({ props }) {
  return <BannerDemo {...props} />;
}

const LONG_MESSAGE =
  // eslint-disable-next-line max-len
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sitaspertur.";

const bannerStories = storiesOf("Banner", module);

const stories = [
  {
    description: "default",
    props: {}
  },
  {
    description: "verbose, with interactions",
    props: {
      type: Banner.types.DANGER,
      label: "ERROR",
      message: LONG_MESSAGE,
      children: ({ isWrapping }) => (
        <Banner.Interactions isWrapping={isWrapping}>
          <Banner.Action>
            <Button title="Resolve" />
          </Banner.Action>
          <Banner.Action>
            <Button title="Reject" />
          </Banner.Action>
        </Banner.Interactions>
      )
    }
  }
];

stories.forEach(({ description, props }) => {
  bannerStories.add(description, () => <BannerStory props={props} />);
});
