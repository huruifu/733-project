import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MapChart from "../components/MapChart";

function ForestfireHeatmapPage() {
  const [month, setMonth] = useState("1");
  const [feature, setFeature] = useState("population_density");

  let months = [];
  for (let i = 1; i < 13; i++) {
    months.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  let feature_names = [
    "population_density",
    "avg_temp",
    "wind speed",
    "AWND",
    "PRCP",
  ];
  let feature_rows = [];
  for (let i = 0; i < feature_names.length; i++) {
    feature_rows.push(
      <option key={i} value={feature_names[i]}>
        {feature_names[i]}
      </option>
    );
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };
  const handleFeatureChange = (e) => {
    setFeature(e.target.value);
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
        <Col>
          <Form.Label>Feature</Form.Label>
          <Form.Select defaultValue={feature} onChange={handleFeatureChange}>
            {feature_rows}
          </Form.Select>
        </Col>
      </Row>

      <MapChart month={month} feature={feature}/>
      {/* <select onChange={handleMonthChange}
                name="selectList" id="selectMonth">
                {months}
            </select>
            <select onChange={handleFeatureChange}
                name="selectList" id="selectFeature">
                {feature_rows}
            </select> */}
    </div>
  );
}

export default ForestfireHeatmapPage;
