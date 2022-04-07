import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"

import FireOccurrencesByState from '../../components/fireOccurrencesByState'

function ForestfireHeatmapPage() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" fluid>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className="clickable-v3">
                Monthly Fire Occurrences
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                <Col>
                  <FireOccurrencesByState />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default ForestfireHeatmapPage