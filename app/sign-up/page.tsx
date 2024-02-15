"use client";

import React, { useState } from "react";
import { Button, Input, Spacer } from "@nextui-org/react";
import { auth } from "../firebase/config"; // Adjust the import path as necessary
import { useAuthState } from "react-firebase-hooks/auth";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Image from "next/image";
import elderly from "../../public/images/elderly.png";
import bgElderly from "../../public/images/bg-elderly.svg";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();
  const [name, setName] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUpWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error) {
      console.error(error);
      // Handle errors here, such as displaying a notification
    }
  };

  const handleSignUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // handle success direct to home page
      router.push("/home");
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  if (loading) {
    return <div>Loading...</div>; // Or any loading component
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (user) {
    return router.push("/home"); // Redirect to the homepage (index file)
  }

  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-center text-blue-main font-semibold text-3xl p-3">
        Buat Akun
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
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <FaEye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        onChange={(e) => setPassword(e.target.value)}
        type={isVisible ? "text" : "password"}
      />
      <Spacer y={3} />
      <Button
        fullWidth
        color="primary"
        className="font-semibold text-lg py-6 rounded-xl"
        onClick={handleSignUpWithEmail}
      >
        Lanjutkan
      </Button>
      <Spacer y={4} />
      <div className="text-center text-blue-main text-md">
        atau lanjutkan dengan
      </div>
      <Spacer y={4} />
      <Button size="lg" isIconOnly onClick={handleSignUpWithGoogle}>
        <FcGoogle size="48" />
      </Button>
      <Spacer y={2} />
      <div className="text-center">
        Already have an account?{" "}
        <Link href="/sign-in">
          <span className="text-blue-main">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
