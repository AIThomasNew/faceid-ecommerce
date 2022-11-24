import React from 'react'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
import './OurServices.css'

import servicesPhoto1 from '../../../assets/services/servicesPhoto1.jpg'
import servicesPhoto2 from '../../../assets/services/servicesPhoto2.jpg'
import servicesPhoto3 from '../../../assets/services/servicesPhoto3.jpg'

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
        x: -300,
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

const OurServices = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            className="OurServices app__bg"
            id="services"
        >
            <motion.h1 custom={1} variants={textAnimationUp} className="headtext__cormorant">
                Центр ПМ FACE ID
            </motion.h1>

            <motion.div custom={2} variants={textAnimationLeft} className="container__services">
                <div className="container__services-box">
                    <div className="icon icon-1">
                        <img className="imageService" src={servicesPhoto1} />
                    </div>
                    <div className="content">
                        <h2>Губы</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente
                            inventore eius!
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="icon icon-2">
                        <img className="imageService" src={servicesPhoto2} />
                    </div>
                    <div className="content">
                        <h2>Веки</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente
                            inventore eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-3">
                        <img className="imageService" src={servicesPhoto3} />
                    </div>
                    <div className="content">
                        <h2>Брови</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente
                            inventore eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-4">
                        <img className="imageService" src={servicesPhoto3} />
                    </div>
                    <div className="content">
                        <h2>Удаление</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente
                            inventore eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-5">
                        <img className="imageService" src={servicesPhoto1} />
                    </div>
                    <div className="content">
                        <h2>Ламинирование</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente
                            inventore eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-6">
                        <img className="imageService" src={servicesPhoto2} />
                    </div>
                    <div className="content">
                        <h2>Ремувер</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente
                            inventore eius!
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div custom={3} variants={textAnimationDown}>
                <NavLink to="/price" className="container__price">
                    <p>Прайс</p>
                </NavLink>
            </motion.div>
        </motion.div>
    )
}

export default OurServices
