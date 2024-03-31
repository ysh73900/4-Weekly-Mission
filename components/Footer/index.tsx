import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/public/images/facebook-icon.png";
import instagramIcon from "@/public/images/instagram-icon.png";
import twitterIcon from "@/public/images/twitter-icon.png";
import youtubeIcon from "@/public/images/youtube-icon.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
          <div className={styles.mobileFooterContent}>
            <div className={styles.footerLink}>
              <Link href="./privacy.html">Privacy Policy</Link>
              <Link href="./faq.html">FAQ</Link>
            </div>
            <div className={styles.copyright}>©codeit - 2023</div>
          </div>

          <div className={styles.pcCopyright}>©codeit - 2023</div>
          <div className={styles.pcFooterLink}>
            <Link href="./privacy.html">Privacy Policy</Link>
            <Link href="./faq.html">FAQ</Link>
          </div>

          <div className={styles.snsIcon}>
            <Link
              href="https://www.facebook.com/?locale=ko_KR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebookIcon} alt="페이스북 아이콘" />
            </Link>
            <Link
              href="https://twitter.com/?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitterIcon} alt="트위터 아이콘" />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={youtubeIcon} alt="유튜브 아이콘" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagramIcon} alt="인스타그램 아이콘" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
