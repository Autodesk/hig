import * as PropTypes from "prop-types";

import HIGElement from "../../../elements/HIGElement";
import HIGNodeList from "../../../elements/HIGNodeList";
import HIGChildValidator from "../../../elements/HIGChildValidator";
import createComponent from "../../createComponent";

import GroupComponent, { GroupAdapter } from "./GroupAdapter";
import LinkComponent, { LinkAdapter } from "./LinkAdapter";
import SearchComponent, { SearchAdapter } from "./SearchAdapter";

export class SideNavAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.groups = new HIGNodeList({
      GroupAdapter: {
        type: GroupAdapter,
        HIGConstructor: this.hig.partials.Group,
        onAdd: (instance, beforeInstance) => {
          this.hig.addGroup(instance, beforeInstance);
        }
      }
    });

    this.links = new HIGNodeList({
      LinkAdapter: {
        type: LinkAdapter,
        HIGConstructor: this.hig.partials.Link,
        onAdd: (instance, beforeInstance) => {
          this.hig.addLink(instance, beforeInstance);
        }
      }
    });
  }

  componentDidMount() {
    this.groups.componentDidMount();
    this.links.componentDidMount();

    if (this.search) {
      this.hig.addSearch(this.search.hig);
      this.search.mount();
    }

    if (this.props.headerLabel) {
      this.commitUpdate(["headerLabel", this.props.headerLabel]);
    }

    if (this.props.headerLink) {
      this.commitUpdate(["headerLink", this.props.headerLink]);
    }

    if (this.props.superHeaderLabel) {
      this.commitUpdate(["superHeaderLabel", this.props.superHeaderLabel]);
    }

    if (this.props.superHeaderLink) {
      this.commitUpdate(["superHeaderLink", this.props.superHeaderLink]);
    }

    if (this.props.onHeaderClick) {
      this.commitUpdate(["onHeaderClick", this.props.onHeaderClick]);
    }

    if (this.props.onSuperHeaderClick) {
      this.commitUpdate(["onSuperHeaderClick", this.props.onSuperHeaderClick]);
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case "copyright": {
          this.hig.setCopyright(propValue);
          break;
        }
        case "headerLabel": {
          this.hig.setHeaderLabel(propValue);
          break;
        }
        case "headerLink": {
          this.hig.setHeaderLink(propValue);
          break;
        }
        case "superHeaderLabel": {
          this.hig.setSuperHeaderLabel(propValue);
          break;
        }
        case "superHeaderLink": {
          this.hig.setSuperHeaderLink(propValue);
          break;
        }
        case "onHeaderClick": {
          const dispose = this._disposeFunctions.get("onHeaderClickDispose");

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onHeaderClickDispose",
            this.hig.onHeaderClick(propValue)
          );
          break;
        }
        case "onSuperHeaderClick": {
          const dispose = this._disposeFunctions.get(
            "onSuperHeaderClickDispose"
          );

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            "onSuperHeaderClickDispose",
            this.hig.onSuperHeaderClick(propValue)
          );
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

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case GroupAdapter:
        return new GroupAdapter(this.hig.partials.Group, props);
      case LinkAdapter:
        return new LinkAdapter(this.hig.partials.Link, props);
      case SearchAdapter:
        return new SearchAdapter(this.hig.partials.Search, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance) {
    this.insertBefore(instance);
  }

  insertBefore(instance, insertBeforeIndex) {
    if (instance instanceof GroupAdapter) {
      this.groups.insertBefore(instance, insertBeforeIndex);
    } else if (instance instanceof LinkAdapter) {
      this.links.insertBefore(instance, insertBeforeIndex);
    } else if (instance instanceof SearchAdapter) {
      if (this.search) {
        throw new Error("only one Search is allowed");
      } else {
        this.search = instance;

        if (this.mounted) {
          instance.componentDidMount();
        }
      }
    } else {
      throw new Error("unknown type");
    }
  }

  removeChild(instance) {
    if (instance instanceof GroupAdapter) {
      this.groups.removeChild(instance);
    }

    if (instance instanceof LinkAdapter) {
      this.links.removeChild(instance);
    }

    if (instance instanceof SearchAdapter) {
      this.search = null;
    }

    instance.unmount();
  }
}

const SideNavComponent = createComponent(SideNavAdapter);

SideNavComponent.propTypes = {
  children: HIGChildValidator([GroupComponent, LinkComponent, SearchComponent]),
  copyright: PropTypes.string,
  headerLabel: PropTypes.string,
  headerLink: PropTypes.string,
  onHeaderClick: PropTypes.func,
  onSuperHeaderClick: PropTypes.func,
  superHeaderLabel: PropTypes.string,
  superHeaderLink: PropTypes.string
};

SideNavComponent.__docgenInfo = {
  props: {
    children: {
      description: "supports adding Group, Link, anand Search components"
    },
    copyright: {
      descroption: "copyright notice at bottom of the side nav"
    }
  }
};

SideNavComponent.Group = GroupComponent;
SideNavComponent.Link = LinkComponent;
SideNavComponent.Search = SearchComponent;

export default SideNavComponent;
