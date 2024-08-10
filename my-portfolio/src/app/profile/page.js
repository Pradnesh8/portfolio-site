import TypeWriterComponent from "../components/typeWriter";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Profile() {
    return (
        <>
            <div className="flex h-full flex-col items-center justify-center">
                <div className="h-[12rem] w-[12rem] rounded-full mb-8 bg-slate-400"></div>
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
            <div className="fixed gradient-text text-8xl -rotate-90 navbar-text tracking-widest origin-right top-[6%] right-[6%]">PROFILE</div>
        </>
    );
}
