import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  placeholder: string;
  $isError: boolean;
  errorMessage?: string;
  label?: string;
  type?: string;
  passwordVisible?: boolean;
  inputType?: string;
  //   onBlur: () => void;
  //   onChange: () => void;
}

const Input = ({
  placeholder,
  $isError,
  errorMessage,
  label,
  inputType,
  passwordVisible,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [visibleInputType, setVisibleInputType] = useState(
    inputType === "email" ? "text" : "password"
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setVisibleInputType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <>
      <Container>
        <Label>{label}</Label>
        <InputDiv>
          <InputStyled
            placeholder={placeholder}
            $isError={$isError}
            type={passwordVisible ? visibleInputType : inputType}
          />
          {passwordVisible && (
            <StyledImage
              width={16}
              height={16}
              onClick={togglePasswordVisibility}
              src={`/images/sign/eye-${showPassword ? "off" : "on"}.png`}
              alt="eyeIcon"
            />
          )}
        </InputDiv>

        {$isError && errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
      </Container>
    </>
  );
};

export default Input;

const Container = styled.div`
  position: relative;
  margin-bottom: 2.4rem;
`;

const InputStyled = styled.input<Props>`
  display: flex;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  width: 40rem;
  margin-top: 1.2rem;
  margin-bottom: 0.6rem;
  color: var(--linkbrary-gray100);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid
    ${({ $isError }) =>
      $isError ? "var(--linkbrary-red)" : "var(--linkbrary-gray20)"};

  &:focus {
    border: 0.1rem solid var(--linkbrary-primary-color);
    outline: none;
  }

  $::placeholder {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;

const Label = styled.label`
  color: var(--black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  width: 40rem;
`;

const StyledImage = styled(Image)`
  position: absolute;
  right: 1.5rem;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: var(--linkbrary-red);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute; /* 추가 */
  bottom: -2rem; /* 에러 메시지가 input 아래에 위치하도록 조정 */
  left: 0; /* 에러 메시지가 왼쪽 끝에 위치하도록 조정 */
`;
