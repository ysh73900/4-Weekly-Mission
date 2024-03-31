import Image from "next/image";
import { useModal } from "../../../hooks/useModal";
import {
  ShareFolderModal,
  EditFolderNameModal,
  DeleteFolderModal,
} from "../../Modal";
import ShareIcon from "@/public/images/folder/share.png";
import ChangeIcon from "@/public/images/folder/pen.png";
import DeleteIcon from "@/public/images/folder/delete.png";
import styles from "./FolderOptionMenu.module.css";

interface Props {
  folderName: string;
}

export const FolderOptionMenu = ({ folderName }: Props) => {
  const {
    openModal: shareOpenModal,
    modalRef: shareModalRef,
    handleModalClose: shareHandleModalClose,
    handleModalOpen: shareHandleModalOpen,
  } = useModal();

  const {
    openModal: editOpenModal,
    modalRef: editModalRef,
    handleModalClose: editHandleModalClose,
    handleModalOpen: editHandleModalOpen,
  } = useModal();

  const {
    openModal: deleteOpenModal,
    modalRef: deleteModalRef,
    handleModalClose: deleteHandleModalClose,
    handleModalOpen: deleteHandleModalOpen,
  } = useModal();

  return (
    <div className={styles.folderOptionOptions}>
      <div className={styles.folderOptionOption}>
        <Image width={18} height={18} src={ShareIcon} alt="shareIcon" />
        <button onClick={shareHandleModalOpen}>공유</button>
        {shareOpenModal && (
          <ShareFolderModal
            folderName={folderName}
            openModal={shareOpenModal}
            modalRef={shareModalRef}
            handleModalClose={shareHandleModalClose}
          />
        )}
      </div>
      <div className={styles.folderOptionOption}>
        <Image width={18} height={18} src={ChangeIcon} alt="changeIcon" />
        <button onClick={editHandleModalOpen}>이름 변경</button>
        {editOpenModal && (
          <EditFolderNameModal
            openModal={editOpenModal}
            modalRef={editModalRef}
            handleModalClose={editHandleModalClose}
          />
        )}
      </div>
      <div className={styles.folderOptionOption}>
        <Image width={18} height={18} src={DeleteIcon} alt="deleteIcon" />
        <button onClick={deleteHandleModalOpen}>삭제</button>
        {deleteOpenModal && (
          <DeleteFolderModal
            folderName={folderName}
            openModal={deleteOpenModal}
            modalRef={deleteModalRef}
            handleModalClose={deleteHandleModalClose}
          />
        )}
      </div>
    </div>
  );
};
