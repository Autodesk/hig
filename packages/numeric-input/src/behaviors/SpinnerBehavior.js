import { Component } from "react";
import PropTypes from "prop-types";

export default class SpinnerBehavior extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.func,
        value: PropTypes.string
    }

    state = {
        value: parseInt(this.props.value)
    }

    increment() {
        return this.state.value + 1;
    }

    decrement() {
        return this.state.value - 1;
    }

    render() {
        
        const { onClick: handleClick} = this.props;
        const value = this.props.value;
        console.log(value);
        return this.props.children({
            value,
            handleClick
        });
    }

}