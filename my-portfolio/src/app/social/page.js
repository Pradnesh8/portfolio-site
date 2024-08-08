import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Social() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center flex-[75%]">
            <h1 className='text-3xl font-extralight'>Follow me</h1>
            <div className='flex gap-1 items-center'>
                <a href="https://github.com/Pradnesh8" target='blank' title='github'>
                    <FaGithub style={{ margin: '1rem', fontSize: '2rem' }} />
                </a>
                <a href="https://www.linkedin.com/in/pradnesh-khedekar-40180b148/" target='blank' title='linkedin'>
                    <FaLinkedin style={{ margin: '1rem', fontSize: '2rem' }} />
                </a>
                <a href="mailto:pradneshkhedekar08@gmail.com" target='blank' title='gmail'>
                    <FaEnvelope style={{ margin: '1rem', fontSize: '2rem' }} />
                </a>
            </div>
        </main>
    );
}
