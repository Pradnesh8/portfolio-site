"use client"
import Typewriter from 'typewriter-effect';

export default function TypeWriterComponent() {
    return (
        <>
            <h1>Pradnesh Khedekar</h1>
            <div className='flex'>
                <h2>I'm&nbsp;</h2>
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

