import { Component } from "react";
import PropTypes from "prop-types";

export default class SpinnerBehavior extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.func,
        numberInput: PropTypes.number,
        onChange: PropTypes.func
    }
    static defaultProps = {
        defaultInput: 0
      };
    state = {
        numberInput: this.props.defaultInput
    }

    increment() {
        this.setState({numberInput: this.state.numberInput + 1})
    }

    decrement() {
        this.setState({numberInput: this.state.numberInput - 1})
    }

    handleChange = ()=>{
        this.increment();
    }

    render() {
        const { onClick: handleClick } = this.props;
        const { handleChange } = this;
        const numberInput = this.state.numberInput;
        return this.props.children({
            numberInput,
            handleClick,
            handleChange
        });
    }

}