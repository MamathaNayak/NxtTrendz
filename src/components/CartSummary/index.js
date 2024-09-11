import React, { useState } from 'react'
import CartContext from '../../context/CartContext'
import ReactPopUp from '../ReactPopUp'
import './index.css'

const CartSummary = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const onCheckoutBtnClicked = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const { cartList } = value
        let total = 0
        cartList.forEach(eachCartItem => {
          total += eachCartItem.price * eachCartItem.quantity
        })

        return (
          <>
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total}
                /-
              </h1>
              <p className="total-items">{cartList.length} Items in cart</p>
              <button
                type="button"
                className="checkout-button"
                onClick={onCheckoutBtnClicked}
              >
                Checkout
              </button>
            </div>

           
            <ReactPopUp
              totalItems={cartList.length}
              totalPrice={total}
              isPopupOpen={isPopupOpen}
              closePopup={closePopup}
            />
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
