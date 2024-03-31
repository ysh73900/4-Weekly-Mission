import Image from "next/image";
import { Fragment } from "react";
import { useModal } from "../../../hooks/useModal";
import { AddFolderModal } from "../../Modal";
import AddIcon from "@/public/images/folder/whiteAdd.png";
import styles from "./FolderAdd.module.css";

export const FolderAdd = () => {
  const {
    openModal: AddOpenModal,
    modalRef: AddModalRef,
    handleModalClose: AddHandleModalClose,
    handleModalOpen: AddHandleModalOpen,
  } = useModal();

  return (
    <Fragment>
      <button className={styles.folderAdd} onClick={AddHandleModalOpen}>
        <div>폴더 추가</div>
        <Image width={16} height={19} src={AddIcon} alt="addIcon" />
      </button>
      {AddOpenModal && (
        <AddFolderModal
          openModal={AddOpenModal}
          modalRef={AddModalRef}
          handleModalClose={AddHandleModalClose}
        />
      )}
    </Fragment>
  );
};
