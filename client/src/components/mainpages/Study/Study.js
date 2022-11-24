import React, {useRef, useEffect} from 'react'
import irinaStudy from './index'
import VanillaTilt from 'vanilla-tilt'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import './Study.css'


function Tilt(props) {
    const {options, ...rest} = props
    const tilt = useRef(null)

    useEffect(() => {
        VanillaTilt.init(tilt.current, options)
    }, [options])

    return <div ref={tilt} {...rest} />
}

const textAnimationDown = {
    hidden: {
        x: 0,
        y: 0,
        scale: 0,
        rotate: 0,
    },
    visible: {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
    },
}



const Study = () => {
    
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 25,
    }

    return (
        <motion.div 
            initial="hidden" 
            whileInView="visible" 
            variants={textAnimationDown} 
            className="Study" 
            id="study"
        >
            <div className="study__content">
                {/* <div className="study__header">
                    <h1 className=" headtext__cormorant_study">Обучающие курсы</h1>
                </div> */}

                <div className="study__cards-courses">
                    <Tilt className="tilt" options={options}>
                        <NavLink to="/online" className="box box__1">
                            <p>ONLINE ОБУЧЕНИЕ</p>
                        </NavLink>
                    </Tilt>
                    <Tilt className="tilt" options={options}>
                        <NavLink to="/offline" className="box box__2">
                            <p>ОЧНОЕ ОБУЧЕНИЕ</p>
                        </NavLink>
                    </Tilt>
                </div>
                <div className="study__photo">
                    <img className="irina_study" src={irinaStudy} />
                </div>
            </div>
        </motion.div>
    )
}

export default Study

/* 
  {
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise

} */
