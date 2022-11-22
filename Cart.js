import React from 'react'
import Cartmain from './Cartmain'
import './Cart.css'
import { Link } from 'react-router-dom'
export default function Cart({itemslist}) {
    
    
    return (
        <div>
            <div>
                <h1>
                    Cart page
                </h1>
                {
                    itemslist.map((el) => (<Cartmain  key  = {Math.random()*1000} el = {el}/>))
                }

                <div className='order-summary' >
                    <h3>
                        Order Summary
                    </h3>
                    {
                        itemslist.map((el)=>(<p key = {Math.random()*1000}>Product Price={el.id/10}/-</p>))
                    }
                    <div className='product-checkout'>
                        <Link to="/checkoutpage">
                        <button className="btn btn-primary btn-sm">Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
