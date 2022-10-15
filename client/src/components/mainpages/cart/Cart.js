import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'


function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()
    },[cart])

    if (cart.length === 0) return <h2 style={{textAlign: 'center', fontSize: '5rem'}}>Cart Empty</h2>

    return (
        <div>
            {cart.map((product) => (
                <div className="detail cart" key={product._id}>
                    <img src={product.images.url} alt="" />

                    <div className="box-detail">
                        <h2>{product.title}</h2>

                        <h3>{product.price * product.quantity} руб.</h3>
                        <p>{product.description}</p>
                        <p>{product.content}</p>

                        <div className="amount">
                            <button> - </button>
                            <span>{product.quantity}</span>
                            <button> + </button>
                        </div>

                        <div className="delete">X</div>
                    </div>
                </div>
            ))}

            <div className="total">
                <h3>Итого: {total} руб.</h3>
                <Link to="#!">Payment</Link>
            </div>
        </div>
    )
}

export default Cart
