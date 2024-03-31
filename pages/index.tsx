import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Input from "@/components/Input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Input
        placeholder="이메일"
        $isError={true}
        errorMessage="올바른 이메일을 입력해주세요."
        label="이메일"
        passwordVisible={false}
        inputType="email"
      />
      <Input
        placeholder="비밀번호"
        $isError={false}
        errorMessage="올바른 비밀번호를 입력해주세요."
        label="비밀번호"
        passwordVisible={true}
        inputType="password"
      />
    </>
  );
}
