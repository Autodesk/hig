import createComponent from "../../../adapters/createComponent";
import HIGNodeList from "../../HIGNodeList";
import HIGChildValidator from "../../HIGChildValidator";

import SectionComponent, {
  Section
} from "../../../adapters/GlobalNav/SideNav/SectionAdapter";

// Does not extend HIGElement because it's not a real HIG component
export class SectionList {
  constructor(higInstance) {
    this.hig = higInstance;
    this.sections = new HIGNodeList({
      Section: {
        type: Section,
        HIGConstructor: this.hig.partials.Section,
        onAdd: (instance, beforeInstance) => {
          this.hig.addSection(instance, beforeInstance);
        }
      }
    });
  }

  mount() {
    this.sections.componentDidMount();
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(ElementConstructor, props) {
    return this.sections.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.sections.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.sections.removeChild(instance);
  }

  forEach(handler) {
    this.sections.forEach(handler);
  }
}

const SectionListComponent = createComponent(SectionList);

SectionListComponent.propTypes = {
  children: HIGChildValidator([SectionComponent])
};

SectionListComponent.__docgenInfo = {
  props: {
    children: {
      description: "support adding Section"
    }
  }
};

SectionListComponent.Section = SectionComponent;

export default SectionListComponent;
