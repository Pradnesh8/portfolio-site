"use client"
import Typewriter from 'typewriter-effect';

export default function TypeWriterComponent() {
    return (
        <>
            <h1 className='text-3xl mb-2'>I'm Pradnesh Khedekar</h1>
            <div className='flex text-2xl mb-4'>
                <Typewriter
                    options={{
                        strings: ['Web Developer', 'Frontend Developer', 'React Developer', 'Angular Developer', 'Fullstack Developer', 'NodeJS Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </>
    )
}

