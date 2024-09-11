import Popup from 'reactjs-popup'
import {useState} from 'react'
import './index.css'

const ReactPopUp = ({totalItems, totalPrice, isPopupOpen, closePopup}) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true)
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const handlePaymentChange = event => {
    const selectedMethod = event.target.value
    setPaymentMethod(selectedMethod)
    setIsConfirmDisabled(selectedMethod !== 'Cash on Delivery')
  }

  const handleConfirmOrder = () => {
    setOrderConfirmed(true)
  }

  return (
    <Popup
      open={isPopupOpen}
      modal
      closeOnDocumentClick
      onClose={closePopup}
      className="popup-overlay"
    >
      <div className="popup-content">
        {/* Display confirmation message if order is confirmed */}
        {orderConfirmed && (
          <div className="confirmation-message">
            Your order has been placed successfully!
          </div>
        )}

        {!orderConfirmed && (
          <>
            <h2>Payment Options</h2>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  value="Card"
                  disabled
                  onChange={handlePaymentChange}
                />
                Card
              </label>
              <label>
                <input
                  type="radio"
                  value="Net Banking"
                  disabled
                  onChange={handlePaymentChange}
                />
                Net Banking
              </label>
              <label>
                <input
                  type="radio"
                  value="UPI"
                  disabled
                  onChange={handlePaymentChange}
                />
                UPI
              </label>
              <label>
                <input
                  type="radio"
                  value="Wallet"
                  disabled
                  onChange={handlePaymentChange}
                />
                Wallet
              </label>
              <label>
                <input
                  type="radio"
                  value="Cash on Delivery"
                  onChange={handlePaymentChange}
                />
                Cash on Delivery
              </label>
            </div>

            <div className="order-summary">
              <p>Number of Items: {totalItems}</p>
              <p>Total Price: Rs {totalPrice}/-</p>
            </div>

            <button
              type="button"
              className="confirm-button"
              disabled={isConfirmDisabled}
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </>
        )}

        <button type="button" className="close-button" onClick={closePopup}>
          Close
        </button>
      </div>
    </Popup>
  )
}

export default ReactPopUp
