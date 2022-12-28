import React from 'react'
import '../../Study.css'
import {motion} from 'framer-motion'

import Card from './LinkOffline/Card'
import {properties} from './constants/data'

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

const LinkOffline = () => {
    return (
        <motion.div className="Study-properties" custom={2} variants={textAnimationRight}>
            {properties.map((item) => (
                <Card data={item} key={item.id} />
            ))}
        </motion.div>
    )
}

export default LinkOffline
