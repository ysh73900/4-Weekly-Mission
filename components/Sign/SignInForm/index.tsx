import { useRouter } from "next/router";
import { useForm, FieldError } from "react-hook-form";
import Input from "@/components/Input";
import SignButton from "../SignButton";
import { EMAIL_REGEX, errorMessage } from "../constant";
import { signInUser } from "@/api/userApi";
import styles from "./SignInForm.module.css";

interface FormType {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormType>({ mode: "onBlur" });

  const onSubmit = async (data: FormType) => {
    try {
      const userData = await signInUser(data.email, data.password);

      localStorage.setItem("accessToken", userData.data.accessToken);
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        router.push("/folder");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          label="이메일"
          inputType="email"
          placeholder={errorMessage.EMAIL_INPUT_MESSAGE}
          passwordVisible={false}
          register={register("email", {
            required: errorMessage.EMAIL_INPUT_MESSAGE,
            pattern: {
              value: EMAIL_REGEX,
              message: errorMessage.EMAIL_ERROR_MESSAGE,
            },
          })}
          error={errors.email as FieldError}
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder={errorMessage.PASSWORD_ERROR_MESSAGE}
          passwordVisible={true}
          register={register("password", {
            required: errorMessage.PASSWORD_ERROR_MESSAGE,
          })}
          error={errors.password as FieldError}
        />
        <SignButton>로그인</SignButton>
      </form>
    </>
  );
};

export default SignInForm;
