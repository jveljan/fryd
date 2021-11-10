import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import { Logo } from "@dnb/eufemia/components";
import { hamburger_medium } from "@dnb/eufemia/icons";
import HeaderRight from "../HeaderRight/HeaderRight";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Router>
      <header className={styles.dnbHeader}>
        <MenuButton
          text="Menu"
          icon={hamburger_medium}
          on_click={() => {
            console.log("Click");
          }}
        />

        <Link to="/" className={styles.dnbHeaderLogo}>
          <Logo height={38} />
          <hr className={styles.dnbHeaderBorderBottom} />
        </Link>

        <HeaderRight isLoggedIn={true} />
      </header>
      <hr className={styles.dnbHeaderBorderBottom} />
    </Router>
  );
};

export default Header;
