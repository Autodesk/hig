import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';

import HIGAdapter, { MapsPropToMethod, MountedByHIGParentList } from '../HIGAdapter';

function TextCellAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="TextCell"
      HIGConstructor={HIG.Table._partials.TableRow._partials.TextCell}
    >{adapterProps => (
      <div>
        <MountedByHIGParentList mounter="addCell" {...adapterProps} />
        <MapsPropToMethod value={props.text} setter="setText" {...adapterProps} />
        <MapsPropToMethod value={props.detail} setter="setDetail" {...adapterProps} />
        <MapsPropToMethod value={props.alignment} setter="setAlignment" {...adapterProps} />
      </div>
    )}
    </HIGAdapter>
  );
}

TextCellAdapter.propTypes = {
  text: PropTypes.string,
  detail: PropTypes.string,
  alignment: PropTypes.oneOf(HIG.Table._partials.TableRow._partials.TextCell.AvailableAlignments)
};

TextCellAdapter.defaultProps = {
  text: undefined,
  detail: undefined,
  alignment: undefined
};

export default TextCellAdapter;
