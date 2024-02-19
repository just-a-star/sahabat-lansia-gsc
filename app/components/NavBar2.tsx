// NavBar2.tsx
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import {
  IoBookOutline,
  IoCalendarOutline,
  IoHomeOutline,
  IoFlashOutline,
  IoPersonOutline,
} from "react-icons/io5";

// Define a type for the NavBar2Props
type NavBar2Props = {
  onLogout: () => void; // onLogout is a function that doesn't take any parameters and doesn't return anything
};

export default function NavBar2({ onLogout }: NavBar2Props) {
  const router = useRouter();

  const handleLogout = () => {
    onLogout(); // Call the onLogout prop function without a parameter
    router.push("/");
  };

  return (
    <div className="bg-white flex justify-between items-center p-4 shadow-md">
      <div className="flex gap-4">
        <Link href="/library">
          <IoBookOutline size={24} />
          <span className="sr-only">Library</span>
        </Link>
        <Link href="/calendar">
          <IoCalendarOutline size={24} />
          <span className="sr-only">Calendar</span>
        </Link>
        <Link href="/">
          <IoHomeOutline size={24} />
          <span className="sr-only">Home</span>
        </Link>
        <Link href="/activities">
          <IoFlashOutline size={24} />
          <span className="sr-only">Activities</span>
        </Link>
        <Link href="/profile">
          <IoPersonOutline size={24} />
          <span className="sr-only">Profile</span>
        </Link>
      </div>

      <Button color="danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
