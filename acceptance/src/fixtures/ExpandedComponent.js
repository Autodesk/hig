import React from 'react';
import { css } from "emotion";

const styles = {
    height: "500px",
    padding: "20px"
}

const ExpandedComponent = () => {
    return (
        <div className={css(styles)}>
            Custom Expanded Content
        </div>
    )
}

export default ExpandedComponent;
