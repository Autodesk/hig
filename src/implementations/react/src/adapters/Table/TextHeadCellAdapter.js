import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';

import HIGAdapter, { MapsPropToMethod, MountedByHIGParentList } from '../HIGAdapter';

function TextHeadCellAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="TextHeadCell"
      HIGConstructor={HIG.Table._partials.TableHead._partials.TextHeadCell}
    >{adapterProps => (
      <div>
          <MountedByHIGParentList mounter="addCell" {...adapterProps} />
          <MapsPropToMethod value={props.text} setter="setText" {...adapterProps} />
          <MapsPropToMethod value={props.alignment} setter="setAlignment" {...adapterProps} />
          <MapsPropToMethod value={props.width} setter="setWidth" {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

TextHeadCellAdapter.propTypes = {
  text: PropTypes.string,
  alignment: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextHeadCellAdapter.defaultProps = {
  text: undefined,
  alignment: undefined,
  width: undefined,
};

export default TextHeadCellAdapter;
