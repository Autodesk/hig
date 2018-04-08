import React from 'react';
import { ThemeContext } from '@hig/themes';
import Icon, { names as iconNames, sizes as iconSizes } from '@hig/icon';

import './icon-background.scss';
import classNames from '../classNames';
import { types } from '../../types';

/** @type {Object.<string, string>} */
const iconNamesByType = {
  [types.PRIMARY]: iconNames.INFO,
  [types.COMPLETE]: iconNames.COMPLETE,
  [types.WARNING]: iconNames.ISSUE,
  [types.URGENT]: iconNames.ERROR
};

/**
 * @typedef {Object} IconProps
 * @property {string} type
 */

/**
 * @param {IconProps} props
 * @returns {JSX.Element}
 */
export function IconBackground({ type }) {
  return (
    <ThemeContext.Consumer>
      {({ themeClass }) => (
        <figure className={[classNames.iconBackground, themeClass].join(' ')}>
          <Icon name={iconNamesByType[type]} size={iconSizes.MEDIUM} />
        </figure>
      )}
    </ThemeContext.Consumer>
  );
}

export default IconBackground;