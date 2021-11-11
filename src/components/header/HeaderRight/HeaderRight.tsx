import React from "react";
import { loupe_medium } from "@dnb/eufemia/icons";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./HeaderRight.module.scss";

const HeaderRight = ({ }) => {
  return (
    <div className={styles.dnbHeaderRight}>
      <MenuButton
        icon={loupe_medium}
        on_click={() => console.log("Click")}
        disabled
      />
    </div>
  );
};

export default HeaderRight;
