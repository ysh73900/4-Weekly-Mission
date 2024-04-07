import { useRouter } from "next/router";
import { useForm, FieldError } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX, errorMessage } from "../constant";
import { checkEmailDuplicate, signUpUser } from "@/api/userApi";
import Input from "@/components/Input";
import SignButton from "../SignButton";
import styles from "./SignUpForm.module.css";

interface FormType {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormType>({ mode: "onBlur" });

  const checkEmail = async (email: string) => {
    try {
      await checkEmailDuplicate(email);
      return true;
    } catch {
      setError("email", {
        message: errorMessage.EMAIL_USED_MESSAGE,
      });
    }
  };

  const onSubmit = async (data: FormType) => {
    try {
      const userData = await signUpUser(data.email, data.password);

      localStorage.setItem("accessToken", userData.data.accessToken);
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        router.push("/folder");
      }
    } catch (error: any) {
      console.log("회원가입에 실패하였습니다.", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          label="이메일"
          placeholder={errorMessage.EMAIL_INPUT_MESSAGE}
          passwordVisible={false}
          register={register("email", {
            required: errorMessage.EMAIL_INPUT_MESSAGE,
            pattern: {
              value: EMAIL_REGEX,
              message: errorMessage.EMAIL_ERROR_MESSAGE,
            },
            validate: async (value) => {
              return await checkEmail(value);
            },
          })}
          error={errors.email as FieldError}
        />

        <Input
          label="비밀번호"
          placeholder={errorMessage.PASSWORD_FORMAT_MESSAGE}
          passwordVisible={true}
          register={register("password", {
            required: errorMessage.PASSWORD_ERROR_MESSAGE,
            pattern: {
              value: PASSWORD_REGEX,
              message: errorMessage.PASSWORD_FORMAT_MESSAGE,
            },
          })}
          error={errors.password as FieldError}
        />

        <Input
          label="비밀번호 확인"
          placeholder="비밀번호와 일치하는 값을 입력해주세요."
          passwordVisible={true}
          register={register("confirmPassword", {
            required: errorMessage.PASSWORD_ERROR_MESSAGE,
            validate: (value) =>
              value === watch("password") ||
              errorMessage.PASSWORD_MATCH_MESSAGE,
          })}
          error={errors.confirmPassword as FieldError}
        />
        <SignButton>회원가입</SignButton>
      </form>
    </>
  );
};

export default SignUpForm;
