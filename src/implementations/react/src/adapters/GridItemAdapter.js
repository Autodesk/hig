import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";

export class GridItemAdapter extends HIGElement {
  componentDidMount() {
    var commitProps = [];
    if (this.props.fraction) {
      commitProps.push("fraction", this.props.fraction);
    }

    if (this.props.content) {
      commitProps.push("content", this.props.content);
    }

    this.commitUpdate(commitProps);
  }

  commitUpdate(updatePayload) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "fraction": {
          this.hig.setFraction(propValue);
          break;
        }
        case "content": {
          this.hig.addSlot(propValue);
          break;
        }
        case "children": {
          // No-op
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const GridItemComponent = createComponent(GridItemAdapter);

GridItemComponent.propTypes = {
  fraction: PropTypes.string,
  content: PropTypes.any
};

GridItemComponent.__docgenInfo = {
  props: {
    fraction: {
      description: "fraction in english, with 1, 2, 4, 8, 12 as nominators, so our possible values are: 'one-whole', 'one-half', 'one-quarter', 'two-quarter', 'three-quarter', 'one-eighth', 'two-eighths', 'three-eighths', 'four-eighths', 'five-eights', 'six-eighths', 'seven-eighths', 'one-twelfth', 'two-twelfths', 'three-twelfths', 'four-twelfths', 'five-twelfths', 'six-twelfths', 'seven-twelfths', 'eight-twelfths', 'nine-twelfths', 'ten-twelfths', 'eleven-twelfths'"
    },
    content: {
      description: "Content for the grid item"
    }
  }
};

export default GridItemComponent;
