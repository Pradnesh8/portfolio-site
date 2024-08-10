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
            <div className="flex min-h-screen flex-col items-center justify-center flex-[75%]">
                <div className='flex flex-col items-start gap-4'>
                    <h4 className='text-2xl'>Programming Languages</h4>
                    <div className='flex gap-8 items-center'>
                        <FaJs style={{ fontSize: '3.5rem' }} title='Javascript' />
                        <BiLogoTypescript style={{ fontSize: '4rem' }} title='Typescript' />
                        <FaPython style={{ fontSize: '3.5rem' }} title='Python' />
                    </div>

                    <h4 className='text-2xl'>Frontend Technologies</h4>
                    <div className='flex gap-8 items-center'>
                        <FaHtml5 style={{ fontSize: '4rem' }} title='HTML' />
                        <FaCss3 style={{ fontSize: '4rem' }} title='CSS' />
                        <FaReact style={{ fontSize: '4rem' }} title='React' />
                        <FaAngular style={{ fontSize: '4rem' }} title='Angular' />
                        <RiNextjsLine style={{ fontSize: '4rem' }} title='NextJS' />
                        <SiMaterialdesign style={{ fontSize: '3.5rem' }} title='Material UI' />
                        <SiTailwindcss style={{ fontSize: '3.5rem' }} title='TailwindCSS' />
                    </div>

                    <h4 className='text-2xl'>Backend Technologies</h4>
                    <div className='flex gap-8 items-center'>
                        <FaNodeJs style={{ fontSize: '3.5rem' }} title='NodeJS' />
                        <SiExpress style={{ fontSize: '4rem' }} title='ExpressJS' />
                        <SiMongoose style={{ fontSize: '4rem' }} title='Mongoose ODM' />
                        <SiPrisma style={{ fontSize: '3.5rem' }} title='Prisma ORM' />
                        <SiMongodb style={{ fontSize: '3.5rem' }} title='MongoDB' />
                        <SiPostgresql style={{ fontSize: '3.5rem' }} title='Postgresql DB' />
                    </div>

                    <h4 className='text-2xl'>Tools</h4>
                    <div className='flex gap-8 items-center'>
                        <FaGithub style={{ fontSize: '3.5rem' }} title='Github' />
                        <VscVscode style={{ fontSize: '3.5rem' }} title='Visual Studio Code' />
                        <FaFigma style={{ fontSize: '3.5rem' }} title='Figma' />
                    </div>
                </div>
            </div>
            <div className="fixed gradient-text text-8xl -rotate-90 navbar-text tracking-widest origin-right top-[15%] right-[6%] animate-pulse">SKILLS</div>
        </>
    );
}
