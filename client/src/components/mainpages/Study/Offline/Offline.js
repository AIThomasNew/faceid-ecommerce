import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import Card from './OfflineCard/Card'
import {properties} from './constants/data'

function Offline() {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="Offline">
            <div className="properties">
                {properties.map((item) => (
                    <Card data={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Offline
