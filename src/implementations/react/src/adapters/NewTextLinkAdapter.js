import React from 'react';
import PropTypes from 'prop-types';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { MapsPropToMethod, MapsEventListener } from './HIGAdapter';

function TextLinkAdapter(props) {
  return (
    <HIGAdapter {...props} displayName="TextLink" HIGConstructor={HIG.TextLink}>
      {(adapterProps) => (
        <div>
          <MapsEventListener listener="onClick" handler={props.onClick} {...adapterProps} />
          <MapsPropToMethod setter="setHref" value={props.href} {...adapterProps} />
          <MapsPropToMethod setter="setType" value={props.type} {...adapterProps} />
          <MapsPropToMethod setter="setText" value={props.text} {...adapterProps} />
        </div>
      )}
    </HIGAdapter>
  );
}

TextLinkAdapter.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(HIG.TextLink.AvailableTypes)
};

TextLinkAdapter.__docgenInfo = {
  props: {
    text: {
      description: "sets the text and alt-text of the link"
    },
    href: {
      description: "sets the link url or path"
    },
    type: {
      description: "specifies type of link"
    },
    onClick: {
      description: "triggers when you click the link"
    }
  }
};

export default TextLinkAdapter;
