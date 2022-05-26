import React from 'react';
import { css } from "emotion";
import { MultiCheckbox } from './MultiCheckbox';

const styles = {
  width: "300px",
  borderSpacing: 0,
  border: "1px solid palevioletred",
  color: "black",
  fontFamily: "sans-serif",
  marginBottom: "50px",
  padding: "10px"
};

const ColumnShowHideComponent = (props) => {
    return (
        <div className={css(styles)}>
            <div>
            <MultiCheckbox {...props.passedData?.toggleHideAllColumnsProps()} /> Toggle All
            </div>
            {
                props.passedData?.allColumns?.map(column => {
                    return (
                        <div key={column.id}>
                            <MultiCheckbox
                                {...column.getToggleHiddenProps()} 
                                setColumnHeaderArray={props.passedData?.setColumnHeaderArray}
                                getColumnHeaderArray={props.passedData?.getColumnHeaderArray}
                                headerName={column?.Header}
                            />
                            {typeof column.Header === 'string' ?  column.Header : null}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ColumnShowHideComponent;
