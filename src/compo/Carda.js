import { Card,Col,Row } from "react-bootstrap"
const Carda =() => {
    return (
        <>
        <h3 className="h3">Projets de référence</h3>
        <div className="card3">
            
            <div className="projet">
           <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="./2-2.png" />
            <Card.Body>
              <Card.Title>Batiment 6000</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    <div className="projet">
           <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="./10.jpg" />
            <Card.Body>
              <Card.Title>Villa Gammarth</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
 


  
        </div>
        </>
    )
}
export default Carda