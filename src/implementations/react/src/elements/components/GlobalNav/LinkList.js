import createComponent from "../../../adapters/createComponent";
import HIGChildValidator from "../../HIGChildValidator";
import HIGNodeList from "../../HIGNodeList";

import LinkComponent, {
  Link
} from "../../../adapters/GlobalNav/SideNav/LinkAdapter";

// Does not extend HIGElement because it's not a real HIG component
export class LinkList {
  constructor(higInstance) {
    this.hig = higInstance;
    this.links = new HIGNodeList({
      Link: {
        type: Link,
        HIGConstructor: this.hig.partials.Link,
        onAdd: (instance, beforeInstance) => {
          this.hig.addLink(instance, beforeInstance);
        }
      }
    });
  }

  mount() {
    this.links.componentDidMount();
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(ElementConstructor, props) {
    return this.links.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.links.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.links.removeChild(instance);
  }
}

const LinkListComponent = createComponent(LinkList);

LinkListComponent.propTypes = {
  children: HIGChildValidator([LinkComponent])
};

LinkListComponent.__docgenInfo = {
  props: {
    children: {
      description: "support adding Link"
    }
  }
};

LinkListComponent.Link = LinkComponent;

export default LinkListComponent;
