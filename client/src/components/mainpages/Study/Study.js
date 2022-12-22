import React from 'react'
import './Study.css'
import LinkOnline from './LinksStudies/LinkOnline/LinkOnline'
import LinkOffline from './LinksStudies/LinkOffline/LinkOffline'

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

// const textAnimationRight = {
//     hidden: {
//         x: 400,
//         opacity: 0,
//     },
//     visible: (custom) => ({
//         x: 0,
//         opacity: 1,
//         transition: {delay: custom * 0.2},
//     }),
// }

// const options = {
//     scale: 1.3,
//     speed: 200,
//     max: 25,
//     glare: true,
// }

// initial="hidden"
//             whileInView="visible"
//             viewport={{amount: 0.1, once: true}}
//             className="app__aboutus  section__padding"
//             id="about"

// custom={2} variants={textAnimationLeft}
// custom={2} variants={textAnimationRight}

const Study = () => {
    return (
        <div className="Study">
            <LinkOnline />
            <LinkOffline />
        </div>
    )
}

export default Study
