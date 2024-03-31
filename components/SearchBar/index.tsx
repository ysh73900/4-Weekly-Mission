import Image from "next/image";
import { ChangeEvent } from "react";
import SearchBarIcon from "@/public/images/Search.svg";
import styles from "./SearchBar.module.css";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm);
  return (
    <div className={styles.searchBar}>
      <Image width={16} height={16} src={SearchBarIcon} alt="searchBarIcon" />
      <input
        className={styles.searchBarInput}
        type="search"
        placeholder="링크를 검색해 보세요."
        onChange={handleChange}
      />
    </div>
  );
};
