import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'

import {Link} from 'react-router-dom'
import axios from 'axios'


function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    // const [menu, setMenu] = useState(false)


    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/"
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Создать Товар</Link></li>
                <li><Link to="/category">Категории</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">История</Link></li>
                <li><Link to="/" onClick={logoutUser}>Выйти</Link></li>
            </>
        )
    }



    return (
        <header>
            {/* MENU BURGER */}
            <div className="menu">
                <img src={Menu} alt="" width="30" />
            </div>

            
            {/* LOGO */}
            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Админ' : 'FACE ID'}</Link>
                </h1>
            </div>


            {/* NAV */}
            <ul>
                <li>
                    <Link to="/">{isAdmin ? 'Товары' : 'Магазин'}</Link>
                </li>

                {isAdmin && adminRouter()}
                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Вход ✥ Регистрация</Link></li>
                }

                <li>
                    <img src={Close} alt="" width="30" className='menu' />
                </li>
            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    {/* <span>0</span> */}
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
        </header>
    )
}

export default Header
