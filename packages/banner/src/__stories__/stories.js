import React from "react";

import { text } from "@storybook/addon-knobs/react";
import { Button } from "hig-react";
import { translate as t } from "@hig/storybook/utils";

import Banner from "../Banner";
import * as languages from "./i18n";

/**
 * @typedef {Object} BannerStory
 * @property {string} description
 * @property {function({ language: string; }): JSX.Element} getProps
 */

/** @type {BannerStory[]} */
export default [
  {
    description: "default",
    getProps: () => ({})
  },
  {
    description: "verbose, with interactions",
    getProps: ({ language }) => ({
      type: Banner.types.WARNING,
      children:
        // eslint-disable-next-line max-len
        "PROCESS COMPLETE: Changes have been made to you document. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      actions: ({ isWrappingActions }) => (
        <Banner.Interactions isWrappingActions={isWrappingActions}>
          <Banner.Action>
            <Button
              type="secondary"
              size="small"
              width={isWrappingActions ? "grow" : "shrink"}
              title={text(
                "Resolve text",
                t(languages, language, "BANNER_RESOLVE_BUTTON_TEXT")
              )}
            />
          </Banner.Action>
          <Banner.Action>
            <Button
              type="secondary"
              size="small"
              width={isWrappingActions ? "grow" : "shrink"}
              title={text(
                "Reject text",
                t(languages, language, "BANNER_REJECT_BUTTON_TEXT")
              )}
            />
          </Banner.Action>
        </Banner.Interactions>
      )
    })
  }
];
