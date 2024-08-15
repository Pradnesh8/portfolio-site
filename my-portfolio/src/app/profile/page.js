import Image from "next/image";
import TypeWriterComponent from "../components/typeWriter";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Profile() {
    return (
        <>
            <div className="flex h-full flex-col items-center justify-center">
                <div className="md:hidden mb-10 text-4xl font-light text-center animate-pulse navbar-text gradient-text-mobile">PROFILE</div>
                <div className="h-[12rem] w-[12rem] overflow-hidden rounded-full mb-8 z-10">
                    <Image src={"/profile.jpeg"} alt="Profile picture" height={300} width={300} className="object-cover" />
                </div>
                <TypeWriterComponent />
                <div className='flex gap-2 items-center'>
                    <a href="mailto:pradneshkhedekar08@gmail.com" target='blank' title='gmail'>
                        <FaEnvelope style={{ margin: '1rem', fontSize: '2.5rem' }} />
                    </a>
                    <a href="https://github.com/Pradnesh8" target='blank' title='github'>
                        <FaGithub style={{ margin: '1rem', fontSize: '2.5rem' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/pradnesh-khedekar-40180b148/" target='blank' title='linkedin'>
                        <FaLinkedin style={{ margin: '1rem', fontSize: '2.5rem' }} />
                    </a>
                </div>
            </div>

            <div className="hidden md:block fixed gradient-text text-8xl -rotate-90 navbar-text tracking-widest origin-right top-[6%] right-[6%] animate-pulse">PROFILE</div>
        </>
    );
}
