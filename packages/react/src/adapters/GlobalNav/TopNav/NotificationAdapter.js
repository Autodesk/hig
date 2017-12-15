import React from "react";
import PropTypes from "prop-types";
import { Notification as VanillaNotification } from "hig-vanilla";

import HIGAdapter, {
  MountedByHIGParent,
  MapsPropToMethod,
  MountsAnyChild,
  MapsEventListener
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
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MapsPropToMethod value={props.unread} {...adapterProps}>
            {(instance, value) =>
              value ? instance.markUnread() : instance.markRead()}
          </MapsPropToMethod>
          <MapsPropToMethod
            value={props.title}
            setter="setTitle"
            {...adapterProps}
          />
          <MountsAnyChild mounter="setContent" {...adapterProps}>
            {props.children}
          </MountsAnyChild>
        </div>
      )}
    </HIGAdapter>
  );
}

NotificationAdapter.propTypes = {
  onClick: PropTypes.func,
  unread: PropTypes.bool,
  children: PropTypes.node,
  timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]) // ISO date string
};

NotificationAdapter.__docgenInfo = {
  props: {
    unread: {
      description: "{Boolean} to show specify whether notificaiton is read"
    },
    children: {
      description: "content for notification"
    },
    timestamp: {
      description: "timstamp for notification"
    },
    onClick: {
      description:
        "Calls the provided callback when user clicks on the noticatiosn icon in the top nav"
    }
  }
};

export default NotificationAdapter;
