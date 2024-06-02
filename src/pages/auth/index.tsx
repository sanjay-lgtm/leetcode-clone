import { authModalState } from '@/atoms/authModalAtom';
import AuthModal from '@/component/Modals/AuthModal';
import Navbar from '@/component/Navbar/Navbar';
import React from 'react';
import { useRecoilValue } from 'recoil';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState)
    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <div className='flex item-center justify-center h-[calc(100%-5rem)] pointer-events-none select-none'>
                <img src='/hero.png' alt='hero' className=''/>
            </div>
            {authModal.isOpen && <AuthModal/>}
        </div>
    </div>
}
export default AuthPage;