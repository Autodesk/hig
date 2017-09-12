import * as HIG from "hig-vanilla";
import HIGElement from "../../elements/HIGElement";
import createComponent from "../createComponent";
import HIGNodeList from "../../elements/HIGNodeList";
import HIGChildValidator from "../../elements/HIGChildValidator";
import GridItemComponent, { GridItemAdapter } from "./GridItemAdapter";
import GridItem from "../../elements/components/FormElements/GridItem"


class GridAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Grid, initialProps);

    this.gridItems = new HIGNodeList({
      GridItemAdapter: {
				type: GridItemAdapter,
        HIGConstructor: this.hig.partials.GridItem,
        onAdd: (instance, beforeInstance) => {
          this.hig.addGridItem(instance, beforeInstance);
        }
      }
    });
  }

  componentDidMount() {
    this.gridItems.componentDidMount();
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
			const propKey = updatePayload[i];
			
      switch (propKey) {
        case "children": {
          //no-op
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  createElement(ElementConstructor, props){
  	switch(ElementConstructor){
  		case GridItemAdapter: 
				return this.gridItems.createElement(ElementConstructor, props);
			default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);	
  	}
	}
	
	insertBefore(instance, beforeChild = {}) {
    if (instance instanceof GridItemAdapter) {
      this.gridItems.insertBefore(instance);
    } else {
      throw new Error(
        `${this.constructor.name} cannot have a child of type ${instance
          .constructor.name}`
      );
    }
  }
}

const GridComponent = createComponent(GridAdapter);

GridComponent.propTypes = {
	children: HIGChildValidator([GridItemComponent, GridItem ])
}

GridComponent.__docgenInfo = {
	props: {
		children: {
			description: "support adding GridItems"
		}
	}
}

GridComponent.GridItem = GridItemComponent;

export default GridComponent;

