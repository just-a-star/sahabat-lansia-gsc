"use client"; // Ensure this component is treated as a Client Component
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config"; // Update the import path based on your project structure
import { Button } from "@nextui-org/react";
import { signOut } from "firebase/auth";

// components
import { FaAngleRight } from "react-icons/fa6";
import { Card, CardBody, User } from "@nextui-org/react";
import GrafikJantung from "../components/GrafikJantung";
import TinjauanHarian from "../components/TinjauanHarian";
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
    <div className="bg-white items-center justify-center h-screen">
      <div className="bg-blue-main w-full h-auto rounded-bl-xl p-10">
        <Card shadow="md" className=" bg-opacity-40 bg-blue-light ">
          <CardBody>
            <div className="flex justify-between items-center">
              <User
                className="text-white p-4"
                name={user.displayName || "User"}
                description="Usia 76 Tahun"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  className: "w-20 h-auto",
                }}
              />
              <FaAngleRight className="z-10 text-xl fill-amber-400 m-2" />
            </div>
          </CardBody>
        </Card>

        <Button onClick={handleLogout} color="danger">
          Logout
        </Button>
      </div>
      <div className="p-4">
        <h1>Grafik Detaik Jantung</h1>
        <GrafikJantung />
        <section className="p-4 px-6 flex flex-row items-center justify-evenly h-full">
          <div className="text-center">
            <h2 className="text-4xl font-bold">120</h2>
            <h3 className="text-xl">BPM</h3>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold">98%</h2>
            <h3 className="text-xl">SpO2</h3>
          </div>
        </section>
      </div>
      <div className="p-5">
        <h1>Tinjauan Harian</h1>
        <TinjauanHarian />
      </div>
      <div className="p-6">
        <h1>Tinjauan Harian</h1>
        <TinjauanHarian />
      </div>
    </div>
  );
}
