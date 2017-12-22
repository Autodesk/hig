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
              listener="onClick"
              handler={this.props.onClick}
              {...adapterProps}
            />
            <MapsEventListener
              listener="onFeaturedClick"
              handler={this.props.onFeaturedClick}
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
   * Calls the provided callback when user clicks on the noticatiosn icon in the top nav
   */
  onClick: PropTypes.func,
  onDismissed: PropTypes.func,
  /**
   * {Boolean} to show specify whether notificaiton is read
   */
  unread: PropTypes.bool,
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
