import React from 'react'
import images from './index'
import {motion} from 'framer-motion'
import './Header.css'
const textAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}


const Header = () => (
    <motion.div initial="hidden" whileInView="visible" className="app__header app__wrapper section__padding" id="home">




        <div className="app__wrapper_img">
            <img src={images.headerIrina} alt="header_img" />
        </div>



        <div className="app__wrapper_h1">
            <motion.h1 custom={1} variants={textAnimation} className="LOGO_TEXT">
                <span>FACE</span>
                <span> ID</span>
            </motion.h1>
        </div>



        <div className="app__wrapper_h2">
            <motion.h2 custom={2} variants={textAnimation} className="PM_TEXT pm-text1">
                Центр перманентного макияжа
            </motion.h2>
            <motion.h2 custom={3} variants={textAnimation} className="PM_TEXT pm-text2">
                Ирины Абашевой
            </motion.h2>
        </div>




    </motion.div>
)
export default Header
// <div>
// <h2 className="PM_TEXT pm-text2">Акции и Спецпредложения</h2>
// </div>