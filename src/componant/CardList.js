import React from 'react'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Zoom from "react-reveal/Zoom";


const CardList = ({itemData}) => {
  return (
    <Row>
      <Zoom>
        {itemData.map((item) => (
          <Col key={item.id} sm="12" className="mb-3 ">
            <Card
              className="d-flex flex-row"
              style={{ backgroundColor: "white" }}
            >
              <Card.Img
                variant="top"
                src={item.imageUrl}
                className="img-item"
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <div className="item-title ">{item.title}</div>
                  <div className="item-price">{item.price}</div>
                </Card.Title>
                <Card.Text className="mt-3">
                  <div className="item-discription">{item.discription}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Zoom>
    </Row>
  );
}

export default CardList