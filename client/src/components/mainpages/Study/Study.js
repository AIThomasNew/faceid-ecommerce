import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import './Study.css'

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
    return (
        <motion.div initial="hidden" whileInView="visible" variants={textAnimationDown} className="Study" id="study">
            <div className="study__content">
                <div className="study__cards-courses">
                    <NavLink to="/online" className="box box__1">
                        <p>ONLINE ОБУЧЕНИЕ</p>
                    </NavLink>
                    <NavLink to="/offline" className="box box__2">
                        <p>ОЧНОЕ ОБУЧЕНИЕ</p>
                    </NavLink>
                </div>
            </div>
        </motion.div>
    )
}

export default Study
