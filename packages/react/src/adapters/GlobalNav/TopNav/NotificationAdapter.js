import React, { Component } from "react";
import PropTypes from "prop-types";
import { Notification as VanillaNotification } from "hig-vanilla";

import HIGAdapter, {
  MountedByHIGParent,
  MapsPropToMethod,
  MountsAnyChild,
  MapsEventListener
} from "../../HIGAdapter";

export default class NotificationAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        displayName="NotificationAdapter"
        HIGConstructor={VanillaNotification}
        {...this.props}
      >
        {adapterProps => (
          <div>
            <MountedByHIGParent mounter="addNotification" {...adapterProps} />
            <MapsPropToMethod
              value={this.props.timestamp}
              setter="setCreatedAt"
              {...adapterProps}
            />
            <MapsEventListener
              listener="onLinkClick"
              handler={this.props.onLinkClick}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onDismiss"
              handler={this.props.onDismiss}
              {...adapterProps}
            />
            <MapsPropToMethod value={this.props.unread} {...adapterProps}>
              {(instance, value) =>
                value ? instance.markUnread() : instance.markRead()
              }
            </MapsPropToMethod>
            <MapsPropToMethod value={this.props.featured} {...adapterProps}>
              {(instance, value) =>
                value ? instance.setFeatured() : instance.removeFeatured()
              }
            </MapsPropToMethod>
            <MountsAnyChild mounter="setContent" {...adapterProps}>
              {this.props.children}
            </MountsAnyChild>
          </div>
        )}
      </HIGAdapter>
    );
  }
}

NotificationAdapter.propTypes = {
  /**
   * A callback called when user clicks on a link in the notification
   */
  onLinkClick: PropTypes.func,
  /**
   * A callback called when user dismisses a featured notification
   */
  onDismiss: PropTypes.func,
  /**
   * {Boolean} to show specify whether notificaiton is read
   */
  unread: PropTypes.bool,
  /**
   * Indicates whether this is a featured notification
   */
  featured: PropTypes.bool,
  /**
   * Content for notification
   */
  children: PropTypes.node,
  /**
   * Timestamp for notification
   */
  timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]) // ISO date string
};
