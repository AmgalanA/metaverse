import Image from "next/image";
import { useMoralis } from 'react-moralis';

const Login = () => {
    const { authenticate } = useMoralis();

    return (
        <div className='bg-black relative'>
            LoginScreen
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center'>
                {/* Login Button */}

                <button onClick={authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>
                    Login To the METAVERSE
                </button>
            </div>

            <div className='w-full h-screen'>
                {/* Background Image */}
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login
