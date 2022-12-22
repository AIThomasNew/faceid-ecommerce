import React from 'react'
import '../../Study.css'

import Card from './LinkOffline/Card'
import {properties} from './constants/data'

const LinkOffline = () => {
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

export default LinkOffline
