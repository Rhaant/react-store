import React from "react";

import CollectionItem from "../collection-item/collectionItem.component";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./collectionPreview.module.scss";
import { useState } from "react";

const CollectionPreview = ({ title, items, full }) => {
  const [isOpen, setIsOpen] = useState(full);

  const itemsToDisplay = isOpen ? items : items.filter((item, idx) => idx < 4);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.collectionPreview}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {itemsToDisplay.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      {full ? null : (
        <div className={styles.showMore}>
          <button onClick={toggleIsOpen}>
            {isOpen ? (
              <span>
                Show less <FontAwesomeIcon icon={faAngleUp} />
              </span>
            ) : (
              <span>
                Show more <FontAwesomeIcon icon={faAngleDown} />
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default CollectionPreview;
