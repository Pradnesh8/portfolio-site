import Image from 'next/image'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
// import NetflixGPTImage from './netflix-gpt.png';
export default function Projects() {
    return (
        <>
            <div className="flex min-h-screen flex-col mt-24 items-center gap-8 justify-center flex-[75%]">
                {/* <h1 className="text-4xl">Projects</h1> */}
                {
                    new Array(5).fill('').map((i, index) =>
                    (
                        <div key={index} className="min-h-[40vh] max-w-[416px] gradient-bg rounded-lg flex flex-col gap-2 items-center p-4">
                            <Image src="/netflix-gpt.png" className='rounded-lg project-image' alt='Netflixgpt project' height={300} width={400} />
                            <div className='text-xl flex justify-center items-center project-name'>
                                <span>
                                    Netflix GPT
                                </span>
                                <span>
                                    <a href='https://app-netflix-gpt.vercel.app' target='blank'><FaArrowUpRightFromSquare style={{ margin: '1rem', fontSize: '1rem' }} /></a>
                                </span>
                            </div>
                            <div className='project-info text-sm m-2'>
                                <ul className='list-disc ml-2'>
                                    <li>Utilized TMDB APIs to fetch movie-related details</li>
                                    <li>Integrated Firebase authentication, allowing users to sign up and log in</li>
                                    <li>Implemented Redux to maintain state-level data in a centralized manner</li>
                                    <li>Recommendation system using OpenAI APIs based on search queries</li>
                                    <li>Designed the platform to be responsive and styled using Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                    )
                    )
                }

            </div>
            <div className="fixed gradient-text text-8xl -rotate-90 navbar-text tracking-widest origin-right top-[2%] right-[6%]">PROJECTS</div>
        </>
    );
}
