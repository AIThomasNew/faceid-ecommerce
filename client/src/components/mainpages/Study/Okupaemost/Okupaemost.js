import React from 'react'
import {motion} from 'framer-motion'




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




const Okupaemost = () => {


    return (


        <motion.div 
        viewport={{amount: 0.1, once: true}} 
        whileInView="visible" 
        initial="hidden">


            <motion.div 
            custom={2} 
            variants={textAnimationDown} 
            className="Okupaemost padding-class">


                <div 
                className="Okupaemost-container">


                    <h4>ОКУПАЕМОСТЬ КУРСА</h4>
                    <span></span>


                    <div 
                    className="Okupaemost-content">


                        <div>
                            <h5>Окупи свой базовый курс уже в первые месяцы работы cразу после обучения:</h5>

                            <ul>
                                <li>• стоимость процедуры – от 3000 </li>
                                <li>• 1 процедура (клиент) в день </li>
                                <li>• В среднем 3 часа работы в день </li>
                                <li>• 23 рабочих дня в месяц</li>
                            </ul>

                            <h5>ТВОЙ ДОХОД В МЕСЯЦ: от 69 000р.</h5>
                        </div>


                        <div>
                            <h5>Через 4-5 месяца работы:</h5>
                            <ul>
                                <li>• стоимость процедуры – от 4000 </li>
                                <li>• 2 процедуры (клиента) в день </li>
                                <li>• В среднем 5-6 часов работы в день </li>
                                <li>• 23 рабочих дня в месяц </li>
                            </ul>
                            <h5>ТВОЙ ДОХОД В МЕСЯЦ: от 184 000р.</h5>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Okupaemost
