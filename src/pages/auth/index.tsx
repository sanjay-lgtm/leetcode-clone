import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/component/Modals/AuthModal";
import Navbar from "@/component/Navbar/Navbar";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return null;

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex item-center justify-center h-[calc(100%-5rem)] pointer-events-none select-none">
          <img src="/hero.png" alt="hero" className="" />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};
export default AuthPage;
