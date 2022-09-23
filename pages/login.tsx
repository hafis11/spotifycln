import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';


const Login: React.FC = ({ providers }: any) => {
    return (
        <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
            <Image src={'/Spotifylogo.png'} width={380} height={120} />
            <div className='mt-9'>
                {Object.values(providers).map((provider: any) => (
                    <div key={provider.name}>
                        <button
                            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
                            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}