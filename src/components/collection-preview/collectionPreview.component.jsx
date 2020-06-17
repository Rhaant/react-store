  
import React from "react";

import CollectionItem from "../collection-item/collectionItem.component";

import styles from './collectionPreview.module.scss';

const CollectionPreview = ({ title, items }) => (
  <div className={styles.collectionPreview}>
    <h1 className={styles.title}>{title.toUpperCase()}</h1>
    <div className={styles.preview}>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;