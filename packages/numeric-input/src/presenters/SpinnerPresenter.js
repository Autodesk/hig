import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import stylesheet from "./stylesheet";
import { CaretUp16, CaretDown16 } from "@hig/icons";
import UpPresenter from "./UpPresenter.js";
import DownPresenter from "./DownPresenter.js";

export default class SpinnerPresenter extends Component {
    static propTypes = {
        value: PropTypes.string,
        disabled: PropTypes.bool,
        hasFocus: PropTypes.bool,
        hasHover: PropTypes.bool,
        isPressed: PropTypes.bool,
        onBlur: PropTypes.func,
        onClick: PropTypes.func,
        onFocus: PropTypes.func,
        onMouseDown: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onMouseUp: PropTypes.func
    }

    static defaultProps = {
        disabled: false,
        value: "0"
    }

    render() {
        const {
            value,
            disabled,
            hasFocus,
            hasHover,
            isPressed,
            onBlur,
            onClick,
            onMouseDown,
            onMouseEnter,
            onMouseLeave,
            onMouseUp,
            onFocus,
            ...otherProps
        } = this.props;
        const iconColor = hasHover ? "red" : "";
        return (
            <ThemeContext.Consumer>
                {({ resolvedRoles }) => {
                    const styles = stylesheet (
                        {
                            disabled,
                            hasFocus,
                            hasHover,
                            isPressed
                        }, 
                        resolvedRoles
                    );

                    return (
                        <div className={css(styles.spinnerWrapper)}>
                            <span>
                                <input
                                    className={css(styles.spinner)}
                                    disabled={disabled}
                                    onBlur={onBlur}
                                    onClick={onClick}
                                    onFocus={onFocus}
                                    onMouseDown={onMouseDown}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                    onMouseUp={onMouseUp}
                                    type="button"
                                    {...otherProps}
                                />
                                <UpPresenter
                                    disabled={disabled}
                                    hasFocus={hasFocus}
                                    hasHover={hasHover}
                                    isPressed={isPressed}
                                />
                            </span>
                        </div> 

                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}

                        /*
                        */
/*
                        
        
        
        <span className={css(styles.spinnerWrapper)}>
                            <span >
                                <CaretUp16 color={iconColor}/>
                            </span>
                            <span className={css(styles.spinnerDown)}>
                                <CaretDown16 />
                            </span>
                        </span>*/