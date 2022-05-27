import {useEffect, useState} from 'react'
import AnimatedLetters from '../animatedletters'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o','u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>My name is Taylor Snyder, and I'm a senior studying Computer Science Engineering at the University of Michigan. </p>
                <p>I'm a trumpet player in the University of Michigan Marching Band, and an avid video game enthusiast. I'm hoping to
                    pursue a career in video game development in the future.</p>
                <p>Software engineering is my passion, whether it be for a website or a Game Jam! Creating something from nothing is a wonderful feeling.</p>
                <a href="./SnyderResume2022CSE.pdf" title="" download className='flat-button'>DOWNLOAD MY RESUM&Eacute;</a>
				
            </div>
            <div className='about-section'>
                <section>
               <h2>Relevant Coursework</h2>
                <ul>
                    <li> STATS 250 - Statistics and Data Analysis</li>
                    <li> EECS 281  - Data Structures and Algorithms</li>
                    <li> PAT 305   - Video Game Music</li>
                    <li> EECS 370  - Computer Architecture </li>
                    <li> EECS 388  - Computer Security</li>
                    <li> EECS 485  - Web Systems</li>
                    <li> EECS 494  - Computer Game Design and Development</li>
                </ul>
                </section>
            
                <section>
                <h2>Technical Skills</h2>
                <h3>Proficient:</h3>
                <ul>
                    <li>C/C++; Python</li>
                    <li>Visual Studio Code; Jira; Windows OS; Linux</li>
                </ul>
                <h3>Intermediate:</h3>
                <ul>
                    <li>C# (Unity Game Engine); HTML/CSS; JavaScript; Go; PHP; MATLAB; R</li>
                    <li>SQL (SQLite); Git; Visual Studio; Docker; Wireshark</li>
                </ul>
                </section>

                <section>
                <h2>Favorite Games I'm Playing</h2>
                <ul>
                    <li>Rhythm Heaven</li>
                    <li>Crypt of the NecroDancer</li>
                    <li>Life is Strange</li>
                    <li>The Witcher 3</li>
                    <li>Europa Universalis 4</li>
                </ul>
                </section>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
