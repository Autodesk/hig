import { mount } from "enzyme";
import * as HIG from "hig-vanilla";
import React from "react";

import Icon from "./IconAdapter";

describe("<ButtonAdapter", () => {
  function createHigContext(props) {
    const higContainer = document.createElement("div");

    const higIcon = new HIG.Icon({ nameOrSVG: props.nameOrSVG });
    higIcon.mount(higContainer);

    return { higContainer, higIcon };
  }

  const Context = props => {
    return <Icon nameOrSVG={props.nameOrSVG} />;
  };

  it("rendners an icon from initial props using a name", () => {
    const props = {
      nameOrSVG: "gear"
    };

    const { higContainer, higTable } = createHigContext(props);
    const container = document.createElement("div");
    const wrapper = mount(<Context {...props} />, {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it("rendners an icon from initial props using an SVG", () => {
    const props = {
      nameOrSVG: `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g transform="translate(0,-952.36218)"><path style="color:#000000;enable-background:accumulate;" d="m 91.962707,960.39945 c -8.833296,-5.42939 -28.754496,3.29866 -45.961896,20.50613 -3.3128,3.31277 -6.3032,6.72353 -8.9273,10.12045 l -12.9931,-3.75652 -6.3639,17.67769 9.8994,4.2426 -4.9497,9.1924 11.3137,11.3137 9.1924,-4.9497 4.2427,9.8995 17.6777,-6.364 -3.7566,-12.9931 c 3.3969,-2.6242 6.8077,-5.6144 10.1205,-8.9272 17.207396,-17.20743 25.935496,-37.12872 20.506096,-45.96195 z m -14.849296,14.84924 c 2.7337,2.73362 2.7336,7.16587 0,9.89951 -2.7335,2.73361 -7.1658,2.73359 -9.8994,2e-5 -2.7337,-2.73368 -2.7337,-7.16593 -1e-4,-9.89954 2.7337,-2.73358 7.1659,-2.73364 9.8995,10e-6 z m -57.3198,48.12741 c -3.2117,0.1587 -6.5268,1.577 -9.1482,4.1985 -4.7243996,4.7245 -5.5374996,11.7071 -2.1211996,16.2635 4.5560996,3.4161 11.5388996,2.6031 16.2633996,-2.1214 2.6214,-2.6214 4.0398,-5.9364 4.1984,-9.1482 -2.5597,1.1119 -5.6411,0.6345 -7.734,-1.4584 -2.0929,-2.0929 -2.5703,-5.1743 -1.4584,-7.734 z" fill="#000000" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"></path></g></svg>`

    };

    const { higContainer, higTable } = createHigContext(props);
    const container = document.createElement("div");
    const wrapper = mount(<Context {...props} />, {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });
});
