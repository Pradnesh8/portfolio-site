import { FaDownload } from 'react-icons/fa';
export default function Resume() {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center flex-[75%]">
                <a href="/resume.pdf" download="Pradnesh-Khedekar-resume.pdf">
                    <div className='flex items-center bg-black px-6 py-3 mb-2 rounded-lg'>
                        <h1 className='text-2xl font-extralight'>Download resume</h1>

                        <FaDownload style={{ marginLeft: '1rem', fontSize: '1.5rem' }} />
                    </div>
                </a>
                <div className='h-[80vh] w-[56vw]'>
                    <iframe src="https://drive.google.com/file/d/1UH5Yyu67soZ1mnBSl3lZG56sR3YrsR-Y/preview" width="100%" height="100%" allow="autoplay"></iframe>
                </div>
            </div>
            <div className="fixed gradient-text text-8xl -rotate-90 navbar-text tracking-widest origin-right top-[7%] right-[6%] animate-pulse">RESUME</div>
        </>
    );
}
