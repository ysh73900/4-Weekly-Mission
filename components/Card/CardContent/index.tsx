import { useRouter } from "next/router";
import Image from "next/image";
import { useState, MouseEvent } from "react";
import { getElapsedTime } from "../../../utils/getElapsedTime";
import { formatDate } from "../../../utils/formatDate";
import { useModal } from "../../../hooks/useModal";
import { Link, Folder } from "../../../types";
import { DeleteLinkModal, AddLinkModal } from "../../Modal";
import KebabIcon from "@/public/images/folder/kebab.png";
import styles from "./CardContent.module.css";

interface Props {
  items: Link;
  isZoomedIn: boolean;
  handlePreventLinkClick: (e: MouseEvent) => void;
  folderList: Folder[];
}

export const CardContent = ({
  items,
  isZoomedIn,
  handlePreventLinkClick,
  folderList,
}: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const {
    openModal: deleteOpenModal,
    modalRef: deleteModalRef,
    handleModalClose: deleteHandleModalClose,
    handleModalOpen: deleteHandleModalOpen,
  } = useModal();

  const {
    openModal: AddOpenModal,
    modalRef: AddModalRef,
    handleModalClose: AddHandleModalClose,
    handleModalOpen: AddHandleModalOpen,
  } = useModal();

  const router = useRouter();

  const isFolderPage = router.pathname === "/folder";
  const kebabClassName = isFolderPage
    ? styles.cardTextKebabIcon
    : styles.noneCardTextKebabIcon;

  const { createdAt, created_at, description } = items;
  const createdAtValue = createdAt || created_at;
  const className = isZoomedIn
    ? `${styles.cardText} ${styles.cardTextHovered}`
    : styles.cardText;

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={className}>
      <div className={styles.cardTextTop}>
        <p className={styles.cardTextTimeAgo}>
          {getElapsedTime(createdAtValue)}
        </p>
        <Image
          width={21}
          height={17}
          src={KebabIcon}
          className={kebabClassName}
          onClick={(e) => {
            handlePreventLinkClick(e);
            toggleOptions();
          }}
          alt="kebabIcon"
        />
      </div>
      {showOptions && (
        <div className={styles.cardOptions}>
          <button
            className={styles.cardOptionsDeleteButton}
            onClick={(e) => {
              handlePreventLinkClick(e);
              deleteHandleModalOpen();
            }}
          >
            삭제하기
          </button>
          {deleteOpenModal && (
            <DeleteLinkModal
              handlePreventLinkClick={handlePreventLinkClick}
              linkUrl={items.url}
              openModal={deleteOpenModal}
              modalRef={deleteModalRef}
              handleModalClose={deleteHandleModalClose}
            />
          )}
          <button
            className={styles.cardOptionsAddButton}
            onClick={(e) => {
              handlePreventLinkClick(e);
              AddHandleModalOpen();
            }}
          >
            폴더에 추가
          </button>
          {AddOpenModal && (
            <AddLinkModal
              handlePreventLinkClick={handlePreventLinkClick}
              linkUrl={items.url}
              folderList={folderList}
              openModal={AddOpenModal}
              modalRef={AddModalRef}
              handleModalClose={AddHandleModalClose}
            />
          )}
        </div>
      )}
      <p className={styles.cardTextDescription}>{description}</p>
      <p className={styles.cardTextDate}>{formatDate(createdAtValue)}</p>
    </div>
  );
};
