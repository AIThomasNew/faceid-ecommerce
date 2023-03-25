import React from 'react'
import foryouImg from '../img/foryou-photo.png'
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
const photoAnim = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.5,
        },
    }),
}

const ForYou = () => {
    return (
        <motion.div whileInView='visible' initial='hidden'>
            <div className="ForYou padding-class" id="For">
                <div className="ForYou-container">
                    <motion.div 
                        className="ForYou-image"
                        whileInView='visible'
                        initial='hidden'
                        custom={1}
                        variants={photoAnim}
                    >
                        <img 
                            src={foryouImg} alt="foryou_image"
                        />
                    </motion.div>
                    <motion.div 
                    className="ForYou-content"
                    custom={3}
                    variants={textAnimationRight}
                    >
                        <h2>ЭТО КУРС ДЛЯ ТЕБЯ! ЕСЛИ ТЫ:</h2>
                        <span></span>
                        <ul>
                            <li>1. Решила сменить сферу деятельности</li>
                            <li>2. Бьюти-мастер и хочешь расширить спектр своих услуг</li>
                            <li>3. Мамочка в декрете и хочешь сама выстраивать свой график работы</li>
                            <li>
                                4. Мастер перманентного макияжа, получивший некачественное обучение или с длительным
                                перерывом в практике
                            </li>
                            <li>5. Хочешь быть топ-мастером перманентного макияжа и иметь высокий доход</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
export default ForYou