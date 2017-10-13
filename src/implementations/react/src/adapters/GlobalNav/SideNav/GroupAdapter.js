import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MountedByHIGParentList,
  MountsHIGChildList
} from '../../HIGAdapter';

function GroupAdapter(props) {
  return (
    <HIGAdapter
      displayName="Group"
      HIGConstructor={HIG.GlobalNav._partials.SideNav._partials.Group}
      {...props}
    >{adapterProps => (
      <div>
        <MountsHIGChildList {...adapterProps}>{props.children}</MountsHIGChildList>
        <MountedByHIGParentList mounter="addGroup" {...adapterProps} />
      </div>
    )}
    </HIGAdapter>
  );
}

GroupAdapter.propTypes = {
  children: PropTypes.node
};

GroupAdapter.defaultProps = {
  children: undefined
};

export default GroupAdapter;
