import React from 'react'
import {motion} from 'framer-motion'

import Card from './StudentsCard/Card'
import {properties} from './constants/data'


const Students = () => {
    return (
        <div className="Students-container">
            <div className="Result-Student">
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className="Result-heading">
                    <h2>РЕЗУЛЬТАТЫ УЧЕНИЦ</h2>
                    <span></span>
                </motion.div>

                <div className="Students">
                    <div className="Students-properties">
                        {properties.map((item) => (
                            <Card data={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students