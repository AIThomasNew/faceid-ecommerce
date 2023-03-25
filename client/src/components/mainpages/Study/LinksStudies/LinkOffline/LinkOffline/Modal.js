import React from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'


const Modal = ({data, close}) => {
    const {imageUrl, title, description, subtitle} = data
    const modalVariants = {
        open: {
            opacity: 1,
            transition: {staggerChildren: 0.5, delayChildren: 0.2},
        },
        closed: {opacity: 0},
    }
    const imageVariants = {
        open: {opacity: 1, y: '0vh'},
        closed: {opacity: 0, y: '-10vh'},
    }
    const modalInfoVariants = {
        open: {opacity: 1, transition: {staggerChildren: 0.2}},
        closed: {opacity: 0},
    }
    const modalRowVariants = {
        open: {opacity: 1, x: 0},
        closed: {opacity: 0, x: '10%'},
    }
    return (
        <motion.div className="modal" variants={modalVariants} onClick={(e) => e.stopPropagation()}>
            <motion.img
                className="modal__image"
                alt="real estate mansion"
                src={imageUrl}
                variants={imageVariants}
            ></motion.img>



            <motion.div className="modal__info2" variants={modalInfoVariants}>
                <motion.div className="modal__row2" variants={modalRowVariants}>
                    <span className="modal__address2">{title}</span>
                </motion.div>


                <motion.div className="modal__row2" variants={modalRowVariants}>
                    <h4>{subtitle}</h4>
                </motion.div>
                

                <motion.div className="modal__description-wrapper" variants={modalRowVariants}>
                    <p className="modal__description">{description}</p>
                </motion.div>



                <motion.div variants={modalRowVariants}>
                    <NavLink to="/offline">
                        <h3>ЗАЙТИ</h3>
                    </NavLink>
                </motion.div>

                <motion.button className="modal__close-wrapper" whileHover={{scale: 1.2}} onClick={close}>
                    <IoCloseCircleOutline className="modal__close-icon" />
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

export default Modal
