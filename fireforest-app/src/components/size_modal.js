import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import MapChartFireSizeByState from "./MapChartFireSizeByState";

const SizeModal = (props) => {
  const [month, setMonth] = useState("1");

  let months = [];
  for (let i = 1; i < 13; i++) {
    months.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleClose = () => {
    props.onHandleClose();
  };


  return (
    <Modal show={props.show} onHide={props.onHandleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Average Wildfire Size in each month</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Row style={{ width: "500px" }}>
            <Col>
              <Form.Label>Month</Form.Label>
              <Form.Select defaultValue={month} onChange={handleMonthChange}>
                {months}
              </Form.Select>
            </Col>
          </Row>
          <MapChartFireSizeByState month={month} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SizeModal;
