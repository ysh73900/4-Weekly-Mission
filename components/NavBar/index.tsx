import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUser } from "../../api/api";
import { Profile } from "../Profile";
import Logo from "@/public/images/logo.png";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const [userData, setUserData] = useState();
  const router = useRouter();

  const isFolderPage = router.pathname === "/folder";
  const className = isFolderPage ? styles.folderPageNav : styles.nav;

  const handleLoadUser = async () => {
    const data = await getUser({ userId: 1 });
    setUserData(data);
  };

  useEffect(() => {
    handleLoadUser();
  }, []);
  return (
    <nav className={className}>
      <div className={styles.navContent}>
        <a href="/">
          <Image src={Logo} alt="Linkbrary 로고" />
        </a>
        {userData ? (
          <Profile userData={userData} />
        ) : (
          <Link className={styles.loginBtn} href="./html/signIn.html">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
};
