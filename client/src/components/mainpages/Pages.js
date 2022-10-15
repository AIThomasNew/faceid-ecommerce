import React, {useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Scroll} from '../mainpages/Scroll/ScrollToTop'
import {GlobalState} from '../../GlobalState'

import Home from './Home/Home'
import Study from './Study/Study'
import OurServices from './OurServices/OurServices'
import OurMasters from './OurMasters/OurMasters'
import Login from './auth/Login'
import Register from './auth/Register'
import NotFound from './utils/not_found/NotFound'
import Products from './Products/Products'
import DetailProduct from './DetailProduct/DetailProduct'
import Cart from './Cart/Cart'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged

    return (
        <div>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/study" element={<Study />} />
                <Route path="/services" element={<OurServices />} />
                <Route path="/price" element={<OurMasters />} />
                <Route path="/shop" exact element={<Products />} />
                <Route path="/shop/detail/:id" exact element={<DetailProduct />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/login" exact element={isLogged ? <NotFound /> : <Login />} />
                <Route path="/register" exact element={isLogged ? <NotFound /> : <Register />} />
                <Route path="*" exact element={<NotFound />} />
            </Routes>
            <Scroll showBelow={250} />
        </div>
    )
}

export default Pages
