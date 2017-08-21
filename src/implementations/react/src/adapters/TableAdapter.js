import * as HIG from "hig-vanilla";
import HIGElement from "../elements/HIGElement";
import * as PropTypes from "prop-types";
import createComponent from "./createComponent";
import HIGChildValidator from "../elements/HIGChildValidator";

import TableHeadComponent, { TableHeadAdapter } from "./TableHeadAdapter";

export class TableAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Table, initialProps);
  }

  componentDidMount() {
    //Add any children
    if (this.tableHead) {
      this.hig.addTableHead(this.tableHead.hig);
      this.tableHead.mount();
		}
		
		if (this.props.density) {
			this.commitUpdate(["density"], this.props.density)
		}
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case TableHeadAdapter:
        return new TableHeadAdapter(this.hig.partials.TableHead, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance) {
    this.appendChild(instance);
  }

  appendChild(instance, beforeChilde = {}) {
    if (instance instanceof TableHeadAdapter) {
      if (this.tableHead) {
        throw new Error("only one SideNav is allowed");
      } else {
        this.tableHead = instance;
        if (this.mounted) {
          this.hig.addTableHead(instance.hig);
          instance.mount();
        }
      }
    } else {
      throw new Error("unknown type");
    }
  }

  removeChild(instance) {
    if (instance instanceof TableHeadAdapter) {
      this.TableHeadAdapter = null;
    }
    instance.unmount();
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
				case "density": {
					this.hig.setDensity(propValue)
					break;
				}
      	case "children": {
          // No-op
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}

const TableComponent = createComponent(TableAdapter);

TableComponent.propTypes = {
	children: HIGChildValidator([
		TableHeadComponent
	])
}

TableComponent.TableHead = TableHeadComponent;

export default TableComponent
