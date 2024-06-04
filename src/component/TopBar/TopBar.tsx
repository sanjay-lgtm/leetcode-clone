import { auth } from "@/firebase/firebase";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "../Buttons/LogOut";
import { authModalState } from "@/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";

type TopBarProps = {};

const TopBar: React.FC<TopBarProps> = () => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  // const router = useRouter();
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-2">
      <div
        className={`flex w-full items-center justify-between min-w-[1200px] mx-auto`}
      >
        <Link href="/" className="h-[22px] flex-1">
          <img src="/logo-full.png" alt="logo" className="h-full" />
        </Link>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href=""
              target="_blank"
              rel="norferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>
          {!user && (
            <Link
              href="/auth"
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  isOpen: true,
                  type: "login",
                }))
              }
            >
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          )}
          {user && (
            <div className="cursor-pointer group relative">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
              z-40 group-hover:scale-100 scale-0 
              transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user && <LogOut />}
        </div>
      </div>
    </nav>
  );
};
export default TopBar;
