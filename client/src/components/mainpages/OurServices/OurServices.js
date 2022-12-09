import React from 'react'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
import './OurServices.css'

// Фото
import voloski from './img/voloski.jpg'
import gub from './img/gub.jpg'
import strelochka from './img/strelochka.jpg'
import mejresnichka from './img/mejresnichka.jpg'
import classicstrelka from './img/classicstrelka.jpg'
import pudrnapilenie from './img/pudrnapilenie.jpg'
import laminirovanieresnic from './img/laminirovanieresnic.jpg'
import deletepm from './img/deletepm.jpg'
// import 'assets/faceid.png'
import faceidlogo from '../../../assets/faceid.png'

// Framer Motion
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

// Поехал компонент
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
                        <img className="imageService" src={voloski} />
                    </div>
                    <div className="content">
                        <h2>Волоски</h2>
                        <p>
                            Перманентный макияж бровей в технике "Волоски". Данная техника поможет придать густоту
                            редким бровям, выровнять асимметрию, замаскировать мелкие недостатки. Волосковый татуаж
                            бровей состоит в прорисовывании волосков, повторяющих рост и цвет натуральных бровей.
                            Волоски имеют разную длину и направление, переплетаются друг с другом, создавая абсолютно
                            натуральный вид. Даже при ближайшем рассмотрении такие бровки трудно отличить от настоящих.
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="icon icon-3">
                        <img className="imageService" src={gub} />
                    </div>
                    <div className="content">
                        <h2>Перманентный макияж губ</h2>
                        <p>
                            С помощью перманентного макияжа губ можно вернуть утраченный природный контур и сделать губы
                            более собоазнительными
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="icon icon-2">
                        <img className="imageService" src={strelochka} />
                    </div>
                    <div className="content">
                        <h2>Cтрелочка с растушевкой </h2>
                        <p>
                            С помощью перманентного макияжа стрелочки с растушевкой можно придать глазам
                            выразительности.
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="icon icon-4">
                        <img className="imageService" src={mejresnichka} />
                    </div>
                    <div className="content">
                        <h2>Перманентный макияж межресничка</h2>
                        <p>
                            Выполняется непосредственно в зоне роста ресниц. Зрительно создается эффект густых черных
                            ресниц.
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="icon icon-5">
                        <img className="imageService" src={classicstrelka} />
                    </div>
                    <div className="content">
                        <h2>Классическая стрелка</h2>
                        <p>
                            Правильный наклон, длина и толщина линии стрелки позволит скорректировать форму глаз,
                            сделать взгляд распахнутым и выразительным. А пигмент в межресничном пространстве визуально
                            сделает ресницы пышнее и насыщеннее.
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="icon icon-6">
                        <img className="imageService" src={pudrnapilenie} />
                    </div>
                    <div className="content">
                        <h2>Пудровое напыление</h2>
                        <p>
                            Перманентный макияж бровей в технике “пудровое напыление”. Данная техника позволит придать
                            Вашим бровям нужный объем и густоту, замаскировать недостатки в виде шрамов и асимметрии.
                            Пигмент вводится в верхние слои кожи, создавая дымчатый эффект. Пудровые брови подходят как
                            молоденьким девушкам, так и женщинам в возрасте.
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="icon icon-6">
                        <img className="imageService" src={laminirovanieresnic} />
                    </div>
                    <div className="content">
                        <h2>Ламинирование ресниц</h2>
                        <p>
                            Данная процедура придает красивый изгиб натуральным ресницам, увлажняет, насыщает их
                            пигментом. время ламинирования происходит питание ресниц полезными микроэлементами,
                            витаминами, за счёт чего они выглядят более ухоженными, длинными и объемными. Процедура
                            рекомендована как для здоровых ресниц, так и для тонких и слабых по своей природе волосков.
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="icon icon-6">
                        <img className="imageService" src={deletepm} />
                    </div>
                    <div className="content">
                        <h2>Удаление</h2>
                        <p>
                            Удаление нежелательного перманентного макияжа. Лазер — это лучи особого света, которые
                            способны проникать глубоко под кожу и разрушать красящий пигмент путем его нагревания. При
                            правильном использовании отсутствует травматизация кожи.
                        </p>
                    </div>
                </div>

                <div className="container__services-box">
                    <div className="content-logo">
                        <img src={faceidlogo} alt="footer_logo" />
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
