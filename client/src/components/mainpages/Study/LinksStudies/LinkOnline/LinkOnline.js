import React from 'react'
import '../../Study.css'

import Card from './LinkOnline/Card'
import {properties} from './constants/data'

const LinkOnline = () => {
    return (
        <div 
        className="Study-properties"
        >
            {properties.map((item) => (
                <Card data={item} key={item.id} />
            ))}
        </div>
    )
}

export default LinkOnline
