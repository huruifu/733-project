import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

import "./forestfireReasonPage.css";

import MapChartByState from "../../components/MapChartByState";
import FireReasonDemo from "../../components/fireReasonDemo";

const images = {
  fire_reason: "/images/wildfire_reason/fire_reason.png",
  fire_reason_group: "/images/wildfire_reason/fire_reason_group.jpeg",
  correlation_plot_one: "/images/wildfire_reason/correlation_plot_one.png",
  correlation_plot_two: "/images/wildfire_reason/correlation_plot_two.png",
  feature_importance: "/images/wildfire_reason/feature_importance.jpeg",
  info: "/images/wildfire_reason/info.jpeg",
};

function ForestfireReasonPage() {
  const [month, setMonth] = useState("1");
  const [reason, setReason] = useState("Miscellaneous");

  let months = [];
  for (let i = 1; i < 13; i++) {
    months.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  let reasons = [
    "Miscellaneous",
    "Debris Burning",
    "Arson",
    "Campfire",
    "Equipment Use",
    "Smoking",
    "Children",
    "Lightning",
    "Powerline",
    "Railroad",
    "Structure",
    "Fireworks",
  ];
  let reason_rows = [];
  for (let i = 0; i < reasons.length; i++) {
    reason_rows.push(
      <option key={i} value={reasons[i]}>
        {reasons[i]}
      </option>
    );
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };
  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className="clickable">
                Causes of fires
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="clickable">
                Wild fire reasons heat map
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="clickable">
                Wild fire reason predict plot
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className="clickable">
                Prediction Demo (grouped reasons)
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" className="clickable">
                Prediction Demo (detailed reasons)
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <img
                className="d-block img-format"
                src={images.fire_reason}
                alt="fire reason plot"
                width="50"
              />
              <img
                className="d-block img-format"
                src={images.fire_reason_group}
                alt="fire reason plot"
                width="50"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div>
                <Row style={{ width: "500px" }}>
                  <Col>
                    <Form.Label>Month</Form.Label>
                    <Form.Select
                      defaultValue={month}
                      onChange={handleMonthChange}
                    >
                      {months}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>Wild Fire Reason</Form.Label>
                    <Form.Select
                      defaultValue={reason}
                      onChange={handleReasonChange}
                    >
                      {reason_rows}
                    </Form.Select>
                  </Col>
                </Row>
                <MapChartByState month={month} reason={reason} />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Row>
                <Col>
                  <img
                    className="d-block img-format"
                    src={images.correlation_plot_one}
                    alt="correlation plot"
                    width="50"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block img-format"
                    src={images.correlation_plot_two}
                    alt="correlation plot"
                    width="50"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    className="d-block img-format"
                    src={images.feature_importance}
                    alt="feature importance"
                    width="50"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block img-format"
                    src={images.info}
                    alt="other information plot"
                    width="50"
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <FireReasonDemo isGrouped={true}/>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <FireReasonDemo isGrouped={false}/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ForestfireReasonPage;
