import React from "react";

import parseNotifications from "./parseNotifications";
import Notification from "../Notification";
import Notifications from "../facades/NotificationsFacade";
import { types } from "../types";

describe("notification-flyout/behaviors/parseNotifications", () => {
  function handleDismiss() {}

  [
    {
      desc: "returns an empty array when given `null`",
      input: null,
      expected: []
    },
    {
      desc: "returns an empty array when given `undefined`",
      input: undefined,
      expected: []
    },
    {
      desc: "returns an empty array when given an empty array",
      input: [],
      expected: []
    },
    {
      desc: "returns notifications when given an array of objects",
      input: [{ id: "1", type: types.PRIMARY }, { id: "2", unread: false }],
      expected: [{ id: "1", type: types.PRIMARY }, { id: "2", unread: false }]
    },
    {
      desc:
        "returns notifications when given an array of Notification elements",
      input: [
        <Notification id="1" showDismissButton />,
        <Notification id="2" onDismiss={handleDismiss} />
      ],
      expected: [
        { id: "1", showDismissButton: true },
        { id: "2", onDismiss: handleDismiss }
      ]
    },
    {
      desc: "returns notifications when given a Notifications element",
      input: (
        <Notifications>
          <Notification key="foo" id="1" featured />
          <Notification id="2">Hello World</Notification>
        </Notifications>
      ),
      expected: [
        { id: "1", key: ".$foo", featured: true },
        { id: "2", content: "Hello World" }
      ]
    },
    {
      desc:
        "returns notifications when given a single <Notification /> component as children",
      input: <Notification id="1" featured />,
      expected: [{ id: "1", featured: true }]
    }
  ].forEach(({ desc, input, expected }) => {
    it(desc, () => {
      const result = parseNotifications(input);

      expect(result).toMatchObject(expected);
    });
  });
});
