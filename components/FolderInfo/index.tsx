import { Owner } from "../../types";
import styles from "./FolderInfo.module.css";

interface Profile {
  owner?: Owner;
  name?: string;
}

interface Props {
  profile: Profile;
}

export const FolderInfo = ({ profile }: Props) => {
  const { name: ownerName, profileImageSource } = profile?.owner || {};
  const { name: folderName } = profile || {};
  return (
    <div className={styles.folderInfo}>
      <img
        className={styles.folderInfoProfile}
        src={profileImageSource}
        alt="폴더 소유자의 프로필 이미지"
      />
      <span className={styles.folderInfoOwnerName}>{ownerName}</span>
      <span className={styles.folderInfoFolderName}>{folderName}</span>
    </div>
  );
};
