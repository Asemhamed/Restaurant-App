import React from 'react'
import { Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const Cat = ({ filterByCat, allCaat }) => {
  const filterC = (cat) => {
    filterByCat(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center">
        <Zoom>
          {allCaat.map((i) => {
            return (
              <div key={Math.random()}>
                <button
                  onClick={() => {
                    filterC(i);
                  }}
                  className="btn-cat"
                >
                  {i}
                </button>
              </div>
            );
          })}
        </Zoom>
      </Col>
    </Row>
  );
};

export default Cat