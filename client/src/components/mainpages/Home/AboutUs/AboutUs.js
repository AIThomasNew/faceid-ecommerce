import React, {useRef, useEffect, useState} from 'react'
import './AboutUs.css'
import imagesVertical from './imagesV'
import imageHorizontal from './imagesH'
import {motion} from 'framer-motion'
import Arrow from './img/arrow-right-solid.svg'

const textAnimation = {
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

const AboutUs = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    const [width2, setWidth2] = useState(0)
    const carousel2 = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth / 11 + carousel.current.offsetWidth)
    }, [])
    useEffect(() => {
        setWidth2(carousel2.current.scrollWidth / 0.9 - carousel2.current.offsetWidth)
    }, [])

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.1, once: true}}
            className="app__aboutus  section__padding"
            id="about"
        >
            <div className="app__aboutus-content">
                <div className="aboutus__header">
                    <motion.h1 custom={1} variants={textAnimation} className="headtext__cormorant">
                        Обо мне
                    </motion.h1>
                </div>

                <div className="aboutus__main">
                    <motion.div custom={2} variants={textAnimation} className="app__aboutus-content_about">
                        <h1 className="headtext__cormorant__mini">
                            Основатель Центра перманентного макияжа "FACE ID" в городе Перми
                        </h1>
                        {/* <h1 className="headtext__cormorant__mini">Основатель Центра перманентного </h1> */}
                        {/* <h1 className="headtext__cormorant__mini-blue">макияжа "FACE ID" в городе Перми</h1> */}
                    </motion.div>
                    <motion.div custom={2} variants={textAnimationLeft} className="app__aboutus-content_about">
                        {/* <h2 className="headtext__cormorant__mini">
                            Сертифицированный тренер-преподаватель международного уровня
                        </h2> */}
                        <h2 className="headtext__cormorant__mini-blue">
                            Сертифицированный тренер-преподаватель международного уровня
                        </h2>
                    </motion.div>
                    <div className="achievements">
                        <ul className="p__opensans">
                            <motion.div custom={4} variants={textAnimationLeft}>
                                <li>
                                    <div>➜</div> 1 место номинация "Губы" Профи г.Оренбург, 2022
                                </li>
                            </motion.div>
                            <motion.div custom={6} variants={textAnimationLeft}>
                                <li>
                                    <div>➜</div> Гран-при extra "Permanent", Perm 2019
                                </li>
                            </motion.div>
                            <motion.div custom={8} variants={textAnimationLeft}>
                                <li>
                                    <div>➜</div> Extra Permanent Лучший ПМ бровей по мнению судьи, октябрь 2019 г, Perm
                                </li>
                            </motion.div>
                            <motion.div custom={10} variants={textAnimationLeft}>
                                <li>
                                    <div>➜</div> 3 место Профи ПМ губ в технике "Акварель", Perm 2019
                                </li>
                            </motion.div>
                            <motion.div custom={12} variants={textAnimationLeft}>
                                <li>
                                    <div>➜</div> "Лучшие веки" на чемпионате "EXTRA PERMANENT" Perm 2019
                                </li>
                            </motion.div>
                            <motion.div custom={14} variants={textAnimationLeft}>
                                <li>
                                    <div>➜</div> 3 место Профи ПМ бровей в технике "Напыление", Пермь 2019
                                </li>
                            </motion.div>
                        </ul>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.1, once: true}}
                        className="app__aboutus-content_diplomas"
                    >
                        <motion.h1 custom={1} variants={textAnimation} className="headtext__cormorant__mini">
                            Регалии и дипломы
                        </motion.h1>

                        <motion.div custom={2} variants={textAnimation} ref={carousel} className="carousel">
                            <motion.div
                                drag="x"
                                dragConstraints={{right: 100, left: -width}}
                                className="inner-carousel"
                                animate={{x: 250}}
                            >
                                {imagesVertical.map((imageVertical) => {
                                    return (
                                        <motion.div className="item" key={imageVertical}>
                                            <img src={imageVertical} alt="" />
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </motion.div>

                        <motion.div custom={3} variants={textAnimation} ref={carousel2} className="carousel-2">
                            <motion.div
                                drag="x"
                                dragConstraints={{right: 100, left: -width2}}
                                className="inner-carousel-2"
                                animate={{x: 250}}
                            >
                                {imageHorizontal.map((imageHorizontal) => {
                                    return (
                                        <motion.div className="item-2" key={imageHorizontal}>
                                            <img src={imageHorizontal} alt="" />
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutUs
