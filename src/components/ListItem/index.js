import React from "react";
import { formatAsCurrency } from "../../utils/helpers";
import Image from "next/image";
import Shipping from "../../../assets/img/ic_shipping.png";

import styles from "../../../styles/ListItem.module.scss";

export const ListItem = ({ title, price, image, location, shipping }) => {
  return (
    <div className={styles.search__results}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__image}>
          <Image src={image} width={160} height={160} alt="Image Product" />
        </div>
        <div className={styles.search__contentWrapper}>
          <p className={styles.search__itemPrice}>
            $ {formatAsCurrency(price)}
            <span className={styles.search__shipping}>
              {shipping && <Image src={Shipping} alt="Free Shipping" />}
            </span>
          </p>
          <p className={styles.search__itemTitle}>{title}</p>
          <p className={styles.search__desktopLocation}>{location}</p>
        </div>
        <div className={styles.search__locationWrapper}>
          <p className={styles.search__locationTitle}>{location}</p>
        </div>
      </div>
    </div>
  );
};
