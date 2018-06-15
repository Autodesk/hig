import * as React from 'react';

/**
 * The availabe sizes for the Avatar component.
 */
export enum sizes {
  SMALL_16 = "small",
  MEDIUM_24 = "medium",
  MEDIUM_32 = "medium-32",
  LARGE_36 = "large",
  LARGE_48 = "large-48",
  XLARGE_64 = "extralarge"
}

/**
 * The properties for the Avatar component.
 */
export interface IAvatarProps {
  name: string;
  size: string;
  image?: string;
}

/**
 * The Avatar component.
 */
class Avatar extends React.Component<IAvatarProps> {}
export default Avatar;
