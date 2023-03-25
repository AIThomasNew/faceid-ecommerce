import React from 'react'
import ReactCompareImage from 'react-compare-img'
import Before from './img/Before.png'
import After from './img/After.png'
import './Virtual.css'
import {motion} from 'framer-motion'

const textAnimationRight = {
    hidden: {
        x: 400,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}

const Virtual = () => {
    return (
        <motion.div 
            initial='visible' 
            whileInView='hidden'
            >
            <motion.div 
                className="right"
                initial='hidden'
                whileInView='visible'
                custom={2}
                variants={textAnimationRight}
                >
                <div 
                    className="virtual-wrapper"
                    >
                    <ReactCompareImage 
                        leftImage={Before} 
                        rightImage={After} 
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}
export default Virtual