import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import {
  AddFolder24,
  Folder24,
  AddFolder16,
  Folder16
} from "@hig/icons";
// import { anchorPoints } from "@hig/flyout";
// import { controlledBool, controlledNumber } from "@hig/storybook/utils";

// import createSampleNotifications from "../__fixtures__/createSampleNotifications";
// import NotificationsFlyout from "../NotificationsFlyout";
// import NotificationsFlyoutLayout from "./NotificationsFlyoutLayout";
import TreeView from "../TreeView";
import TreeItem from "../TreeItem";

const groups = {
  animation: "Animation",
  basic: "Basic",
  i18n: "i18n"
};

const labels = {
  heading: "Heading",
  indicatorTitle: "Indicator title",
  loading: "Loading",
  notifications: "Notifications",
  onClickOutside: "Outside clicked",
  onScroll: "List scrolled",
  open: "Flyout open",
  unreadCount: "Unread count"
};

const defaults = {
  heading: "Notifications",
  indicatorTitle: "View notifications",
  loading: false,
  open: undefined,
  unreadCount: undefined
};

export default function treeViewObject() {
  return () => (
    <KnobbedThemeProvider>
      <TreeView>
        <TreeItem
          id="tree-item-0"
          key="tree-item-0"
          label="Tree Item 0"
        >
          <TreeItem label="Tree Item 1" id="tree-item-1">
            <TreeItem label="Tree Item 2" id="tree-item-2" icon={<Folder16 />}>
              <TreeItem label="Tree Item 3" id="tree-item-3">
                <TreeItem label="Tree Item 4" id="tree-item-4" icon={<AddFolder16 />} />
                <TreeItem label="Tree Item 5" id="tree-item-5" />
                <TreeItem label="Tree Item 6" id="tree-item-6" />
              </TreeItem>
              <TreeItem label="Tree Item 7" id="tree-item-7" />
              <TreeItem label="Tree Item 8" id="tree-item-8" />
              <TreeItem
                label={
                  <div>
                    <strong>Tree</strong>
                    <em>Item 9</em>
                  </div>
                }
                id="tree-item-9"
              />
              <TreeItem label="Tree Item 10" id="tree-item-10" />
              <TreeItem label="Tree Item 11" id="tree-item-11" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem
          id="tree-item-12"
          key="tree-item-2"
          label="Tree Item 12"
        />
        <TreeItem
          id="tree-item-13"
          key="tree-item-13"
          label="Tree Item 13"
        >
          <TreeItem label="Tree Item 14" id="tree-item-14" />
          <TreeItem label="Tree Item 15" id="tree-item-15" />
        </TreeItem>
      </TreeView>
    </KnobbedThemeProvider>
  );
}

/*
<NotificationsFlyoutLayout>
        <NotificationsFlyout
          anchorPoint={anchorPoints.TOP_CENTER}
          notifications={createSampleNotifications()}
          heading={text(labels.heading, defaults.heading, groups.i18n)}
          indicatorTitle={text(
            labels.indicatorTitle,
            defaults.indicatorTitle,
            groups.i18n
          )}
          loading={boolean(labels.loading, defaults.loading, groups.animation)}
          onClickOutside={action(labels.onClickOutside)}
          onScroll={action(labels.onScroll)}
          open={controlledBool(labels.open, defaults.open, groups.basic)}
          unreadCount={controlledNumber(
            labels.unreadCount,
            defaults.unreadCount,
            groups.basic
          )}
        />
      </NotificationsFlyoutLayout> */
