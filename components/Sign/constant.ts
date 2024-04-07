export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

export const errorMessage = {
  EMAIL_INPUT_MESSAGE: "이메일을 입력해 주세요.",
  EMAIL_ERROR_MESSAGE: "올바른 이메일 주소가 아닙니다.",
  EMAIL_CHECK_MESSAGE: "이메일을 확인해 주세요.",
  EMAIL_USED_MESSAGE: "이미 사용 중인 이메일입니다.",
  PASSWORD_ERROR_MESSAGE: "비밀번호를 입력해주세요.",
  PASSWORD_CHECK_MESSAGE: "비밀번호를 확인해 주세요.",
  PASSWORD_FORMAT_MESSAGE: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  PASSWORD_MATCH_MESSAGE: "비밀번호가 일치하지 않아요.",
};
