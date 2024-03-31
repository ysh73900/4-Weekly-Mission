import { PropsWithChildren } from "react";
import styles from "./CardList.module.css";

export const CardList = ({ children }: PropsWithChildren) => {
  return <div className={styles.cardList}>{children}</div>;
};
