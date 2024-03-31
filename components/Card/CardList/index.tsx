import { ReactNode } from "react";
import styles from "./CardList.module.css";

interface Props {
  children: ReactNode;
}

export const CardList = ({ children }: Props) => {
  return <div className={styles.cardList}>{children}</div>;
};
