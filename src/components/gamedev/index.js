import {useEffect, useRef, useState} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animatedletters';
import './index.scss'

const GameDev = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

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
                        strArray={['G', 'a', 'm', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'm', 'e', 'n', 't']}
                        idx={15}
                        />
                    </h1>
                    <p> This section is a work in progress! </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default GameDev;