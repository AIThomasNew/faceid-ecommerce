import React from 'react'
import BtnRender from './BtnRender'


function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <div className="product_img_box">
                <img src={product.images.url} alt="" />
            </div>

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <p>{product.description}</p>
                <div className='price_product'>
                    <span>{product.price} руб.</span>
                </div>
            </div>

            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem