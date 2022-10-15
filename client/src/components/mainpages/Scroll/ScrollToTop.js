import {useEffect, useState} from 'react'
import './ScrollToTop.css'
import {BsArrowUp} from 'react-icons/bs'
import {useWindowScroll} from 'react-use'

export const Scroll = () => {
    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisibility] = useState(false)

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }, [pageYOffset])

    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    if (!visible) {
        return false
    }

    return (
        <div className="scroll-to-top">
            <button className="scroll" onClick={scrollToTop}>
                <BsArrowUp className="i"></BsArrowUp>
            </button>
        </div>
    )
}

// export const Scroll = () => {
//   return (
//     <div className="scroll-to-top">
//       <button className="scroll">
//         <BsArrowUp className='i'></BsArrowUp>
//       </button>
//     </div>
//   );
// };
