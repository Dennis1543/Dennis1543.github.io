import {useEffect, useState} from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../animatedletters';
import './index.scss';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','T', 'a','y','l','o','r', '!']
    const jobArray = ['A', ' ', 'C', 'S','E',' ','S','t','u','d','e','n','t','.']

    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,&nbsp;</span>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} 
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} 
                idx={22} />
                </h1>
                <h2> Software Engineer / Video Game Programmer </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
        
    )

}

export default Home