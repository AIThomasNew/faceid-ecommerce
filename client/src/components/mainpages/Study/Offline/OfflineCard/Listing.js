import React from 'react'
import './Listing.css'
import {motion} from 'framer-motion'

const Listing = ({data, open}) => {
    const {imageUrl, price, address, subtitle} = data

    return (
        <motion.div className="listing" onClick={open} whileHover={{scale: 1.1}}>
            <div className="listing__content">
                <div className="listing__image-container">
                    <img className="listing__image" alt="real estate mansion" src={imageUrl} />
                </div>
                <div className="listing__details">
                    <div className="listing__type">+ Подарок</div>
                    <div className="listing__row">
                        <h4 className="listing__title">{address}</h4>
                    </div>
                    <div className="listing__row">
                        <h4 className="listing__subtitle">{subtitle}</h4>
                    </div>
                    <div className="listing__row">
                        <span className="listing__price">{price}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Listing
