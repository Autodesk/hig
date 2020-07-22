import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import stylesheet from "./stylesheet";
import { CaretUpMUI, CaretUpSUI, CaretDownMUI, CaretDownSUI } from "@hig/icons";

export default class SpinnerPresenter extends Component {
    static propTypes = {
        value: PropTypes.number,
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
            onChange,
            onMouseDown,
            onMouseEnter,
            onMouseLeave,
            onMouseUp,
            onFocus,
            increment,
            decrement,
            ...otherProps
        } = this.props;
        return (
            <ThemeContext.Consumer>
                {({ resolvedRoles, metadata }) => {
                    const styles = stylesheet (
                        {
                            disabled,
                            hasFocus,
                            hasHover,
                            isPressed
                        }, 
                        resolvedRoles
                    );
                    const UpIcon = metadata.densityId === "medium-density" ? CaretUpMUI : CaretUpSUI;
                    const DownIcon = metadata.densityId === "medium-density" ? CaretDownMUI : CaretDownSUI;
                    const ifKeyIsEnter = action => event => {
                        if (event.key === "Enter") {
                          action();
                        }
                      };
                    return (
                        <div className={css(styles.spinnerWrapper)}>
                            <span 
                                onBlur={onBlur}
                                onClick={increment}
                                onFocus={onFocus}
                                onChange={onChange}
                                onMouseDown={onMouseDown}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onMouseUp={onMouseUp}
                                onKeyDown={ifKeyIsEnter(increment)}
                                className = {css(styles.spinner)}
                                >
                                    <UpIcon/>
                            </span>
                            <span 
                                onBlur={onBlur}
                                onClick={decrement}
                                onFocus={onFocus}
                                onChange={onChange}
                                onMouseDown={onMouseDown}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onMouseUp={onMouseUp}
                                onKeyDown={ifKeyIsEnter(decrement)}
                                className = {css(styles.spinner)}
                                >
                                    <DownIcon/>
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
                        </span>
                        
                        
                            <span>
                                <input
                                    className={css(styles.spinner1)}
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
                            <span>
                                <input
                                        className={css(styles.spinner2)}
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
                                    <DownPresenter
                                        disabled={disabled}
                                        hasFocus={hasFocus}
                                        hasHover={hasHover}
                                        isPressed={isPressed}
                                    />
                            </span>
                            */