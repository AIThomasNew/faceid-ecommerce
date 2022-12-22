import React, {useState, useEffect} from 'react'
import useCollapse from 'react-collapsed'
import {useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import {masterIrina, masterAnna, masterLilia, masterNasty, masterStefania} from './index'
import './OurMasters.css'



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
                                <li>Основная <span>7000р</span></li>
                                <li>Коррекция <span>4000р</span></li>
                                <li>Обновление <span>5000р</span></li>
                                <li>Межресничка основная <span>5000р</span></li>
                                <li>Коррекция <span>3000р</span></li>
                                <li>Обновление <span>4000р</span></li>
                                <li>Волоски: Основная <span>5000р</span></li>
                                <li>Волоски: Коррекция <span>3000р</span></li>
                            </ul>
                        </div>
                        <img className="imageMasters" src={masterIrina} alt='' />
                    </motion.div>

                    <motion.div custom={2} variants={textAnimationRight} className="OurMasters__card-Master">
                        <div className="OurMasters__card-Masters-content">
                            <h2>Администратор: Анастасия</h2>
                        </div>
                        <img className="imageMasters" src={masterNasty}  alt='' />
                    </motion.div>
                </div>

                <div className="lvl2">
                    <motion.div custom={3} variants={textAnimationLeft} className="OurMasters__card-Master">
                        <div className="OurMasters__card-Masters-content">
                            <h2>Топ-мастер: Анна</h2>
                            <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
                            <ul>
                                <li>Основная <span>4000р</span></li>
                                <li>Коррекция <span>2000р</span></li>
                                <li>Обновление <span>4000р</span></li>
                            </ul>
                        </div>

                        <img className="imageMasters" src={masterAnna} alt=''  />
                    </motion.div>

                    <motion.div custom={3} variants={textAnimationRight} className="OurMasters__card-Master">
                        <div className="OurMasters__card-Masters-content">
                            <h2>Стефания</h2>
                            <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
                            <ul>
                                <li>Основная <span>4000р</span></li>
                                <li>Коррекция <span>2000р</span></li>
                                <li>Обновление <span>4000р</span></li>
                                <li>Удаление некачественного татуажа лазером брови - <span>1500р</span></li>
                                <li>Лазером веки - <span>2000р</span></li>
                                <li>Ремувер брови/губы/веки - <span>2500р</span></li>
                                <li>Удаление тату от <span>500р</span></li>
                            </ul>
                        </div>
                        <img className="imageMasters" src={masterStefania} alt=''  />
                    </motion.div>
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} className="lvl3">
                    <motion.div custom={1} variants={textAnimationDown} className="OurMasters__card-Master ">
                        <div className="OurMasters__card-Masters-content">
                            <div className="read-next">
                                <h2>Мастер: Лилия</h2>
                                <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
                                <ul>
                                    <li>Основная <span>4000р</span></li>
                                    <li>Коррекция <span>2000р</span></li>
                                    <li>Обновление <span>4000р</span></li>
                                    <li>Удаление некачественного татуажа лазером брови - <span>1500р</span></li>
                                    <li>Лазером веки - <span>2000р</span></li>
                                    <li>Ремувер брови/губы/веки - <span>2500р</span></li>
                                </ul>
                            </div>

                            <div>
                                {/* <div {...getCollapseProps()}> */}
                                <ul {...getCollapseProps()}>
                                    <li>Удаление тату от <span>500р</span></li>
                                    <li>Окрашивание ресниц - <span>200р</span></li>
                                    <li>Окрашивание бровей - <span>200р</span></li>
                                    <li>Оформление + окрашивание бровей краской - <span>500р</span> </li>
                                    <li>Оформление + окрашивание бровей хной - <span>700р</span></li>
                                    <li>Ламинирование бровей - <span>1200р</span></li>
                                    <li>Ламинирование ресниц - <span>1200р</span> </li>
                                    <li>КОМПЛЕКС: Ламинирование + оформление + окрашивание бровей краской - <span>1500р</span> </li>
                                    <li>КОМПЛЕКС: Ламинирование + оформление + окрашивание бровей хной - <span>1700р</span> </li>
                                    <li>Ламинирование ресниц + Ламинирование бровей - <span>2000р</span></li>
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
                        <img className="imageMasters" src={masterLilia}  alt='' />
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
