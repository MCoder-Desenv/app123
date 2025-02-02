'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";

export function Header (){
  const { status, data: sessionData } = useSession();
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <header className="w-full h-16 bg-[#F9F9F9]">
      
      {status === "authenticated" ?
          <div className="absolute bottom-2 right-16 flex items-center gap-4">
            <button onClick={handleLogout}>
              <FiLogOut size={26} color="#ff2313" />
            </button>
          </div>
          :
          ""
      }

    </header>
  );
}
