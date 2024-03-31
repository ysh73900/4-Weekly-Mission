import { useState, useEffect } from "react";
import { getFolder } from "../../api/api";
import { Link, Owner } from "../../types";
import {
  CardList,
  OnlyCard,
  FolderInfo,
  Layout,
  SearchBar,
} from "../../components";
import styles from "./SharePage.module.css";

interface FolderInfos {
  name: string;
  links: Link[];
  owner: Owner;
}

const SharePage = () => {
  const [folderData, setFolderData] = useState<FolderInfos>({
    links: [],
    name: "",
    owner: {
      name: "",
      profileImageSource: "",
    },
  });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleLoad = async () => {
    const { folder } = await getFolder();
    setFolderData(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const filteredLinks = folderData.links?.filter((link) =>
    link.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className={styles.sharePage}>
        <FolderInfo profile={folderData} />
        <div className={styles.sharePageContent}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CardList>
            {filteredLinks?.map((item) => (
              <OnlyCard key={item.id} items={item} {...item} />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};

export default SharePage;
