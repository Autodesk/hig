import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

function TypographyAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="Typography"
      HIGConstructor={HIG.Typography}
    >
      {adapterProps => (
        <div>
          <MapsPropToMethod
            setter="setType"
            value={props.type}
            {...adapterProps}
          />
          <MapsPropToMethod
            setter="setText"
            value={props.text}
            {...adapterProps}
          />
        </div>
      )}
    </HIGAdapter>
  );
}

TypographyAdapter.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

TypographyAdapter.__docgenInfo = {
  props: {
    type: {
      description: "{String - 'stack', 'inline'} type of the typography"
    },
    text: {
      description:
        "{String - styled or unstyled text to show inside the typography "
    }
  }
};

export default TypographyAdapter;
