import React from 'react'
import kistochka from './kistochka.jpg'
import {motion} from 'framer-motion'
import video from './video.png'
import chat from './chat.png'
import maceup from './maceup.png'
import certificate from './certificate.png'

const textAnimationLeft = {
    hidden: {
        x: -300,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}

const textAnimationFocus = {
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

const KakProhodit = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.2, once: true}} id="services">
            <div className="Kak-prohodit">
                <motion.div className="Kak-wrapper" custom={2} variants={textAnimationLeft}>
                    <div className="Kak-content">
                        <h2>КАК ПРОХОДИТ ОБУЧЕНИЕ ?</h2>

                        <div className="Kak-card">
                            <motion.div custom={4} variants={textAnimationFocus}>
                                <div className="fingerprint">
                                    <img src={video} alt="" />
                                </div>
                                <h3>#1 - 20 Видеоуроков на площадке GetCourse</h3>
                            </motion.div>
                            <motion.div custom={6} variants={textAnimationFocus}>
                                <div className="fingerprint">
                                    <img src={chat} alt="" />
                                </div>
                                <h3>#2 - Общий чат в телеграм</h3>
                            </motion.div>
                            <motion.div custom={8} variants={textAnimationFocus}>
                                <div className="fingerprint">
                                    <img src={maceup} alt="" />
                                </div>
                                <h3>#3 - Практика в центре 5 дней</h3>
                            </motion.div>
                            <motion.div custom={10} variants={textAnimationFocus}>
                                <div className="fingerprint">
                                    <img src={certificate} alt="" />
                                </div>
                                <h3>#4 - Сертификат установленного образца Косметик 4 разряда</h3>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <div className="Kak-image">
                    <img src={kistochka} alt="Kak_image" />
                </div>
            </div>
        </motion.div>
    )
}

export default KakProhodit
