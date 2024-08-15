import { FaNodeJs, FaJs, FaPython, FaReact, FaAngular, FaHtml5, FaCss3, FaGithub, FaFigma } from 'react-icons/fa';
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiExpress, SiMongoose, SiPrisma, SiMongodb, SiPostgresql, SiMaterialdesign, SiTailwindcss } from "react-icons/si";
// Programming: ReactJS, Angular, NodeJS, ExpressJS, MongoDB, Redux, HTML, CSS, JavaScript,
//     TypeScript, TailwindCSS, MaterialUI, Python, Mongoose, Docker | Tools : Github, VScode, Figma
export default function Skills() {
    return (
        <>
            <div className="flex min-h-screen w-screen flex-col items-center justify-center flex-[75%]">
                <div className="md:hidden text-4xl font-light text-center animate-pulse navbar-text gradient-text-mobile mb-4 mt-12">SKILLS</div>
                <div className='flex flex-col items-center md:items-start gap-4'>
                    <h4 className='text-2xl'>Programming Languages</h4>
                    <div className='flex flex-wrap gap-8 md:items-center justify-center'>
                        <FaJs style={{ fontSize: '3.5rem' }} title='Javascript' />
                        <BiLogoTypescript style={{ fontSize: '4rem' }} title='Typescript' />
                        <FaPython style={{ fontSize: '3.5rem' }} title='Python' />
                    </div>

                    <h4 className='text-2xl'>Frontend Technologies</h4>
                    <div className='flex flex-wrap gap-x-8 items-center justify-center'>
                        <FaHtml5 style={{ fontSize: '4rem' }} title='HTML' />
                        <FaCss3 style={{ fontSize: '4rem' }} title='CSS' />
                        <FaReact style={{ fontSize: '4rem' }} title='React' />
                        <FaAngular style={{ fontSize: '4rem' }} title='Angular' />
                        <RiNextjsLine style={{ fontSize: '4rem' }} title='NextJS' />
                        <SiMaterialdesign style={{ fontSize: '3.5rem' }} title='Material UI' />
                        <SiTailwindcss style={{ fontSize: '3.5rem' }} title='TailwindCSS' />
                    </div>

                    <h4 className='text-2xl'>Backend Technologies</h4>
                    <div className='flex flex-wrap gap-x-8 items-center justify-center'>
                        <FaNodeJs style={{ fontSize: '3.5rem' }} title='NodeJS' />
                        <SiExpress style={{ fontSize: '4rem' }} title='ExpressJS' />
                        <SiMongoose style={{ fontSize: '4rem' }} title='Mongoose ODM' />
                        <SiPrisma style={{ fontSize: '3.5rem' }} title='Prisma ORM' />
                        <SiMongodb style={{ fontSize: '3.5rem' }} title='MongoDB' />
                        <SiPostgresql style={{ fontSize: '3.5rem' }} title='Postgresql DB' />
                    </div>

                    <h4 className='text-2xl'>Tools</h4>
                    <div className='flex flex-wrap gap-8 items-center justify-center'>
                        <FaGithub style={{ fontSize: '3.5rem' }} title='Github' />
                        <VscVscode style={{ fontSize: '3.5rem' }} title='Visual Studio Code' />
                        <FaFigma style={{ fontSize: '3.5rem' }} title='Figma' />
                    </div>
                </div>
            </div>
            <div className="hidden md:block fixed gradient-text text-8xl -rotate-90 navbar-text tracking-widest origin-right top-[15%] right-[6%] animate-pulse">SKILLS</div>
        </>
    );
}
