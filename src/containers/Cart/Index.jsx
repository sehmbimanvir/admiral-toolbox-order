import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import MyBag from './MyBag'
import data from '../../assets/data.json'
import PaymentPopup from './PaymentPopup'
import CartTotal from './CartTotal'

const Cart = () => {
  const [products, setProducts] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [showModal, setModal] = useState(false)


  const onChangePopup = () => {
    const newStatus = !showModal
    setModal(newStatus)
  }

  useEffect(() => {
    const sum = data.items.reduce((acc, item) => acc + item.price, 0)
    setProducts(data.items)
    setSubTotal(sum)
  }, [])

  return (
    <>
      <Row>
        <Col xs lg="8">
          <Row>
            <Col>
                <MyBag subTotal={subTotal} products={products} />
            </Col>
          </Row>
        </Col>

        <Col xs lg="4">
          <Row>
            <Col>
              <CartTotal subTotal={subTotal} onChangePopup={onChangePopup} />
            </Col>
          </Row>
        </Col>
      </Row>

      <PaymentPopup amount={subTotal} status={showModal} onChangeHandle={onChangePopup} />
    </>
  )
}

export default Cart