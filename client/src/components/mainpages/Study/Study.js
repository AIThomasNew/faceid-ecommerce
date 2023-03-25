import React from 'react'
import './Study.css'
import {motion} from 'framer-motion'
import LinkOnline from './LinksStudies/LinkOnline/LinkOnline'
import LinkOffline from './LinksStudies/LinkOffline/LinkOffline'


const Study = () => {
    return (
        <motion.div
            className="Study"
            viewport={{amount: 0.1, once: true}}
            whileInView="visible"
            initial="hidden"
        >
            <LinkOnline /> {/* не адаптивен */}
            <LinkOffline /> {/* не адаптивен */}
        </motion.div>
    )
}
export default Study