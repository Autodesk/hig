import React from "react";

import parseNotifications from "./parseNotifications";
import Notification from "../Notification";
import { types } from "../types";

describe("notification-flyout/behaviors/parseNotifications", () => {
  function handleDismiss() {}

  [
    {
      description: "returns an empty array when given `null`",
      input: null,
      expected: []
    },
    {
      description: "returns an empty array when given `undefined`",
      input: undefined,
      expected: []
    },
    {
      description: "returns an empty array when given an empty array",
      input: [],
      expected: []
    },
    {
      description: "returns notifications when given an array of objects",
      input: [
        {
          id: "1",
          type: types.PRIMARY
        },
        {
          id: "2",
          unread: false
        }
      ],
      expected: [
        {
          id: "1",
          type: types.PRIMARY
        },
        {
          id: "2",
          unread: false
        }
      ]
    },
    {
      description:
        "returns notifications when given an array of Notification elements",
      input: [
        <Notification id="1" showDismissButton />,
        <Notification id="2" onDismiss={handleDismiss} />
      ],
      expected: [
        {
          id: "1",
          showDismissButton: true
        },
        {
          id: "2",
          onDismiss: handleDismiss
        }
      ]
    },
    {
      description:
        "returns notifications when given a single <Notification /> component as children",
      input: <Notification id="1" featured />,
      expected: [
        {
          id: "1",
          featured: true
        }
      ]
    }
  ].forEach(({ description, input, expected }) => {
    it(description, () => {
      const result = parseNotifications(input);

      expect(result).toMatchObject(expected);
    });
  });
});
