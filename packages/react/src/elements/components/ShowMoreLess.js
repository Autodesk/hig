import React, { Component } from "react";
import PropTypes from "prop-types";
import TextLinkAdapter from "../../adapters/TextLinkAdapter";

class ShowMoreLess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showLink: true
    };
  }

  componentDidMount() {
    this.showMoreOrLess(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.showMoreOrLess(nextProps);
  }

  setChildContainer = el => {
    this.childContainer = el;
  };

  overflowAttribute = () => (this.state.open ? "visible" : "hidden");

  toggleOpen = () => this.setState({ open: !this.state.open });

  showMoreOrLess = props => {
    this.setState({
      showLink:
        this.childContainer &&
        this.childContainer.offsetHeight > props.maxHeight
    });
  };

  linkLabel = () =>
    this.state.open ? this.props.showLessLabel : this.props.showMoreLabel;

  render() {
    return (
      <div className="hig__show__more__less__container">
        <div
          className="hig__show__more__less__content"
          style={{
            maxHeight: this.state.open
              ? `${this.childContainer.offsetHeight}px`
              : `${this.props.maxHeight}px`,
            overflow: this.overflowAttribute(),
            marginBottom: "16px"
          }}
        >
          <div ref={this.setChildContainer}> {this.props.children}</div>
        </div>
        {this.state.showLink && (
          <TextLinkAdapter text={this.linkLabel()} onClick={this.toggleOpen} />
        )}
      </div>
    );
  }
}

ShowMoreLess.defaultProps = {
  maxHeight: 350,
  showMoreLabel: "Show more",
  showLessLabel: "Show less"
};

ShowMoreLess.propTypes = {
  maxHeight: PropTypes.number,
  showLessLabel: PropTypes.string,
  showMoreLabel: PropTypes.string
};

ShowMoreLess.__docgenInfo = {
  props: {
    maxHeight: {
      description: "{Number} Max height for content container"
    },
    showLessLabel: {
      description: "{String} content for label in expanded content container"
    },
    showMoreLabel: {
      description: "{String} content for label in collapsed content container"
    }
  }
};

export default ShowMoreLess;
