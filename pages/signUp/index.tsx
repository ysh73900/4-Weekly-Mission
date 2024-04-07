import SignHeader from "@/components/Sign/SignHeader";
import styles from "./SignUp.module.css";
import SignUpForm from "@/components/Sign/SignUpForm";
import SignButton from "@/components/Sign/SignButton";
import SignSocial from "@/components/Sign/SignSocial";

const SignUp: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <SignHeader isLoginPage={false} />
        <SignUpForm />
        <SignSocial>다른 방식으로 가입하기</SignSocial>
      </div>
    </>
  );
};

export default SignUp;
