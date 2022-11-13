import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'



const Info = () => {
        const {pathname} = useLocation()
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [pathname])

    //     var pathToFile = "....";
    //          downloadFile(file) {
    //     location.href = pathToFile + file;
    // }

    return (
        <div>
            info
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
        </div>
    )
}



export default Info
