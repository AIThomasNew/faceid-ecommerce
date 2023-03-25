import React from 'react'
import '../../Study.css'
import {motion} from 'framer-motion'

import Card from './LinkOnline/Card'
import {properties} from './constants/data'

const textAnimationLeft = {
    hidden: {
        x: -400,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}


const LinkOnline = () => {
    return (
        <motion.div 
        custom={2} 
        variants={textAnimationLeft} 
        className="Study-properties"
        >
            {properties.map((item) => (
                <Card data={item} key={item.id} />
            ))}
        </motion.div>
    )
}
export default LinkOnline