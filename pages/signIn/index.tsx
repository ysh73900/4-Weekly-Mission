import SignHeader from "@/components/Sign/SignHeader";
import styles from "./SignIn.module.css";
import SignInForm from "@/components/Sign/SignInForm";
import SignSocial from "@/components/Sign/SignSocial";

const SignIn: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <SignHeader isLoginPage={true} />
        <SignInForm />
        <SignSocial>소셜 로그인</SignSocial>
      </div>
    </>
  );
};

export default SignIn;
