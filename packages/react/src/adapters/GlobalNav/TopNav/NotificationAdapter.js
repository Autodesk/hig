import React from "react";
import PropTypes from "prop-types";
import { Notification as VanillaNotification } from "hig-vanilla";

import HIGAdapter, {
  MountedByHIGParent,
  MapsPropToMethod,
  MountsAnyChild
} from "../../HIGAdapter";

function NotificationAdapter(props) {
  return (
    <HIGAdapter
      displayName="NotificationAdapter"
      HIGConstructor={VanillaNotification}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addNotification" {...adapterProps} />
          <MapsPropToMethod
            value={props.timestamp}
            setter="setCreatedAt"
            {...adapterProps}
          />
          <MapsPropToMethod value={props.unread} {...adapterProps}>
            {(instance, value) =>
              value ? instance.markUnread() : instance.markRead()}
          </MapsPropToMethod>
          <MountsAnyChild mounter="setContent" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

NotificationAdapter.propTypes = {
  unread: PropTypes.bool,
  children: PropTypes.node,
  timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]) // ISO date string
};

NotificationAdapter.__docgenInfo = {
  props: {
    unread: {
      description: "{Boolean to show specify whether notificaiton is read"
    },
    children: {
      description: "content for notification"
    },
    timestamp: {
      description: "timstamp for notification"
    }
  }
};

export default NotificationAdapter;
