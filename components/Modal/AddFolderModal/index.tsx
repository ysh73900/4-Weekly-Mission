import { RefObject } from "react";
import { Modal } from "../Modal";
import styles from "./AddFolderModal.module.css";

interface Props {
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const AddFolderModal = ({
  openModal,
  handleModalClose,
  modalRef,
}: Props) => {
  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      modalRef={modalRef}
    >
      <div className={styles.addFolderModal}>
        <div className={styles.addFolderModalTop}>폴더 추가</div>

        <input
          className={styles.addFolderModalInput}
          type="text"
          placeholder="내용 입력"
        />

        <button className={styles.addFolderModalButton}>추가하기</button>
      </div>
    </Modal>
  );
};
