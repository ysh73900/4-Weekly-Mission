import Image from "next/image";
import { RefObject } from "react";
import { Modal } from "../Modal";
import KakaoIcon from "@/public/images/modal/Kakao.svg";
import FacebookIcon from "@/public/images/modal/Facebook.svg";
import LinkIcon from "@/public/images/modal/link.svg";
import styles from "./ShareFolderModal.module.css";

interface Props {
  folderName: string;
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const ShareFolderModal = ({
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
      <div className={styles.shareFolderModal}>
        <div className={styles.shareFolderModalTop}>폴더 공유</div>
        <div className={styles.shareFolderModalMiddle}>{folderName}</div>
        <div className={styles.shareFolderModalBottom}>
          <div className={styles.shareFolderModalBottomKakao}>
            <div className={styles.kakaoCircle}>
              <Image src={KakaoIcon} alt="kakaoIcon" />
            </div>
            <span>카카오톡</span>
          </div>
          <div className={styles.shareFolderModalBottomFacebook}>
            <div className={styles.facebookCircle}>
              <Image src={FacebookIcon} alt="facebookIcon" />
            </div>
            <span>페이스북</span>
          </div>
          <div className={styles.shareFolderModalBottomLink}>
            <div className={styles.linkCircle}>
              <Image src={LinkIcon} alt="linkIcon" />
            </div>
            <span>링크 복사</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
