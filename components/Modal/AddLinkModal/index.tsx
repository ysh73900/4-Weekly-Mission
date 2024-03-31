import { useState, RefObject, MouseEvent } from "react";
import { Folder } from "../../../types";
import { Modal } from "../Modal";
import styles from "./AddLinkModal.module.css";
import Image from "next/image";

interface Props {
  linkUrl: string;
  folderList: Folder[];
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
  handlePreventLinkClick?: (e: MouseEvent) => void;
}

export const AddLinkModal = ({
  linkUrl,
  folderList,
  openModal,
  handleModalClose,
  modalRef,
  handlePreventLinkClick,
}: Props) => {
  const [selectId, setSelectId] = useState<number>();

  const handleFolderListClick = (id: number) => {
    setSelectId(id);
  };

  return (
    <div onClick={handlePreventLinkClick}>
      <Modal
        openModal={openModal}
        handleModalClose={handleModalClose}
        modalRef={modalRef}
      >
        <div className={styles.addLinkModal}>
          <div className={styles.addLinkModalTop}>폴더에 추가</div>
          <div className={styles.addLinkModalUrl}>{linkUrl}</div>
          <div className={styles.addLinkModalFolderList}>
            {folderList?.map((folder) => (
              <div
                className={`${styles.addLinkModalFolderListContent} ${
                  selectId === folder.id ? styles.selectFolder : ""
                }`}
                key={folder.id}
                id={folder.id.toString()}
                onClick={() => handleFolderListClick(folder.id)}
              >
                <div>
                  <span className={styles.addLinkModalFolderListFolderName}>
                    {folder.name}
                  </span>
                  <span className={styles.addLinkModalFolderListCount}>
                    {folder.link.count}개 링크
                  </span>
                </div>

                <Image
                  width={14}
                  height={14}
                  src="@/public/images/modal/check.svg"
                  className={`${styles.addLinkModalFolderListCheckButton} ${
                    selectId === folder.id ? styles.selectFolderButton : ""
                  }`}
                  alt="checkIcon"
                />
              </div>
            ))}
          </div>

          <button className={styles.addLinkModalButton}>추가하기</button>
        </div>
      </Modal>
    </div>
  );
};
