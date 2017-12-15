import ProgressRing from 'components/progress-ring/progress-ring';
import Core from '_core.js';
import Template from './_loading.html';
import './_loading.scss';

/**
 * Creates an Loading
 *
 * @class
 */

class Loading extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount() {
    this.progressRing = new ProgressRing({ size: 's' });
    this.progressRing.mount(this.el);
  }
}

Loading._interface = {
  methods: {
  }
};
Loading._defaults = {};
Loading._partials = {};

export default Loading;
