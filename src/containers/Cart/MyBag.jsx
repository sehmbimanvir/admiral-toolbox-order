import { memo } from "react";
import Price from "../../components/UI/PriceFormatter/Index";
import CartItem from "./CartItem";

const CartProducts = ({
  products,
  subTotal
}) => {
  return (
    <div className="checkout-details bg-white p-4">
      <div className="cart-title py-3">
        <h5 className="pb-3 text-uppercase border-bottom">My Bag</h5>
      </div>
      <div className="cart-product-list">
        {products.map(product => <CartItem key={product.id} {...product} />)}
      </div>
      <div className="sub-total text-right my-4">
        <h5>Sub-Total: <Price>{subTotal}</Price></h5>
      </div>
    </div>
  )
}

export default memo(CartProducts)