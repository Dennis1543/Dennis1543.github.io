import {useEffect, useState} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animatedletters';
import './index.scss'

const WebDev = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return(
        <>
        <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'm', 'e', 'n', 't']}
                        idx={15}
                        />
                    </h1>
                    <p> This section is a work in progress! However, it will include THIS website, as well as <a href="https://www.dlmebook.com/" target="_blank" rel="noreferrer">The Directed Listening Model's E-book website</a>.</p>
                </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default WebDev