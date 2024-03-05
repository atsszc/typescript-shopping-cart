import {Col,Row} from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Store () {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={3} lg={1} className="g-4">
        {storeItems.map(item => (
            <Col key={item.id}><StoreItem {...item}/></Col>  
        ))}  
      </Row>  
    </>
  )
}