"use client"; // Ensure this component is treated as a Client Component
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config"; // Update the import path based on your project structure
import { Button } from "@nextui-org/react";
import { signOut } from "firebase/auth";
export default function HomePage() {
  const router = useRouter(); // Use the useRouter hook
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/"); // Redirect to the homepage (index file)
    } catch (error) {
      console.error("Logout error:", error);
      // Handle errors here, such as showing an error message
    }
  };
  if (loading) {
    return <div>Loading...</div>; // Or any loading component
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Please sign in.</div>; // Or redirect to sign-in page
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold">
        Welcome, {user.displayName || "User"}!
      </h1>
      <p>Email: {user.email}</p>
      <Button onClick={handleLogout} color="danger">
        Logout
      </Button>
    </div>
  );
}
