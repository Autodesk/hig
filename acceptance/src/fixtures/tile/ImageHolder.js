import React from 'react';
import { css } from "emotion";

const styles = {
  width: '100px',
  height: '100px',
  backgroundColor: 'red',
  img: {
    display: 'block',
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  }
};
const ImageHolder = () => <div className={css(styles)}><img src="https://picsum.photos/id/53/200/300" alt="" /></div>

export default ImageHolder;
