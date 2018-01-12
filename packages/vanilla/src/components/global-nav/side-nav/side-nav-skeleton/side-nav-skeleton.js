import Interface from 'interface.json';
import Core from '_core.js';
import SkeletonItem from 'components/skeleton-item/skeleton-item';
import './side-nav-skeleton.scss';
import Template from './side-nav-skeleton.html';

const items = [
  {
    maxWidth: '180px',
    marginBottom: '36px'
  },
  {
    maxWidth: '180px',
    marginBottom: '24px'
  },
  {
    maxWidth: '180px',
    marginBottom: '24px'
  },
  {
    maxWidth: '124px',
    marginBottom: '36px'
  },
  {
    maxWidth: '180px',
    marginBottom: '16px'
  },
  {
    maxWidth: '180px',
    marginBottom: '16px'
  },
  {
    maxWidth: '180px',
    marginBottom: '16px'
  },
  {
    maxWidth: '180px',
    marginBottom: '16px'
  },
  {
    maxWidth: '124px'
  }
];
class SideNavSkeleton extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.skeletonItems = [];
  }

  _componentDidMount() {
    this._setSkeleton();
  }

  addSkeletonItem(skeletonItem, referenceItem) {
    if (skeletonItem instanceof SkeletonItem) {
      skeletonItem.mount(this.el, referenceItem);
    }
  }

  setTheme(theme) {
    if (this.skeletonItems && this.skeletonItems.length > 0) {
      this.skeletonItems.forEach((item) => {
        item.setTheme(theme);
      });
    }
  }

  _setSkeleton() {
    this.skeletonItems = items.map((item) => {
      const skeletonItem = new SkeletonItem({});
      this.addSkeletonItem(skeletonItem);
      skeletonItem.setMaxWidth(item.maxWidth);
      skeletonItem.setMarginBottom(item.marginBottom);
      return skeletonItem;
    });
  }
}

SideNavSkeleton._interface =
  Interface.components.GlobalNav.partials.SideNav.partials.SideNavSkeleton;
SideNavSkeleton._defaults = {};
SideNavSkeleton._partials = {};

export default SideNavSkeleton;
