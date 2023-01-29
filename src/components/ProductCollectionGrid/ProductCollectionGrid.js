import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'./collections/collection1.JPG'}
        title={'Fridge Magnets'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'./collections/collection2.JPG'}
        title={'Souvenirs'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'./collections/collection3.JPG'}
        title={'Wall Hangings'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'./collections/collection4.JPG'}
        title={'Handcrafted marvels'}
        text={'COMING SOON'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
