import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'


function BtnRender({product}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy" to="#!" 
                    // onClick={() => deleteProduct(product._id, product.images.public_id)}
                    >
                        Удалить
                    </Link>
                    <Link id="btn_view" to={`/shop/edit_product/${product._id}`}>
                        Изменить
                    </Link>
                </>
                : 
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() => addCart(product)}>
                        Купить
                    </Link>
                    <Link id="btn_view" to={`/shop/detail/${product._id}`}>
                        Смотреть
                    </Link>
                </>
            }                
        </div>
    )
}

export default BtnRender
