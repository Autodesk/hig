import React from "react";
import "./toasts.scss";

export default class Toasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: React.Children.toArray(this.props.children)
    };
  }

  handleDismiss = key => {
    const childIndexToRemove = this.state.items.findIndex(el => el.key === key);

    if (childIndexToRemove > -1) {
      const newItems = this.state.items.slice();
      newItems.splice(childIndexToRemove, 1);
      this.setState({ items: newItems });
    }
  };

  render() {
    return (
      <div className="hig__toasts">
        {this.state.items.map(child =>
          React.cloneElement(child, {
            onDismiss: this.handleDismiss.bind(this, child.key)
          })
        )}
      </div>
    );
  }
}
