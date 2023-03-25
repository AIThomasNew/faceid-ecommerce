import React from 'react'
import './Listing.css'
import {motion} from 'framer-motion'
// import {properties} from '../constants/data'





const Listing = ({data, open}) => {
    const {imageUrl, title, subtitle} = data

    return (
        <motion.div 
        className="Student-listing" 
        onClick={open} 
        whileHover={{scale: 1.1}}>

            <div 
            className="Student-listing__content">

                <div 
                className="Student-listing__image-container">

                    <img 
                    className="Student-listing__image" 
                    alt="real estate mansion" 
                    src={imageUrl} />
                    
                    {/* <img className="Student-listing__image" alt="real estate mansion" src={`../img/${image}.jpg`} /> */}
                </div>

                <div 
                className="Student-listing__details">
                    <div 
                    className="Student-listing__row">
                        <h4 
                        className="Student-listing__title">{title}</h4>
                    </div>

                    <div 
                    className="Student-listing__row">
                        <h4 
                        className="Student-listing__subtitle">{subtitle}</h4>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Listing