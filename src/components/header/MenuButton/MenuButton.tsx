import React from "react";
import { Icon } from "@dnb/eufemia/components";
import Button, {
  ButtonIcon,
  ButtonProps,
} from "@dnb/eufemia/components/Button";
import styles from "./MenuButton.module.scss";

interface IconGroupProps {
  icon: ButtonIcon;
  badge?: number;
}

const IconGroup = ({ badge, icon }: IconGroupProps) => (
  <span className={styles.dnbButton__iconGroup}>
    <Icon className={styles.dnbButton__icon} icon={icon} />
    {badge && (
      <span className={styles.dnbButton__badge} data-testid="badge">
        {badge}
      </span>
    )}
  </span>
);

/**
 * TODO: Workaround, fix wanted: 'ref' prop from Eufemia ButtonProps threw type error.
 * This is likely a bug in Eufemia.
 */
interface MenuButtonProps extends Omit<ButtonProps, "ref"> {
  badge?: number;
}

const MenuButton = ({ text, badge, icon, ...props }: MenuButtonProps) => (
  <Button
    className={styles.dnbMenuButton}
    variant="tertiary"
    icon_position="left"
    icon={<IconGroup badge={badge} icon={icon} />}
    {...props}
  >
    {text && <span className={styles.dnbButton__text}>{text}</span>}
  </Button>
);

export default MenuButton;
