import React, {useContext} from 'react'
import {Scroll} from '../mainpages/Scroll/ScrollToTop'
import {Routes, Route} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'

import Home from './Home/Home' // адаптивен
import Study from './Study/Study' // адаптивен
import Online from './Study/Online' 
import Offline from './Study/Offline/Offline' 
import OurMasters from './OurMasters/OurMasters'
import OurServices from './OurServices/OurServices'
import Info from './Info/Info'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'
import NotFound from './utils/not_found/NotFound'
import Products from './products/Products' // адаптивен
import DetailProduct from './detailProduct/DetailProduct' // адаптивен
import Categories from './Categories/Categories' // адаптивен
import CreateProduct from './CreateProduct/CreateProduct' // адаптивен
import Cart from './cart/Cart' // провести рефакторинг
import Login from './auth/Login'
import Register from './auth/Register'



function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/study" element={<Study />} />
                <Route path="/online" element={<Online />} />
                <Route path="/offline" element={<Offline />} />
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

                <Route path="/privacy-policy" exact element={<PrivacyPolicy/> } />
                <Route path="/info" exact element={<Info/> } />

                <Route path="*" exact element={<NotFound />} />
            </Routes>
            <Scroll showBelow={250} />
        </div>
    )
}
export default Pages