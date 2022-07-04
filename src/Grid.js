import React from "react";
import {Container,Row,Col,Card} from 'react-bootstrap';

function MyGrid(){
    return <Container>
  <Row>
    <Col>
    <div ClassName="card card-v h-50">
      <div className="card-body">This is some text within a card body.</div>
    </div>
</Col>
    <Col xs={{ order: 12 }}>
      <Card className="text-center card-r">
  {/* <Card.Header>Featured</Card.Header> */}
  <Card.Img variant="top" src="https://wallpapercave.com/wp/wp1904057.png" />
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
  {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
</Card></Col>
    <Col></Col>
  </Row>
</Container>

};


export default MyGrid ;


