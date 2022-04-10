import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container'

import MapChartByCounty from "./MapChartByCounty"

const SizeModal = () => {
  const feature_names = [
    "Average Temperature",
    "Population density",
    "Wind Speed",
    "PRCP",
    "Fire Size"
  ]
  const feature_values = [
    "avg_temp",
    "population_density",
    "awnd",
    "prcp",
    "fire_size"
  ]
  const [year, setYear] = useState("2011")
  const [month, setMonth] = useState("1")
  const [feature, setFeature] = useState(feature_values[0])
  const [dateSelection, setDateSelection] = useState(true)

  useEffect(() => {
    if (feature === 'population_density') {
      setDateSelection(false)
    } else {
      setDateSelection(true)
    }
  }, [feature])

  let months = []
  for (let i = 1; i < 13; i++) {
    months.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }

  let years = []
  for (let i = 2011; i < 2016; i++) {
    years.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }

  let feature_rows = []
  for (let i = 0; i < feature_names.length; i++) {
    feature_rows.push(
      <option key={i} value={feature_values[i]}>
        {feature_names[i]}
      </option>
    )
  }
  const handleYearChange = (e) => {
    setYear(e.target.value)
  }
  const handleMonthChange = (e) => {
    setMonth(e.target.value)
  }
  const handleFeatureChange = (e) => {
    setFeature(e.target.value)
  }

  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col>
            <div style={{ display: dateSelection ? null : 'none' }}>
              <Form.Label>Year</Form.Label>
              <Form.Select defaultValue={year} onChange={handleYearChange}>
                {years}
              </Form.Select>
            </div>
          </Col>
          <Col>
            <div style={{ display: dateSelection ? null : 'none' }}>
              <Form.Label>Month</Form.Label>
              <Form.Select defaultValue={month} onChange={handleMonthChange}>
                {months}
              </Form.Select>
            </div></Col>
          <Col>
            <div>
              <Form.Label>Feature</Form.Label>
              <Form.Select defaultValue={feature} onChange={handleFeatureChange}>
                {feature_rows}
              </Form.Select>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <MapChartByCounty year={year} month={month} feature={feature} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SizeModal;