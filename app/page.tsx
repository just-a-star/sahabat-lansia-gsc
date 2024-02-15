import Image from "next/image";
import elderly from "../public/images/elderly.png";
import bgElderly from "../public/images/bg-elderly.svg";

import Link from "next/link";
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center  ">
      {/* Title */}
      <section className="hero p-14">
        <h1 className="text-white text-4xl font-bold text-wrap">
          Sahabat Lansia
        </h1>
      </section>
      {/* Hero Section */}
      <section className="mb-auto hero p-10 flex items-center justify-center">
        <div className="relative w-full max-w-4xl max-h-full">
          <Image
            src={elderly}
            alt="elderly illustration"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            priority
          />
          <Image src={bgElderly} alt="elderly illustration background" />
        </div>
      </section>

      {/* App Description */}
      <section className="flex flex-col items-center p-14 bg-white w-full">
        <h2 className="text-2xl font-bold text-center">Tentang Kami</h2>
        <p className="text-center">
          dengan sahabat lansia, Jaga kesehatan lansia Anda dengan mudah dan
          cerdas
        </p>

        <Link href="/sign-up" passHref>
          <button className="bg-blue-main hover:bg-blue-500 text-white mt-4 px-12 py-2 rounded-3xl text-2xl font-semibold text-center">
            mulai
          </button>
        </Link>
      </section>
    </main>
  );
}
