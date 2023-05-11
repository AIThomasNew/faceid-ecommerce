import React, {useState, useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'
// import Cart from './icon/cart.svg'
import axios from 'axios'
import images from './index'
import './header.css'

const textAnimation = {
    hidden: {
        y: -300,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}


const Header = () => {
    // const state = useContext(GlobalState)
    // const [isLogged] = state.userAPI.isLogged
    // const [isAdmin] = state.userAPI.isAdmin
    // const [cart] = state.userAPI.cart
    const [toggleMenu, setToggleMenu] = useState(false)
    // const logoutUser = async () =>{
    //     await axios.get('/user/logout')
    //     localStorage.removeItem('firstLogin')
    //     window.location.href = "/"
    // }
    // const adminRouter = () =>{
    //     return(
    //         <>
    //             <li><Link to="/create_product" className="p__opensans-admin">СОЗДАТЬ ТОВАР</Link></li>
    //             <li><Link to="/category" className="p__opensans-admin">КАТЕГОРИИ</Link></li>
    //         </>
    //     )
    // }
    // const loggedRouter = () =>{
    //     return(
    //         <>
    //             <li><Link to="/history" className="p__opensans-admin">ИСТОРИЯ</Link></li>
    //             <li><Link to="/" className="p__opensans" onClick={logoutUser}>ВЫЙТИ</Link></li>
    //         </>
    //     )
    // }


    return (
        <motion.nav initial="hidden" whileInView="visible" className="app__navbar">

            <motion.div variants={textAnimation} className="app__navbar-logo">
                <img src={images.faceid} alt="app__logo" />
                {/* {isAdmin ? <h3 style={{color: "#fff"}}>Админ</h3> : <img src={images.faceid} alt="app__logo" />} */}
            </motion.div>


            <motion.div variants={textAnimation} className="app__navbar-links">
                <Link to="/" className="p__opensans">ГЛАВНАЯ</Link>
                <Link to="/study" className="p__opensans">ОБУЧЕНИЕ</Link>
                <Link to="/services" className="p__opensans">УСЛУГИ</Link>
                {/* <Link to="/shop" className="p__opensans">{isAdmin ? 'ТОВАРЫ' : 'МАГАЗИН'}</Link> */}
            </motion.div>


            {/* <motion.div variants={textAnimation} className="app__navbar-login"> */}
                {/* {isAdmin && adminRouter()} */}
                {/* {
                    isLogged ? loggedRouter() 
                    : 
                    // <li><Link to="/login"  className="p__opensans">ВХОД ✥ РЕГИСТРАЦИЯ</Link></li>
                    <li><Link to="/login" className="p__opensans">ВХОД / РЕГИСТРАЦИЯ</Link></li>
                } */}
                {/* <li>
                    <img src={Close} alt="" width="30" className='menu' />
                </li> */}
            {/* </motion.div> */}

            
            {/* {
                isAdmin ? '' 
                :
                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            } */}


            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <VscChromeClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />

                        <div className="app__navbar-smallscreen_links">
                            <Link to="/" className="li__opensans" onClick={() => setToggleMenu(false)}>
                                Главная
                            </Link>
                            <Link to="/study" className="li__opensans" onClick={() => setToggleMenu(false)}>
                                Обучение
                            </Link>
                            <Link to="/services" className="li__opensans" onClick={() => setToggleMenu(false)}>
                                Услуги
                            </Link>
                            {/* <Link to="/shop" className="li__opensans" onClick={() => setToggleMenu(false)}>
                                Магазин
                            </Link> */}
                        </div>
                    </div>
                )}
            </div>
        </motion.nav>
    )
}

export default Header
