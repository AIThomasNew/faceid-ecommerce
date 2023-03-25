import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
import UserAPI from './api/UserAPI'
import ProductsAPI from './api/ProductsAPI'
import CategoriesAPI from './api/CategoriesAPI'


export const GlobalState = createContext()
export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
                setToken(res.data.accesstoken)
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000) // 1 неделя
            }
            refreshToken()
        }
    },[])
    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserAPI(token),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider> // обертка всего приложения
    )
}