import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() => {
        if (params.id) {

            products.forEach((product) => {
                if (product._id === params.id) setDetailProduct(product)
            })
        }
    }, [params.id, products])

    if (detailProduct.length === 0) return null

    return (
        <>
            <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                    </div>
                    <h6>#id: {detailProduct.product_id}</h6>
                    <p>{detailProduct.description}</p>
                    <p>{detailProduct.content}</p>
                    {/* <p>Продано: {detailProduct.sold}</p> */}
                    <span>{detailProduct.price} руб.</span>
                    <Link to="/cart" className="cart" 
                    onClick={() => addCart(detailProduct)}>
                        Купить Сейчас
                    </Link>
                </div>
            </div>
        


            <div className='shop-wrapper'>
                <h2>Сопутствующие товары</h2>
                <div className='products'>
                    {
                        products.map(product => {
                            return product.category === detailProduct.category
                            ?
                            <ProductItem key={product._id} product={product} /> 
                            :
                            null
                        })
                    }
                </div>
            </div>
        
        </>
    )
}

export default DetailProduct
