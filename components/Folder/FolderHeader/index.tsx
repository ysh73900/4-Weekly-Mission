import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { AddLinkModal } from "../../Modal";
import { Folder } from "../../../types";
import LinkIcon from "@/public/images/folder/link.svg";
import styles from "./FolderHeader.module.css";

interface Props {
  folderList: Folder[];
}

export const FolderHeader = ({ folderList }: Props) => {
  const {
    openModal: AddOpenModal,
    modalRef: AddModalRef,
    handleModalClose: AddHandleModalClose,
    handleModalOpen: AddHandleModalOpen,
  } = useModal();

  const [linkUrl, setLinkUrl] = useState("");

  const handleLinkAddInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value);
  };
  return (
    <div className={styles.folderHeader}>
      <div className={styles.folderHeaderLink}>
        <Image
          width={23}
          height={20}
          src={LinkIcon}
          className={styles.folderHeaderLinkIcon}
          alt="LinkIcon"
        />
        <input
          type="link"
          className={styles.folderHeaderLinkInput}
          value={linkUrl}
          placeholder="링크를 추가해보세요."
          onChange={handleLinkAddInputChange}
        />
        <button
          className={styles.folderHeaderLinkButton}
          onClick={AddHandleModalOpen}
        >
          추가하기
        </button>
        {AddOpenModal && (
          <AddLinkModal
            linkUrl={linkUrl}
            folderList={folderList}
            openModal={AddOpenModal}
            modalRef={AddModalRef}
            handleModalClose={AddHandleModalClose}
          />
        )}
      </div>
    </div>
  );
};
