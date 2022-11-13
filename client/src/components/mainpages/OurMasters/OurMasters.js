import React, {useState, useEffect} from 'react'
import './OurMasters.css'
import useCollapse from 'react-collapsed'
import {useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import {masterIrina, masterAnna, masterLilia, masterNasty, masterStefania} from './index'

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
        x: -100,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}
const textAnimationRight = {
    hidden: {
        x: 100,
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



const OurMasters = () => {
    const [isExpanded, setExpanded] = useState(false)
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            className="OurMasters app__bg"
        >
            <motion.h1 custom={1} variants={textAnimationUp} className="headtext__cormorant">
                Наши мастера
            </motion.h1>
            <div className="OurMasters__cards">
                <div className="lvl1">
                    <motion.div custom={2} variants={textAnimationLeft} className="OurMasters__card-Master">
                        <div className="OurMasters__card-Masters-content">
                            <h2>Мастер-преподаватель Ирина:</h2>
                            <p className="p-silver">Перманентный макияж бровей/губ/век(стрелка) </p>
                            <ul>
                                <li>Основная 7000р</li>
                                <li>Коррекция 4000р</li>
                                <li>Обновление 5000р</li>
                                <li>Межресничка основная 5000р</li>
                                <li>Коррекция 3000р</li>
                                <li>Обновление 4000р</li>
                                <li>Волоски: Основная 5000р</li>
                                <li>Волоски: Коррекция 3000р</li>
                            </ul>
                            {/* <a href="#">Записаться</a> */}
                        </div>
                        <img className="imageMasters" src={masterIrina} />
                    </motion.div>

                    <motion.div custom={2} variants={textAnimationRight} className="OurMasters__card-Master">
                        <div className="OurMasters__card-Masters-content">
                            <h2>Администратор: Анастасия</h2>
                        </div>
                        <img className="imageMasters" src={masterNasty} />
                    </motion.div>
                </div>

                <div className="lvl2">
                    <motion.div custom={3} variants={textAnimationLeft} className="OurMasters__card-Master">
                        <div className="OurMasters__card-Masters-content">
                            <h2>Топ-мастер: Анна</h2>
                            <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
                            <ul>
                                <li>Основная 4000р</li>
                                <li>Коррекция 2000р</li>
                                <li>Обновление 4000р</li>
                            </ul>
                        </div>

                        <img className="imageMasters" src={masterAnna} />
                    </motion.div>

                    <motion.div custom={3} variants={textAnimationRight} className="OurMasters__card-Master">
                        <div className="OurMasters__card-Masters-content">
                            <h2>Стефания</h2>
                            <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
                            <ul>
                                <li>Основная 4000р</li>
                                <li>Коррекция 2000р</li>
                                <li>Обновление 4000р</li>
                                <li>Удаление некачественного татуажа лазером брови-1500р</li>
                                <li>Лазером веки-2000р</li>
                                <li>Ремувер брови/губы/веки - 2500р</li>
                                <li>Удаление тату от 500р</li>
                            </ul>
                        </div>
                        <img className="imageMasters" src={masterStefania} />
                    </motion.div>
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} className="lvl3">
                    <motion.div custom={1} variants={textAnimationDown} className="OurMasters__card-Master ">
                        <div className="OurMasters__card-Masters-content">
                            <div className="read-next">
                                <h2>Мастер: Лилия</h2>
                                <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
                                <ul>
                                    <li>Основная 4000р</li>
                                    <li>Коррекция 2000р</li>
                                    <li>Обновление 4000р</li>
                                    <li>Удаление некачественного татуажа лазером брови-1500р</li>
                                    <li>Лазером веки-2000р</li>
                                    <li>Ремувер брови/губы/веки - 2500р</li>
                                </ul>
                            </div>

                            <div>
                                {/* <div {...getCollapseProps()}> */}
                                <ul {...getCollapseProps()}>
                                    <li>Удаление тату от 500р</li>
                                    <li>Окрашивание ресниц - 200р</li>
                                    <li>Окрашивание бровей - 200р</li>
                                    <li>Оформление + окрашивание бровей краской - 500р </li>
                                    <li>Оформление + окрашивание бровей хной - 700р</li>
                                    <li>Ламинирование бровей - 1200р</li>
                                    <li>Ламинирование ресниц - 1200р </li>
                                    <li>КОМПЛЕКС: Ламинирование + оформление + окрашивание бровей краской - 1500р </li>
                                    <li>КОМПЛЕКС: Ламинирование + оформление + окрашивание бровей хной - 1700р </li>
                                    <li>Ламинирование ресниц + Ламинирование бровей - 2000р</li>
                                </ul>
                                {/* </div> */}
                                <button
                                    className="btn-read-next"
                                    {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                    })}
                                >
                                    {isExpanded ? 'Свернуть' : 'Читать далее...'}
                                </button>
                            </div>
                        </div>
                        <img className="imageMasters" src={masterLilia} />
                    </motion.div>
                </motion.div>
            </div>

            <div>
                <a href="https://n421875.yclients.com/" className="container__price">
                    <p>Записаться</p>
                </a>
            </div>
        </motion.div>
    )
}

export default OurMasters
