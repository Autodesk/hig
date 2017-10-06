import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { MountsHIGChild } from './HIGAdapter';

function GridAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="Grid" HIGConstructor={HIG.Grid}>
      {(adapterProps) => (
        <div>
          <MountsHIGChild {...adapterProps}>
            {props.children}
          </MountsHIGChild>
        </div>
      )}
    </HIGAdapter>
  );
}

GridAdapter.propTypes = {
  children: PropTypes.node
};

GridAdapter.__docgenInfo = {
  props: {
    children: {
      description: "support adding GridItems"
    }
  }
};

export default GridAdapter;
