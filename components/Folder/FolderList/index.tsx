import { MouseEvent } from "react";
import { FolderAdd } from "../FolderAdd";
import { Folder } from "../../../types";
import styles from "./FolderList.module.css";

interface Props {
  folderList: Folder[];
  selectId: number | null;
  onSelectFolderList: ({ name, id }: { name: string; id: number }) => void;
}

export const FolderList = ({
  folderList,
  onSelectFolderList,
  selectId,
}: Props) => {
  const handleClickFolderList = (e: MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      const id = target.id;
      const textContent = target.textContent;

      onSelectFolderList({ name: textContent || "", id: parseInt(id) || 0 });
    }
  };

  return (
    <div className={styles.folderList}>
      <div className={styles.folderListContent}>
        <span
          className={`${styles.folderListButton} ${
            !selectId ? styles.selected : ""
          }`}
          onClick={handleClickFolderList}
          id={selectId === null ? "" : selectId?.toString()}
        >
          전체
        </span>
        {folderList?.map((item) => (
          <span
            className={`${styles.folderListButton} ${
              selectId === item.id ? styles.selected : ""
            }`}
            key={item.id}
            id={item.id.toString()}
            onClick={handleClickFolderList}
          >
            {item.name}
          </span>
        ))}
      </div>

      <FolderAdd />
    </div>
  );
};
