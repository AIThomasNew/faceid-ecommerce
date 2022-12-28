import React from 'react'
import bazaIrinaImg from '../img/baza-photo.png'
import {motion} from 'framer-motion'

const textAnimationUp = {
    hidden: {
        y: -200,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}

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

const textAnimationDown = {
    hidden: {
        y: 200,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}

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

const Baza = () => {
    return (
        <motion.div viewport={{amount: 0.1, once: true}} whileInView="visible" initial="hidden">
            <div className="Baza padding-class">
                <div className="Baza-content">
                    <div className="Baza-heading">
                        <motion.h1 custom={1} variants={textAnimationUp}>
                            Базовый курс по перманентному макияжу
                            {/* <span>Базовый курс</span> по перманентному макияжу */}
                        </motion.h1>

                        <motion.p custom={2} variants={textAnimationLeft}>
                            Отбросьте сомнения - этот курс непременно изменит Вашу жизнь! Мы учли все нюансы, курс
                            дополнен самой актуальной информацией о перманентном макияже. Учись и работай уже на своем
                            аппарате. В курс включен стартовый набор. Освой новую профессию и стань практикующим
                            мастером за 10 дней.
                        </motion.p>

                        <motion.a custom={3} variants={textAnimationDown} href="#For" className="Button-start">
                            НАЧАТЬ
                        </motion.a>
                    </div>
                </div>
                <motion.div custom={1} variants={textAnimationRight} className="Baza-image">
                    <img src={bazaIrinaImg} alt="baza_img" />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Baza
