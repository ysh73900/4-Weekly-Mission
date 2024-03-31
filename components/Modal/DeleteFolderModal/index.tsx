import { RefObject } from "react";
import { Modal } from "../Modal";
import styles from "./DeleteFolderModal.module.css";

interface Props {
  folderName: string;
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const DeleteFolderModal = ({
  folderName,
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
      <div className={styles.deleteFolderModal}>
        <div className={styles.deleteFolderModalTop}>폴더 삭제</div>
        <div className={styles.deleteFolderModalMiddle}>{folderName}</div>
        <button className={styles.deleteFolderModalButton}>삭제하기</button>
      </div>
    </Modal>
  );
};
