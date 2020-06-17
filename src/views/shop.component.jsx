import React from "react";

import styles from './shop.module.scss'

import CollectionPreview from "../components/collection-preview/collectionPreview.component";
import MainLayout from "../components/layout/mainLayout.component";

import { shopData } from "../data/shop.data";

const ShopView = () => {
  const collections = shopData;

  return (
    <MainLayout>
      <div className={styles.shop}>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </MainLayout>
  );
};

export default ShopView;
