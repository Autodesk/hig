import React from "react";

import { text } from "@storybook/addon-knobs/react";
import Button from "@hig/button";
import { translate as t } from "@hig/storybook/utils";

import Banner from "../Banner";
import * as languages from "./i18n";

/**
 * @param {string} language
 * @returns {string} The message pulled from translations
 */
export function getMessage(language) {
  return text("Message", t(languages, language, "BANNER_MESSAGE"));
}

/**
 * @typedef {Object} BannerStory
 * @property {string} description
 * @property {function({ language: string; }): JSX.Element} getProps
 */

/** @type {BannerStory[]} */
export default [
  {
    description: "default",
    getProps: ({ language }) => ({
      children: getMessage(language),
      dismissButtonTitle: "Close"
    })
  },
  {
    description: "verbose, with interactions",
    getProps: ({ language }) => ({
      type: Banner.types.WARNING,
      children: getMessage(language),
      dismissButtonTitle: "Close",
      // eslint-disable-next-line react/prop-types
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
