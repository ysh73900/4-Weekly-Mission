import { FolderOptionMenu } from "../FolderOptionMenu";
import styles from "./FolderOption.module.css";

interface Props {
  folderName: string;
}

export const FolderOption = ({ folderName }: Props) => {
  return (
    <div className={styles.folderOption}>
      <div className={styles.folderOptionFolderName}>{folderName}</div>
      {folderName === "전체" ? (
        <></>
      ) : (
        <FolderOptionMenu folderName={folderName} />
      )}
    </div>
  );
};
