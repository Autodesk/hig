import React from 'react';
import * as HIG from 'hig-vanilla';
import PropTypes from 'prop-types';

import HIGAdapter, { MapsPropToMethod } from '../HIGAdapter';

function TextCellContentAdapter(props) {
  return (
    <HIGAdapter displayName="TextCellContent" HIGConstructor={HIG.TextCellContent} {...props}>{adapterProps => (
      <div>
        <MapsPropToMethod value={props.text} setter="setText" {...adapterProps} />
        <MapsPropToMethod value={props.detail} setter="setDetail" {...adapterProps} />
        <MapsPropToMethod value={props.alignment} setter="setAlignment" {...adapterProps} />
      </div>
    )}
    </HIGAdapter>
  );
}

TextCellContentAdapter.propTypes = {
  text: PropTypes.string,
  detail: PropTypes.string,
  alignment: PropTypes.oneOf(HIG.TextCellContent.AvailableAlignments)
};

TextCellContentAdapter.defaultProps = {
  text: undefined,
  detail: undefined,
  alignment: undefined
};

TextCellContentAdapter.__docgenInfo = {
  props: {
    text: {
      description: 'sets {String} text in cell'
    },
    alignment: {
      description: 'sets {String} text-position of cell'
    },
    detail: {
      description: 'sets {String} supporting text for cell in body of table'
    }
  }
};


export default TextCellContentAdapter;
