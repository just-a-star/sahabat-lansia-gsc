"use client";
import Image from "next/image";

import twoStar from "../../public/images/two-star.png";
import welcomeMedical from "../../public/images/welcome-medical.png";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/home"); // Replace '/' with the actual home page route
    }, 5000);

    return () => clearTimeout(timeoutId); // Clear the timeout if the component is unmounted before 5 seconds
  }, [router]);
  return (
    <main className="flex h-screen flex-col items-center relative mt-40">
      <section className="p-flex items-center justify-center relative flex">
        {/* Stars */}
        <div className="absolute top-0 left-0">
          <Image
            src={twoStar}
            className="z-1"
            alt="Two stars"
            height={76}
            width={76}
          />
        </div>
        <div>
          <Image
            src={welcomeMedical}
            className="z-10"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Picture of medical health monitoring"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src={twoStar}
            className="z-1"
            alt="Two stars"
            height={76}
            width={76}
          />
        </div>
      </section>
      <h1 className="p-20 text-4xl font-semibold text-center text-white">
        Selamat datang di{" "}
        <span className="text-yellow-main block">Sahabat Lansia</span>
      </h1>
    </main>
  );
}
