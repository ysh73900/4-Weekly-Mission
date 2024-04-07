import { ReactNode } from "react";
import styles from "./SignButton.module.css";

interface Props {
  children: ReactNode;
}

const SignButton: React.FC<Props> = ({ children }) => {
  return (
    <>
      <button className={styles.button} type="submit">
        {children}
      </button>
    </>
  );
};

export default SignButton;
