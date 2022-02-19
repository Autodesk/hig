import React from "react";
import { HoverBehavior, PressedBehavior } from "@hig/behaviors";

import TableHeaderCellPresenter from "./presenters/TableHeaderCellPresenter";

export default function TableHeaderCell(props) {
	return (
		<HoverBehavior
	    	onMouseEnter={props.onMouseEnter}
	        onMouseLeave={props.onMouseLeave}
	    >
        	{({
        		hasHover,
        		onMouseEnter: handleMouseEnter,
        		onMouseLeave
        	}) => (
				<PressedBehavior
					onMouseDown={props.onMouseDown}
		            onMouseUp={props.onMouseUp}
		            onMouseLeave={onMouseLeave}
				>
			        {({
			          isPressed,
			          onMouseDown: handleMouseDown,
			          onMouseUp: handleMouseUp,
			          onPressedMouseLeave: handlePressedMouseLeave
			        }) => (
		        		<TableHeaderCellPresenter
		        			hasHover={hasHover}
		        			isPressed={isPressed}
		        			onMouseDown={handleMouseDown}
		        			onMouseEnter={handleMouseEnter}
		        			onMouseUp={handleMouseUp}
		        			onMouseLeave={handlePressedMouseLeave}
		        			{...props}
		        		/>
			        )}
			    </PressedBehavior>
			)}
		</HoverBehavior>
	);
}
