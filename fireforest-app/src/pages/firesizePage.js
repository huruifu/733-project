import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./firesizePage.css";
import SizeModal from "../components/size_modal";

const images = {
  wildfire_size_locations: "/images/wildfire_size/wildfire_size_locations.png",
};

function FiresizePage() {
  const [sizeModalShow, setSizeModalShow] = useState(false);

  const handleSizeModalClose = () => setSizeModalShow(false);
  const handleSizeModalShow = () => setSizeModalShow(true);

  return (
    <Card className="text-center">
      <Card.Body>
        <Row>
          <Col>
            <img
              className="d-block img-format"
              src={images.wildfire_size_locations}
              alt="correlation plot"
              // width="40"
            />
          </Col>
          <Col>
            <img
              className="d-block img-format"
              src={images.wildfire_size_locations}
              alt="correlation plot"
              width="50"
            />
          </Col>
        </Row>
        <Button variant="primary" onClick={handleSizeModalShow}>Fire Size Heat Map</Button>
        <SizeModal show={sizeModalShow} onHandleClose={handleSizeModalClose}/>
      </Card.Body>
    </Card>
  );
}

export default FiresizePage;
