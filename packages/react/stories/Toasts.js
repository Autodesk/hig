import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "elements/components/Avatar";
import Toast from "elements/components/Toast";
import Toasts from "elements/components/Toasts";

storiesOf("Toasts", module).add("default", () => (
  <Toasts>
    <Toast image={<Avatar name="Jon Snow" size="large-48" />} status="primary">
      Lorem ipsum dolor sit amet
    </Toast>
    <Toast
      image={<Avatar name="Arya Stark" size="large-48" />}
      status="warning"
    >
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Toast>
    <Toast
      image={
        <div style={{ width: "48px", height: "48px" }}>
          <img src="http://placekitten.com/g/48/48" alt="Placekitten" />
        </div>
      }
      status="danger"
    >
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Toast>
    <Toast>Simple English toast.</Toast>
  </Toasts>
));
