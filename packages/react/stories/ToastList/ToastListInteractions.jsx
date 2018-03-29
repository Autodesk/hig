import React from "react";
import PropTypes from "prop-types";
import { sample } from "lodash";
import Button from "adapters/ButtonAdapter";
import Toast, { _AVAILABLE_STATUSES } from "elements/components/Toast";
import ToastList from "elements/components/ToastList";

export default class ToastListInteractions extends React.Component {
  static defaultProps = {
    initialToasts: []
  };

  static propTypes = {
    initialToasts: PropTypes.arrayOf(PropTypes.node),
    position: PropTypes.oneOf(["top", "bottom"])
  };

  constructor(props) {
    super(props);
    this.state = {
      toasts: this.props.initialToasts
    };
  }

  addRandomToast = () => {
    const currentToasts = this.state.toasts.slice();
    currentToasts.push(this._generateToast());
    this.setState({ toasts: currentToasts });
  };

  removeToast = ({ key }) => {
    const childIndexToRemove = this.state.toasts.findIndex(
      el => el.key === key
    );

    if (childIndexToRemove > -1) {
      const nextToasts = this.state.toasts.slice();
      nextToasts.splice(childIndexToRemove, 1);
      this.setState({ toasts: nextToasts });
    }
  };

  _generateToast = () => {
    const key = Math.random();
    return (
      <Toast key={key} status={sample(_AVAILABLE_STATUSES)}>
        <strong>New Toast</strong> was generated with a unique key and random
        status.
      </Toast>
    );
  };

  render() {
    return (
      <div>
        <Button onClick={this.addRandomToast} title="Add Random Toast" />

        <ToastList position={this.props.position}>
          {this.state.toasts.map(toast =>
            React.cloneElement(toast, {
              onDismiss: this.removeToast.bind(this, toast)
            })
          )}
        </ToastList>
      </div>
    );
  }
}
