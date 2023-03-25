import React from 'react'
import Virtual from '../../Virtual/Virtual'
import {ImCheckmark} from 'react-icons/im'
import {motion} from 'framer-motion'

// const textAnimationLeft = {
//     hidden: {
//         x: -400,
//         opacity: 0,
//     },
//     visible: (custom) => ({
//         x: 0,
//         opacity: 1,
//         transition: {delay: custom * 0.2},
//     }),
// }

const ResultLearning = () => {
    return (
        <motion.div initial="visible" whileInView="hidden">
            <div className="Result-Learning padding-class">
                <div className="Result-container">
                    <motion.div
                        className="Result-content"
                        initial='hidden'
                        whileInView='visible'
                        custom={2}
                        // variants={textAnimationLeft}
                    >
                        <h2>РЕЗУЛЬТАТЫ ОБУЧЕНИЯ</h2>
                        <span></span>
                        <ul>
                            <li>
                                <div>
                                    <ImCheckmark />
                                </div>
                                Вы освоите одну из самых востребованных и высокооплачиваемых профессий в бьюти-сфере.
                            </li>
                            <li>
                                <div>
                                    <ImCheckmark />
                                </div>
                                Научитесь видеть и подчеркивать индивидуальную красоту каждого клиента.
                            </li>
                            <li>
                                <div>
                                    <ImCheckmark />
                                </div>
                                Освоите на практике создание эскизов и подбор пигментов.
                            </li>
                            <li>
                                <div>
                                    <ImCheckmark />
                                </div>
                                Научитесь выполнять перманентный макияж бровей, губ и межреснички в самых популярных
                                техниках.
                            </li>
                            <li>
                                <div>
                                    <ImCheckmark />
                                </div>
                                Приобретете уверенность в своих действиях при работе с клиентом.
                            </li>
                            <li>
                                <div>
                                    <ImCheckmark />
                                </div>
                                Сразу после обучения сможете приступить к работе: для этого у вас будут все знания и
                                навыки + стартовый набор.
                            </li>
                            <li>
                                <div>
                                    <ImCheckmark />
                                </div>
                                Получите доступ к бессрочному чату поддержки учеников.
                            </li>
                        </ul>
                    </motion.div>
                    <div className="Result-virtual">
                        <Virtual />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ResultLearning
