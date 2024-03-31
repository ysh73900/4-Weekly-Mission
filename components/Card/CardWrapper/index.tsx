import { ReactNode } from "react";
import styles from "./CardWrapper.module.css";

interface Props {
  children: ReactNode;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

export const CardWrapper = ({ children, onMouseOver, onMouseLeave }: Props) => {
  return (
    <div
      className={styles.card}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
