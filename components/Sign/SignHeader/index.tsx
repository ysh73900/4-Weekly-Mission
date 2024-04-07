import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import styles from "./SignHeader.module.css";
import Link from "next/link";

interface Props {
  isLoginPage: boolean;
}

const SignHeader: React.FC<Props> = ({ isLoginPage }) => {
  return (
    <>
      <div className={styles.content}>
        <Link href="/">
          <Image width={210} height={38} src={Logo} alt="Linkbrary logo" />
        </Link>
        {isLoginPage ? (
          <div className={styles.title}>
            <p>회원이 아니신가요?</p> <Link href="/signUp">회원 가입하기</Link>
          </div>
        ) : (
          <div className={styles.title}>
            <p>이미 회원이신가요?</p>
            <Link href="/signIn">로그인 하기</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SignHeader;
