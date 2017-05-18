/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import { Button } from './react-hig';
import React from 'react';
import renderer from 'react-test-renderer';

import * as HIG from 'hig.web';

describe('react-hig', () => {
  describe('<Button>', () => {
    /**
     * Creates a hig.web button and returns the instance and it's container
     *
     * @param {object} defaults hig.web defaults for the button
     */
    function createHigButton(defaults = {}) {
      const higContainer = document.createElement('div');

      // use spread here to clone defaults since HIG.Button mutates this object
      const higButton = new HIG.Button({ ...defaults });

      higButton.mount(higContainer);

      return { higButton, higContainer };
    }

    /**
     * Creates a React Button using the test renderer and returns the component tree
     * as well as the div (reacContainer) that the tree is mounted in
     *
     * @param {object} props the props for <Button>
     */
    function createReactButton(props = {}) {
      const reactContainer = document.createElement('div');
      const buttonNode = document.createElement('hig-button');

      reactContainer.appendChild(buttonNode);

      function createNodeMock(element) {
        return buttonNode;
      }

      const tree = renderer.create(<Button {...props} />, {
        createNodeMock
      });

      return { tree, reactContainer };
    }

    /**
     * Returns the instance of react-hig-element from a ReactTestInstance
     *
     * @param {ReactTestInstance} tree an instance that has rendered an Adapted react-hig-element.
     */
    function getReactHIGElementInstance(tree) {
      return tree._component._renderedComponent._instance.instance;
    }

    it('renders the standard button', () => {
      const defaults = { title: 'regular button', link: 'http://example.com' };

      const { higButton, higContainer } = createHigButton(defaults);

      const { tree, reactContainer } = createReactButton(defaults);

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    it('updates the title the same as setTitle', () => {
      const { higButton, higContainer } = createHigButton();

      const newTitle = 'correct title';

      // update via hig API
      higButton.setTitle(newTitle);

      // update via React API
      const { tree, reactContainer } = createReactButton();

      tree.update(<Button title={newTitle} />);

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    it('removes the title if it is no longer specified', () => {
      const defaults = { title: 'some title' };

      const { higButton, higContainer } = createHigButton(defaults);
      const { tree, reactContainer } = createReactButton(defaults);

      higButton.setTitle(null);

      // update to remove the title prop
      tree.update(<Button />);

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    it('updates the link the same as setLink', () => {
      const { higButton, higContainer } = createHigButton();
      const newLink = 'http://example.com/2';

      higButton.setLink(newLink);

      const { tree, reactContainer } = createReactButton();

      tree.update(<Button link={newLink} />);

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    ['onClick', 'onHover'].forEach(eventName => {
      it(`sets up ${eventName} initially`, () => {
        const eventSpy = jest.fn();

        const { tree, reactContainer } = createReactButton({
          [eventName]: eventSpy
        });

        // click on the rendered button
        const instance = getReactHIGElementInstance(tree);

        // This is the same fn we pass to hig.web
        instance.events[eventName]();

        // expect onClickSpy to be called
        expect(eventSpy).toBeCalled();
      });

      it(`updates ${eventName} when it updates`, () => {
        const eventSpy1 = jest.fn();
        const eventSpy2 = jest.fn();

        const { tree, reactContainer } = createReactButton({
          [eventName]: eventSpy1
        });

        // update to eventSpy2
        tree.update(<Button {...{ [eventName]: eventSpy2 }} />);

        const instance = getReactHIGElementInstance(tree);

        // This is the same fn we pass to hig.web
        instance.events[eventName]();

        // expect onClickSpy to be called
        expect(eventSpy2).toBeCalled();
      });

      it(`updates ${eventName} when it wasn't specified to begin with`, () => {
        const eventSpy1 = jest.fn();

        const { tree, reactContainer } = createReactButton();

        tree.update(<Button {...{ [eventName]: eventSpy1 }} />);

        const instance = getReactHIGElementInstance(tree);

        // This is the same fn we pass to hig.web
        instance.events[eventName]();

        // expect onClickSpy to be called
        expect(eventSpy1).toBeCalled();
      });

      it(`removes ${eventName} if it is no longer specified`, () => {
        const eventSpy1 = jest.fn();

        const { tree, reactContainer } = createReactButton({
          [eventName]: eventSpy1
        });

        // update without the event property
        tree.update(<Button />);

        const instance = getReactHIGElementInstance(tree);

        expect(instance.events[eventName]).toBeUndefined();
      });
    });
  });
});
