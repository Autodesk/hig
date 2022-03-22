import React from 'react';
import { css } from "emotion";

const styles = {
  width: '200px',
  height: '300px',
  backgroundColor: 'red',
  img: {
    objectFit: 'cover'
  }
};
const ImageHolder = () => <div className={css(styles)}><img src="https://picsum.photos/id/53/200/300" alt="" /></div>

export default ImageHolder;
