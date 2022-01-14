import { Button } from "react-bootstrap"
import Price from "../../components/UI/PriceFormatter/Index"

const CartTotal = ({
    subTotal,
    onChangePopup
}) => (
    <div className="checkout-details bg-white p-4">
        <div className="cart-title py-3">
            <h5 className="pb-3 text-uppercase border-bottom">Cart Total</h5>
        </div>
        <div className="cart-checkout-button mt-3 d-grid">
            <Button onClick={onChangePopup}>Checkout (<Price>{subTotal}</Price>)</Button>
        </div>
    </div>
)

export default CartTotal