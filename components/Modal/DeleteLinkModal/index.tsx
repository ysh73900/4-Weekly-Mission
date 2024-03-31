import { RefObject, MouseEvent } from "react";
import { Modal } from "../Modal";
import styles from "./DeleteLinkModal.module.css";

interface Props {
  linkUrl: string;
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
  handlePreventLinkClick: (e: MouseEvent) => void;
}

export const DeleteLinkModal = ({
  linkUrl,
  openModal,
  handleModalClose,
  modalRef,
  handlePreventLinkClick,
}: Props) => {
  return (
    <div onClick={handlePreventLinkClick}>
      <Modal
        openModal={openModal}
        handleModalClose={handleModalClose}
        modalRef={modalRef}
      >
        <div className={styles.deleteLinkModal}>
          <div className={styles.deleteLinkModalTop}>링크 삭제</div>
          <div className={styles.deleteLinkModalMiddle}>{linkUrl}</div>
          <button className={styles.deleteLinkModalButton}>삭제하기</button>
        </div>
      </Modal>
    </div>
  );
};
