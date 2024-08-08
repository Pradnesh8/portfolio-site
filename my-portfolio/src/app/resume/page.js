import { FaDownload } from 'react-icons/fa';
export default function Resume() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center flex-[75%]">
            <h1 className='text-3xl font-extralight'>Download resume</h1>
            <a href="/resume.pdf" download="resume.pdf">
                <FaDownload style={{ margin: '1rem', fontSize: '2rem' }} />
            </a>
        </div>
    );
}
