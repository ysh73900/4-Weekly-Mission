import Image from "next/image";
import { useState } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import styles from "./Input.module.css";

interface Props {
  label?: string;
  inputType?: string;
  placeholder: string;
  passwordVisible?: boolean;
  register: UseFormRegisterReturn;
  type?: string;
  error: FieldError;
}

const Input = ({
  placeholder,
  error,
  label,
  passwordVisible,
  inputType,
  register,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [visibleInputType, setVisibleInputType] = useState(
    inputType === "email" ? "email" : "password"
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setVisibleInputType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <>
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <div className={styles.content}>
          <input
            className={`${styles.input} ${error?.message ? styles.error : ""}`}
            {...register}
            placeholder={placeholder}
            type={passwordVisible ? visibleInputType : inputType}
          />
          {passwordVisible && (
            <Image
              className={styles.eyeIcon}
              width={16}
              height={16}
              onClick={togglePasswordVisibility}
              src={`/images/sign/eye-${showPassword ? "on" : "off"}.png`}
              alt="eyeIcon"
            />
          )}
        </div>

        {error?.message && (
          <div className={styles.errorMessage}>{error.message}</div>
        )}
      </div>
    </>
  );
};

export default Input;
