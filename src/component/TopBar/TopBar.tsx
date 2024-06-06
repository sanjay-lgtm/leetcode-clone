import { auth } from "@/firebase/firebase";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "../Buttons/LogOut";
import { authModalState } from "@/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { problems } from "@/mocproblems/problems";
import Timer from "../Timer/Timer";

type TopBarProps = {
  problemPage?: boolean;
};

const TopBar: React.FC<TopBarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const router = useRouter();

  const handleProblemChange = (isForward: boolean) => {
    // const { order } = problems[router.query.pid as string] as Problem;
    // const direction = isForward ? 1 : -1;
    // const nextProblemOrder = order + direction;
    // const nextProblemKey = Object.keys(problems).find(
    //   (key) => problems[key].order === nextProblemOrder
    // );
    // if (isForward && !nextProblemKey) {
    //   const firstProblemKey = Object.keys(problems).find(
    //     (key) => problems[key].order === 1
    //   );
    //   router.push(`/problems/${firstProblemKey}`);
    // } else if (!isForward && !nextProblemKey) {
    //   const lastProblemKey = Object.keys(problems).find(
    //     (key) => problems[key].order === Object.keys(problems).length
    //   );
    //   router.push(`/problems/${lastProblemKey}`);
    // } else {
    //   router.push(`/problems/${nextProblemKey}`);
    // }
  };

  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-2">
      <div
        className={`flex w-full items-center justify-between min-w-[1200px] mx-auto`}
      >
        <Link href="/" className="h-[22px] flex-1">
          <img src="/logo-full.png" alt="logo" className="h-full" />
        </Link>

        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>Problem List</p>
            </Link>
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}

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

          {user && problemPage && <Timer />}
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
