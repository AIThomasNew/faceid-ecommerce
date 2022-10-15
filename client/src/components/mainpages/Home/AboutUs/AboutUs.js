import React, {useRef, useEffect, useState} from 'react'
import './AboutUs.css'
import imagesVertical from './imagesV'
import imageHorizontal from './imagesH'
import {motion} from 'framer-motion'

// функция анимации плавного перехода
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

// компонент "Обо мне"
const AboutUs = () => {
    // функционал
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

    // разметка
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.1, once: true}}
            className="app__aboutus  section__padding"
            id="about">
            <div className="app__aboutus-content">
                <div className="aboutus__header">
                    <motion.h1 custom={1} variants={textAnimation} className="headtext__cormorant">
                        Обо мне
                    </motion.h1>
                </div>

                <div className="aboutus__main">
                    <motion.div custom={2} variants={textAnimation} className="app__aboutus-content_about">
                        <h1 className="headtext__cormorant__mini">Сколько лет в ПМ</h1>
                        <p className="p__opensans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, id quo fugit harum facere
                            doloribus porro at earum perspiciatis cupiditate unde esse exercitationem iusto, minus sit
                            asperiores numquam consequatur illo? Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla, id quo fugit harum facere doloribus porro at earum perspiciatis cupiditate unde
                            esse exercitationem iusto, minus sit asperiores numquam consequatur illo?
                        </p>
                        <p className="p__opensans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, id quo fugit harum facere
                            doloribus porro at earum perspiciatis cupiditate unde esse exercitationem iusto, minus sit
                            asperiores numquam consequatur illo? Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla, id quo fugit harum facere doloribus porro at earum perspiciatis cupiditate.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.1, once: true}}
                        className="app__aboutus-content_diplomas">
                        <motion.h1 custom={1} variants={textAnimation} className="headtext__cormorant__mini">
                            Регалии и дипломы
                        </motion.h1>

                        <motion.div custom={2} variants={textAnimation} ref={carousel} className="carousel">
                            <motion.div
                                drag="x"
                                dragConstraints={{right: 100, left: -width}}
                                className="inner-carousel"
                                animate={{x: 250}}>
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
                                animate={{x: 250}}>
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
