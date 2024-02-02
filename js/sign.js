import {
  email,
  emailError,
  password,
  passwordError,
  eyeIcon,
  setInvalidStyle,
  setValidStyle,
  errorMessage,
  handleEmailValidation,
  togglePasswordVisibility,
  enterKey,
  redirectFolder,
} from "./modules/auth-utils.js";

const loginButton = document.querySelector(".login-button");

/* 비밀번호 유효성 검사 */
const handlePasswordValidation = () => {
  const PASSWORD_ERROR_MESSAGE = "비밀번호를 입력해주세요.";

  if (password.value === "") {
    setInvalidStyle(password);
    passwordError.innerHTML = PASSWORD_ERROR_MESSAGE;
  } else {
    setValidStyle(password);
    passwordError.innerHTML = "";
  }
};

/* 특정 이메일과 비밀번호를 사용하여 로그인을 시도하는 API 호출 함수 */
const signInApi = async (email, password) => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("URL 호출 실패:", error.message);
  }
};

/* 특정 아이디 및 비밀번호로 로그인 시도 시 페이지 이동 */
const redirectToFolderPage = async () => {
  try {
    const emailValue = email.value;
    const passwordValue = password.value;

    if (
      emailValue === errorMessage.ALREADY_EMAIL &&
      passwordValue === "sprint101"
    ) {
      const dataValue = await signInApi(emailValue, passwordValue);
      if (dataValue) {
        redirectFolder();
      }
    }
  } catch (error) {
    console.error("로그인 에러:", error.message);
    setInvalidStyle(email);
    setInvalidStyle(password);
    emailError.innerHTML = errorMessage.EMAIL_CHECK_MESSAGE;
    passwordError.innerHTML = errorMessage.PASSWORD_CHECK_MESSAGE;
  }
};

email.addEventListener("blur", handleEmailValidation);
password.addEventListener("blur", handlePasswordValidation);
loginButton.addEventListener("click", redirectToFolderPage);
document.addEventListener("keypress", (event) => {
  enterKey(event, redirectToFolderPage);
});
eyeIcon.addEventListener("click", () => {
  togglePasswordVisibility(password, eyeIcon);
});
