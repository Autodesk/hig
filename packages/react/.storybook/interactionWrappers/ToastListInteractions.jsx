import React from "react";
import { sample } from "lodash";
import loremIpsum from "lorem-ipsum";
import Button from "adapters/ButtonAdapter";
import Toast, { _AVAILABLE_STATUSES } from "elements/components/Toast";
import ToastList from "elements/components/ToastList";

export default class ToastListInteractions extends React.Component {
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
    const childIndexToRemove = this.state.toasts.findIndex(el => el.key === key);

    if (childIndexToRemove > -1) {
      const nextToasts = this.state.toasts.slice();
      nextToasts.splice(childIndexToRemove, 1);
      this.setState({ toasts: nextToasts });
    }
  };

  _generateToast = () => (
    <Toast key={Math.random()} status={sample(_AVAILABLE_STATUSES)}>
      {loremIpsum({
        count: 2,
        unit: "sentences"
      })}
    </Toast>
  );

  render() {
    return (
      <div style={{
        boxSizing: "border-box",
        height: "calc(100vh - 48px - 16px)"  // Offset wrapper margin/padding and body margin
      }}>
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
