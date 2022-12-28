import React from 'react'
import './Modal.css'
import {motion} from 'framer-motion'
import {IoCloseCircleOutline} from 'react-icons/io5'

const Modal = ({data, close}) => {
    const {
        imageUrl,
        address,
        firstday,
        secondday,
        onlineli1,
        onlineli2,
        onlineli3,
        onlineli4,
        onlineli5,
        onlineli6,
        onlineli7,
        onlineli8,
        onlineli9,
        onlineli10,
        offline1,
        offline2,
        offline3,
        offline4,
        offline5,
        offline6,
        offline7,
        offline8,
        offline9,
        offline10,
        present1,
        present2,
        forwhom,
        price,
        bonus,
    } = data

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

            <motion.div className="modal__info" variants={modalInfoVariants}>
                <motion.div className="modal__row" variants={modalRowVariants}>
                    <span className="modal__address">{address}</span>
                </motion.div>

                <motion.div className="modal__description-wrapper" variants={modalRowVariants}>
                    <div className="modal__description">
                        <h3>Сроки проведения:</h3>
                        <p>2-х дневный мастер-класс.</p>

                        <h3>Первый день </h3> <p>{firstday}</p>
                        <h3>Второй день </h3> <p>{secondday}</p>

                        <h3>Структура</h3>
                        <h5>Online часть:</h5>
                        <ul>
                            <li>{onlineli1}</li>
                            <li>{onlineli2}</li>
                            <li>{onlineli3}</li>
                            <li>{onlineli4}</li>
                            <li>{onlineli5}</li>
                            <li>{onlineli6}</li>
                            <li>{onlineli7}</li>
                            <li>{onlineli8}</li>
                            <li>{onlineli9}</li>
                            <li>{onlineli10}</li>
                        </ul>
                        <h5>Offline часть:</h5>
                        <ul>
                            <li>{offline1}</li>
                            <li>{offline2}</li>
                            <li>{offline3}</li>
                            <li>{offline4}</li>
                            <li>{offline5}</li>
                            <li>{offline6}</li>
                            <li>{offline7}</li>
                            <li>{offline8}</li>
                            <li>{offline9}</li>
                            <li>{offline10}</li>
                        </ul>

                        <h3>В конце МК все участники получают подарки:</h3>
                        <ul>
                            <li>{present1}</li>
                            <li>{present2}</li>
                        </ul>
                        <h3>Для кого:</h3> <p>{forwhom}</p>
                    </div>

                    <motion.div className="modal__row" variants={modalRowVariants}>
                        <span className="modal__price">{price}</span>
                    </motion.div>

                    <h4>{bonus}</h4>
                </motion.div>

                <div>
                    <h2>НАЧАТЬ</h2>
                </div>

                <motion.button className="modal__close-wrapper" whileHover={{scale: 1.2}} onClick={close}>
                    <IoCloseCircleOutline className="modal__close-icon" />
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

export default Modal
