import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}


export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <Card style={{ width: "1000px", height: "600px" }}>
      <Card.Img variant='top' src={imgUrl} height="400px" style={{ objectFit: "cover", width: "1000px" }} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-1'>{name}</span>
          <span className='ms-2 text-muted fs-2'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button style={{ height: '100px', width: "980px" }} onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
          ) : (<div className='d-flex align-items-center flex-column' style={{ gap: "0.5rem" }}>
            <div className='d-flex align-items-center justify-content-center' style={{ gap: "1rem" }}>
              <Button className='fs-4' onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className='fs-2'>{quantity}</span>
              </div>
              <Button className='fs-4' onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button variant='danger' size='lg' onClick={() => removeFromCart(id)}>Remove</Button>
          </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}