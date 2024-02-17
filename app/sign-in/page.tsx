"use client";

import React, { useState } from "react";
import { Button, Input, Spacer } from "@nextui-org/react";
import { auth } from "../firebase/config"; // Adjust the import path as necessary
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Image from "next/image";
import elderly from "../../public/images/elderly.png";
import bgElderly from "../../public/images/bg-elderly.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSignInWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/welcome"); // Redirect to home page upon successful sign-in
    } catch (error) {
      console.error(error);
      // Handle errors here, such as displaying a notification
    }
  };

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/welcome"); // Redirect to home page upon successful sign-in
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-center text-blue-main font-semibold text-3xl p-3">
        Masuk
      </h1>
      <Image
        src={elderly}
        alt="Elderly illustration"
        width={200}
        height={200}
      />
      <Spacer y={1} />
      <Input
        isClearable
        fullWidth
        color="primary"
        size="lg"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Spacer y={1} />
      <Input
        isClearable
        fullWidth
        color="primary"
        size="lg"
        placeholder="Kata Sandi"
        value={password}
        type={isVisible ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <FaEyeSlash className="text-2xl text-default-400" />
            ) : (
              <FaEye className="text-2xl text-default-400" />
            )}
          </button>
        }
      />
      <Spacer y={3} />
      <div className="flex justify-end text-blue-main text-md w-full">
        <Link href="#" className="text-blue-main">
          Lupa password?
        </Link>
      </div>

      <Spacer y={4} />
      <Button
        fullWidth
        color="primary"
        className="font-semibold text-lg py-6 rounded-xl"
        onClick={handleSignInWithEmail}
      >
        Masuk
      </Button>
      <Spacer y={4} />
      <div className="text-center text-blue-main text-md">
        atau lanjutkan dengan
      </div>
      <Spacer y={4} />
      <Button size="lg" isIconOnly onClick={handleSignInWithGoogle}>
        <FcGoogle size="48" />
      </Button>
      <Spacer y={2} />
      <div className="text-center">
        Tidak punya akun?{" "}
        <Link href="/sign-up">
          <span className="text-blue-main">Buat Akun</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
