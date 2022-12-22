import React from 'react'
import {motion} from 'framer-motion'

const Listing = ({data, open}) => {
    const {imageUrl} = data

    return (
        <motion.div className="Study-listing" onClick={open} whileHover={{scale: 1.1}}>
            <div className="Study-listing__content">
                <div className="Study-listing__image-container">
                    <img className="Study-listing__image" alt="real estate mansion" src={imageUrl} />
                </div>
            </div>
        </motion.div>
    )
}

export default Listing
