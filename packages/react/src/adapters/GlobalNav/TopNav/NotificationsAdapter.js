import React from "react";
import PropTypes from "prop-types";
import { Notifications as VanillaNotifications } from "hig-vanilla";
import HIGAdapter, {
  MountsHIGChildList,
  MountedByHIGParent,
  MapsPropToMethod,
  MapsEventListener
} from "../../HIGAdapter";

function NotificationsAdapter(props) {
  return (
    <HIGAdapter
      displayName="Notifications"
      HIGConstructor={VanillaNotifications}
      {...props}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParent mounter="addNotifications" {...adapterProps} />
          <MapsPropToMethod
            setter="setUnreadCount"
            value={props.unreadCount}
            {...adapterProps}
          />
          <MapsPropToMethod value={props.loading} {...adapterProps}>
            {(instance, value) =>
              value ? instance.setLoading() : instance.setNotLoading()}
          </MapsPropToMethod>

          <MapsPropToMethod
            value={props.showNotificationsCount}
            {...adapterProps}
          >
            {(instance, value) =>
              value
                ? instance.showNotificationsCount()
                : instance.hideNotificationsCount()}
          </MapsPropToMethod>

          <MapsPropToMethod
            value={props.title}
            setter="setTitle"
            {...adapterProps}
          />

          <MapsPropToMethod value={props.open} {...adapterProps}>
            {(instance, value) => (value ? instance.open() : instance.close())}
          </MapsPropToMethod>
          <MapsEventListener
            listener="onClickOutside"
            handler={props.onClickOutside}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onClick"
            handler={props.onClick}
            {...adapterProps}
          />
          <MapsEventListener
            listener="onScroll"
            handler={props.onScroll}
            {...adapterProps}
          />

          <MountsHIGChildList {...adapterProps}>
            {props.children}
          </MountsHIGChildList>
        </div>
      )}
    </HIGAdapter>
  );
}

NotificationsAdapter.propTypes = {
  open: PropTypes.bool,
  loading: PropTypes.bool,
  showUnreadBadge: PropTypes.bool,
  unreadCount: PropTypes.number,
  onClick: PropTypes.func,
  onClickOutside: PropTypes.func,
  onScroll: PropTypes.func
};

NotificationsAdapter.defaultProps = {};

export default NotificationsAdapter;
