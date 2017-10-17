import React from "react";
import PropTypes from "prop-types";
import * as HIG from "hig-vanilla";
import HIGAdapter, {
  MapsPropToMethod,
  MountedByHIGParentList,
  MountsAnyChild
} from "./HIGAdapter";

function GridItemAdapter(props) {
  return (
    <HIGAdapter
      {...props}
      displayName="GridItem"
      HIGConstructor={HIG.Grid._partials.GridItem}
    >
      {adapterProps => (
        <div>
          <MountedByHIGParentList mounter="addGridItem" {...adapterProps} />
          <MapsPropToMethod
            setter="setFraction"
            value={props.fraction}
            {...adapterProps}
          />
          {props.children ? (
            <MountsAnyChild mounter="addSlot" {...adapterProps}>
              {props.children}
            </MountsAnyChild>
          ) : null}
        </div>
      )}
    </HIGAdapter>
  );
}

GridItemAdapter.propTypes = {
  fraction: PropTypes.oneOf(HIG.Grid._partials.GridItem.AvailableFractions)
    .isRequired,
  children: PropTypes.node
};

GridItemAdapter.defaultProps = {
  children: undefined
};

GridItemAdapter.__docgenInfo = {
  props: {
    fraction: {
      description:
        "fraction in english, with 1, 2, 4, 8, 12 as nominators, so our possible values are: 'one-whole', 'one-half', 'one-quarter', 'two-quarter', 'three-quarter', 'one-eighth', 'two-eighths', 'three-eighths', 'four-eighths', 'five-eights', 'six-eighths', 'seven-eighths', 'one-twelfth', 'two-twelfths', 'three-twelfths', 'four-twelfths', 'five-twelfths', 'six-twelfths', 'seven-twelfths', 'eight-twelfths', 'nine-twelfths', 'ten-twelfths', 'eleven-twelfths'"
    },
    children: {
      description: "Content for the grid item"
    }
  }
};

export default GridItemAdapter;
