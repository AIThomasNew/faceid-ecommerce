import React from 'react'
import ReactCompareImage from 'react-compare-img'
import Before from './img/Before.png'
import After from './img/After.png'
import './Virtual.css'


const Virtual = () => {
    return (
        <div>
            <div className="right">
                <div className="wrapper">
                    <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
            </div>
        </div>
    )
}

export default Virtual
