const URL = "https://bootcamp-api.codeit.kr/api";

export const signInUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("로그인에 실패하였습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("URL 호출 실패:", error.message);
  }
};

export const checkEmailDuplicate = async (email: string) => {
  try {
    const response = await fetch(`${URL}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error("이미 사용 중인 이메일입니다.");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("URL 호출 실패,", error.message);
  }
};

export const signUpUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("회원가입에 실패하였습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("URL 호출 실패:", error.message);
  }
};
