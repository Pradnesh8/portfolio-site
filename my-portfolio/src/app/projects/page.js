import Image from 'next/image'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
// import NetflixGPTImage from './netflix-gpt.png';
export default function Projects() {
    const projects = [
        {
            id: 1,
            name: "Netflix GPT",
            imageUrl: "/netflix-gpt.png",
            projectLink: "https://app-netflix-gpt.vercel.app",
            description: [
                "Utilized TMDB APIs to fetch movie-related details",
                "Integrated Firebase authentication, allowing users to sign up and log in",
                "Implemented Redux to maintain state-level data in a centralized manner",
                "Recommendation system using OpenAI APIs based on search queries",
                "Designed the platform to be responsive and styled using Tailwind CSS",
            ]
        },
        {
            id: 2,
            name: "Youtube X",
            imageUrl: "/youtube-x.png",
            projectLink: "https://youtube-x.vercel.app",
            description: [
                "Developed a comprehensive YouTube clone leveraging the official API",
                "Enhanced user experience through infinite scrolling, lazy loading, and a visually appealing loading state",
                "Optimized application performance and scalability with Redux state management",
                "Implemented robust search functionality using Google Suggestions and debouncing",
                "Implemented a short polling mechanism for the Live chat feature"
            ]
        },
        {
            id: 3,
            name: "Movies.info",
            imageUrl: "/movie-info.png",
            projectLink: "https://movie-info.onrender.com/",
            description: [
                "Fullstack web application using ReactJS, NodeJS, ExpressJS and MongoDB",
                "Implemented user authentication, search functionality, and watchlist management",
                "Integrated OMDb API for movie / show details",
                "Created a dynamic and user- friendly interface"
            ]
        },
        {
            id: 4,
            name: "My Notes",
            imageUrl: "/my-notes.png",
            projectLink: "https://my-notes-ajh7.onrender.com/",
            description: [
                "User friendly note taking app using ReactJS and json-server",
                "Implemented CRUD operations for notes",
                "Included dark/ light theme and list / grid view options",
                "Created a user - friendly interface for efficient note management",
                "Ensured seamless adaptability across different screen sizes."
            ]
        },
        {
            id: 5,
            name: "Comment System",
            imageUrl: "/comment-system.png",
            projectLink: "https://comment-system-all.vercel.app/",
            description: [
                "Google Authentication for user sign-in and commenting.",
                "Rich text formatting(bold, italic, underline, hyperlink) and image attachments in comments.",
                "Tagging functionality to mention users within comments.",
                "Reactions, reply options, and sorting comments by latest or popularity.",
                "Display profile pictures, comment timestamps, and “show more / less” for long comments.",
                "Pagination(8 comments per page) with success, failure, and empty state messages.",
            ]
        },
    ]
    return (
        <>
            <div className="flex min-h-screen flex-col mt-24 mb-24 items-center gap-8 justify-center flex-[75%]">
                {/* <h1 className="text-4xl">Projects</h1> */}
                <div className="md:hidden text-4xl font-light text-center animate-pulse navbar-text gradient-text-mobile">PROJECTS</div>
                {
                    projects.map((proj) =>
                    (
                        <div key={proj.id} className="md:mx-0 md:gradient-bg max-w-[416px] gradient-bg-mobile mx-2 rounded-lg flex flex-col gap-2 items-center p-2">
                            <Image src={proj.imageUrl} className='rounded-lg project-image' alt={proj.name} height={300} width={400} />
                            <div className='text-xl flex justify-center items-center project-name'>
                                <span>
                                    {proj.name}
                                </span>
                                <span>
                                    <a href={proj.projectLink} target='blank'><FaArrowUpRightFromSquare style={{ marginLeft: '1rem', fontSize: '1rem' }} /></a>
                                </span>
                            </div>
                            <div className='project-info text-sm m-2'>
                                <ul className='list-disc ml-2'>
                                    {
                                        proj.description.map((desc, idx) => (<li className='text-wrap' key={idx}>{desc}</li>))
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                    )
                }

            </div>
            <div className="hidden md:block fixed gradient-text text-8xl -rotate-90 navbar-text tracking-widest origin-right top-[2%] right-[6%] animate-pulse">PROJECTS</div>
        </>
    );
}
