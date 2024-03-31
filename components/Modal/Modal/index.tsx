import { ReactNode, RefObject } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";

interface Props {
  children: ReactNode;
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const Modal = ({
  openModal,
  children,
  handleModalClose,
  modalRef,
}: Props) => {
  return (
    <>
      <div className={styles.modalOverlay}></div>
      <div
        ref={modalRef}
        className={`${styles.modal} ${openModal ? styles.open : ""}`}
      >
        <div onClick={handleModalClose}>
          <IoClose className={styles.modalCloseBtn} />
        </div>
        {children}
      </div>
    </>
  );
};
