import React from 'react';

declare module '@hig/avatar' {
  export interface IAvatarProps {
    name: string;
    size: string;
    image?: string;
  }
  export enum sizes {
    SMALL_16 = "small",
    MEDIUM_24 = "medium",
    MEDIUM_32 = "medium-32",
    LARGE_36 = "large",
    LARGE_48 = "large-48",
    XLARGE_64 = "extralarge"
  }
  class Avatar extends React.Component<IAvatarProps> {}
  export default Avatar;
}
