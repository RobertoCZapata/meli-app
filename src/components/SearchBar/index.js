import React from "react";
import { Input, Button } from "reactstrap";

import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import searchIcon from "../../../assets/img/ic_Search.png";
import logoMeli from "../../../assets/img/Logo_ML.png";

export const SearchBar = ({ handleSearchClick, handleChange }) => (
  <div className={styles.nav__container}>
    <div className={styles.nav__logo}>
      <Image src={logoMeli} alt="LOGO" />
    </div>

    <Input
      className={styles.search}
      name="search"
      placeholder="Nunca dejes de buscar"
      onChange={handleChange}
    />
    <Button onClick={handleSearchClick} className={styles.btn__search}>
      <Image src={searchIcon} alt="SEARCH_ICON" />
    </Button>
  </div>
);
