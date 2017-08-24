import createComponent from "../../createComponent";
import HIGElement from "../../../elements/HIGElement";
import HIGNodeList from "../../../elements/HIGNodeList";
import HIGChildValidator from "../../../elements/HIGChildValidator";

import TabAdapterComponent, { TabAdapter } from "./TabAdapter";

export class TabsAdapter extends HIGElement {
  constructor(HigConstructor, initialProps) {
    super(HigConstructor, initialProps);

    this.tabs = new HIGNodeList({
      TabAdapter: {
        type: TabAdapter,
        HIGConstructor: this.hig.partials.Tab,
        onAdd: (instance, beforeInstance) => {
          this.hig.addTab(instance, beforeInstance);
        }
      }
    });
  }

  componentDidMount() {
    this.tabs.componentDidMount();
  }

  createElement(ElementConstructor, props) {
    return this.tabs.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.tabs.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.tabs.removeChild(instance);
  }
}

const TabsAdapterComponent = createComponent(TabsAdapter);
TabsAdapterComponent.Tab = TabAdapterComponent;

TabsAdapterComponent.propTypes = {
  children: HIGChildValidator([TabAdapterComponent])
};

TabsAdapterComponent.__docgenInfo = {
  props: {
    children: {
      description: "support adding Tab components"
    }
  }
};

export default TabsAdapterComponent;
