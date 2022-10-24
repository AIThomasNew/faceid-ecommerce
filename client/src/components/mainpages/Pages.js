import React, {useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Scroll} from '../mainpages/Scroll/ScrollToTop'

import Home from './Home/Home'
import Study from './Study/Study'
import OurServices from './OurServices/OurServices'
import OurMasters from './OurMasters/OurMasters'
import Products from './Products/Products'
import DetailProduct from './DetailProduct/DetailProduct'
import Cart from './Cart/Cart'
import Categories from './Categories/Categories'
import CreateProduct from './CreateProduct/CreateProduct'
import Login from './Auth/Login'
import Register from './Auth/Register'
import NotFound from './utils/not_found/NotFound'
// import OrderHistory from './History/OrderHistory'
// import OrderDetails from './History/OrderDetails'


import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

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

                <Route path="/category" exact element={isAdmin ? <Categories /> : <NotFound/>} />
                <Route path="/create_product" exact element={isAdmin ? <CreateProduct /> : <NotFound/>} />
                <Route path="/edit_product/:id" exact element={isAdmin ? <CreateProduct /> : <NotFound/>} />

                {/* <Route path="/history" exact component={isLogged ? <OrderHistory /> : <NotFound />} /> */}
                {/* <Route path="/history/:id" exact component={isLogged ? <OrderDetails /> : <NotFound />} /> */}

                <Route path="/login" exact element={isLogged ? <NotFound /> : <Login />} />
                <Route path="/register" exact element={isLogged ? <NotFound /> : <Register />} />

                <Route path="*" exact element={<NotFound />} />
            </Routes>
            <Scroll showBelow={250} />
        </div>
    )
}

export default Pages
