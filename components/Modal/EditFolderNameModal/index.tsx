import { RefObject } from "react";
import { Modal } from "../Modal";
import styles from "./EditFolderNameModal.module.css";

interface Props {
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const EditFolderNameModal = ({
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
      <div className={styles.editFolderNameModal}>
        <div className={styles.editFolderNameModalTop}>폴더 이름 변경</div>
        <input
          className={styles.editFolderNameModalInput}
          type="text"
          placeholder="유용한 팁"
        />
        <button className={styles.editFolderNameModalButton}>변경하기</button>
      </div>
    </Modal>
  );
};
