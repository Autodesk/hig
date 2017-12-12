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
  onClickOutside: PropTypes.func
};

NotificationsAdapter.defaultProps = {};

export default NotificationsAdapter;
