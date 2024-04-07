import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SignSocial.module.css";

interface Props {
  children: ReactNode;
}

const SignSocial: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.socialLogin}>
          {children}
          <div className={styles.socialIcon}>
            <Link href="https://www.google.com/">
              <div className={styles.googleIcon}>
                <Image
                  width={42}
                  height={42}
                  className={styles.googleCircle}
                  src="/images/sign/icon_google.svg"
                  alt="구글 아이콘"
                />
                <Image
                  width={22}
                  height={22}
                  className={styles.googleLogo}
                  src="/images/sign/google.png"
                  alt="구글 아이콘"
                />
              </div>
            </Link>

            <Link href="https://www.kakaocorp.com/page/">
              <div className={styles.kakaoIcon}>
                <Image
                  width={42}
                  height={42}
                  className={styles.kakaoCircle}
                  src="/images/sign/icon_kakao.svg"
                  alt="카카오 아이콘"
                />
                <Image
                  width={26}
                  height={24}
                  className={styles.kakaoLogo}
                  src="/images/sign/icon_kakao2.svg"
                  alt="카카오 아이콘"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignSocial;
