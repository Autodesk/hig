import React from "react";
import Downshift from "downshift";
import { combineEventHandlers } from "@hig/utils";

/**
 * @typedef {import("downshift").DownshiftProps<any>} Props
 */

/**
 * @typedef {Object} GetRemoveButtonPropsOptions
 * @property {function(MouseEvent)} onClick
 * @property {any} item
 */

/**
 * @typedef {import("downshift").ControllerStateAndHelpers<any>} ControllerStateAndHelpers
 * @property {function(GetRemoveButtonPropsOptions): any} getRemoveButtonProps
 * @property {any[]} selectedItems
 */

export default class MultiDownshift extends React.Component {
  static propTypes = {
    ...Downshift.propTypes
  };

  state = {
    selectedItems: []
  };

  /**
   * @param {import("downshift").ControllerStateAndHelpers<any>} downshift
   * @returns {ControllerStateAndHelpers}
   */
  getStateAndHelpers(downshift) {
    const { selectedItems } = this.state;
    const { getRemoveButtonProps } = this;
    const getInputProps = this.createInputPropsGetter(downshift);

    return {
      ...downshift,
      getRemoveButtonProps,
      selectedItems,
      getInputProps
    };
  }

  /**
   * @param {GetRemoveButtonPropsOptions} options
   * @returns {any}
   */
  getRemoveButtonProps = ({ onClick, item, ...props } = {}) => {
    /**
     * @param {MouseEvent} event
     */
    const handleRemoveButtonClick = event => {
      event.stopPropagation();
      this.removeItem(item);
    };

    const handleClick = combineEventHandlers(onClick, handleRemoveButtonClick);

    return {
      ...props,
      onClick: handleClick
    };
  };

  /**
   * @returns {import("downshift").ControllerStateAndHelpers}
   */
  getDownshiftProps() {
    const { children, selectedItem, ...passThruProps } = this.props;

    return {
      ...passThruProps,
      stateReducer: this.stateReducer,
      onChange: this.handleChange
    };
  }

  /**
   * @param {import("downshift").DownshiftState<any>} state
   * @param {import("downshift").StateChangeOptions<any>} changes
   * @returns {import("downshift").Partial<StateChangeOptions<any>>}
   */
  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: true
        };
      default:
        return changes;
    }
  };

  /**
   * @param {import("downshift").ControllerStateAndHelpers} downshift
   */
  createChangeTrigger(downshift) {
    const multiDownshift = this.getStateAndHelpers(downshift);

    return () => {
      const { onChange } = this.props;
      const { selectedItems } = this.state;

      if (onChange) {
        onChange(selectedItems, multiDownshift);
      }
    };
  }

  /**
   * @param {any} selectedItem
   * @param {import("downshift").ControllerStateAndHelpers} downshift
   */
  handleChange = (selectedItem, downshift) => {
    const { selectedItems } = this.state;
    const triggerChange = this.createChangeTrigger(downshift);

    if (selectedItems.includes(selectedItem)) {
      this.removeItem(selectedItem, triggerChange);
    } else {
      this.addSelectedItem(selectedItem, triggerChange);
    }
  };

  /**
   * @returns {string}
   */
  selectedItemsToString() {
    const { itemToString } = this.props;
    const { selectedItems } = this.state;

    return selectedItems.map(itemToString).join(", ");
  }

  /**
   * @param {import("downshift").ControllerStateAndHelpers} downshift
   * @returns {function(import("downshift").GetInputPropsOptions): any}
   */
  createInputPropsGetter({ getInputProps }) {
    return props => ({
      ...getInputProps(props),
      value: this.selectedItemsToString()
    });
  }

  /**
   * @param {any} removedItem
   * @param {Function} done
   */
  removeItem(removedItem, done) {
    const { selectedItems } = this.state;
    const newItems = selectedItems.filter(
      selectedItem => selectedItem !== removedItem
    );

    this.setState({ selectedItems: newItems }, done);
  }

  /**
   * @param {any} removedItem
   * @param {Function} done
   */
  addSelectedItem(addedItem, done) {
    const { selectedItems } = this.state;
    const newItems = [...selectedItems, addedItem];

    this.setState({ selectedItems: newItems }, done);
  }

  /**
   * @param {import("downshift").ControllerStateAndHelpers} downshift
   */
  renderPresenter = downshift =>
    this.props.children(this.getStateAndHelpers(downshift));

  render() {
    return (
      <Downshift {...this.getDownshiftProps()}>
        {this.renderPresenter}
      </Downshift>
    );
  }
}
