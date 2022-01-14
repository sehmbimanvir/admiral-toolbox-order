import { Card } from "react-bootstrap"
import Price from "../../components/UI/PriceFormatter/Index"

const CartItem = ({
  title,
  thumbnail,
  installment,
  plan,
  price
}) => {
  return (
    <Card className="product-card d-flex flex-row border-0 border-bottom py-2">
      <Card.Img src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mb-2">Installment: <strong>{installment || 'Yealy'}</strong> | Plan: <strong>{plan || 'Default'}</strong></Card.Text>
        <Card.Text>Price: <strong><Price>{price}</Price></strong></Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CartItem