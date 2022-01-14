import { Modal, Button } from "react-bootstrap";
import Price from "../../components/UI/PriceFormatter/Index";

const PaymentPopup = ({
  amount,
  status,
  onChangeHandle
}) => (
  <Modal show={status} onHide={onChangeHandle}>
    <Modal.Header closeButton>
      <Modal.Title>Payment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="payment-popup-body text-center">
        <h1><Price>{amount}</Price></h1>
        <p className="text-success">Including Tax</p>

        <div className="cart-checkout-button mt-3 d-grid">
          <Button onClick={onChangeHandle}>Pay</Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
)

export default PaymentPopup