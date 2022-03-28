import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import MapChartFireSizeByState from "../components/MapChartFireSizeByState";

function FiresizePage() {
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

  return (
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
  );
}

export default FiresizePage;
