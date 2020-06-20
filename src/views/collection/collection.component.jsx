import React from "react";

import styles from "./collection.module.scss";

import CollectionPreview from "../../components/collection-preview/collectionPreview.component";

import { shopData } from "../../data/shop.data";

const Collection = (props) => {
  const collectionToDisplay = shopData.find(
    (collection) => collection.routeName === props.match.params.id
  );

  console.log(props.match.params, shopData);

  return (
    <div className={styles.collection}>
      <CollectionPreview
        full
        key={collectionToDisplay.id}
        {...collectionToDisplay}
      />
    </div>
  );
};

export default Collection;
