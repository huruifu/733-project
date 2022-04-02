// import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import "./firesizePage.css";
import SizeModal from "../../components/size_modal";
import SizePredictionDemo from "../../components/sizePredictionDemo";

const images = {
  model_comparison: "/images/wildfire_size/model_comparison.png",
  info1: "/images/wildfire_size/info1.png",
  info2: "/images/wildfire_size/info2.png",
  fire_size_class_1: "/images/wildfire_size/fire_size_class_1.png",
  fire_size_class_2: "/images/wildfire_size/fire_size_class_2.png",
  fire_size_class: "/images/wildfire_size/fire_size_class.png",
  geo: "/images/wildfire_size/geo.png",
  wildfire_size_locations: "/images/wildfire_size/wildfire_size_locations.png",
  correlation: "/images/wildfire_size/correlation.png",
  smote1: "/images/wildfire_size/smote1.png",
  smote2: "/images/wildfire_size/smote2.png",
  feature_score: "/images/wildfire_size/feature_score.png",
  tree: "/images/wildfire_size/tree.png",
};

function FiresizePage() {
  // const [sizeModalShow, setSizeModalShow] = useState(false);

  // const handleSizeModalClose = () => setSizeModalShow(false);
  // const handleSizeModalShow = () => setSizeModalShow(true);

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className="clickable-v3">
                Fire Size Class
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="clickable-v3">
                Fire Size Heat Map
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="clickable-v3">
                Feature Correlations
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className="clickable-v3">
                Smote Processing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" className="clickable-v3">
                Model Selection
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth" className="clickable-v3">
                Random Forest
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seventh" className="clickable-v3">
                Prediction Demo
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.fire_size_class}
                    alt="fire size plot"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.geo}
                    alt="geo plot"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.fire_size_class_1}
                    alt="fire size plot"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.fire_size_class_2}
                    alt="fire size plot"
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {/* <Button variant="primary" onClick={handleSizeModalShow}>
                Fire Size Heat Map
              </Button> */}
              {/* <SizeModal
                show={sizeModalShow}
                onHandleClose={handleSizeModalClose}
              /> */}
              <SizeModal />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Row>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.correlation}
                    alt="geo plot"
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Row>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.smote1}
                    alt="smote plot"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.info1}
                    alt="info plot"
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <Row>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.smote2}
                    alt="smote plot"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.feature_score}
                    alt="info plot"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.model_comparison}
                    alt="info plot"
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <Row>
                <Col>
                  <img
                    className="d-block img-format-v3"
                    src={images.tree}
                    alt="smote plot"
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="seventh">
              <SizePredictionDemo />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default FiresizePage;
