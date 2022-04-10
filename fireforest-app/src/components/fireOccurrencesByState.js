import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"

import MapChartFireSizeByState from "./MapChartFireSizeByState"

const FireOccurrencesByState = () => {
  const [year, setYear] = useState("2011")
  const [month, setMonth] = useState("1")

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
  years.push(<option key={2022} value={2022}>{2022}</option>)

  const handleMonthChange = (e) => {
    setMonth(e.target.value)
  }

  const handleYearChange = (e) => {
    setYear(e.target.value)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col sm={5} className='mt-3'>
            <Form.Label>Year</Form.Label>
            <Form.Select defaultValue={year} onChange={handleYearChange}>
              {years}
            </Form.Select>
          </Col>
          <Col sm={5} className='mt-3'>
            <Form.Label>Month</Form.Label>
            <Form.Select defaultValue={month} onChange={handleMonthChange}>
              {months}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <MapChartFireSizeByState year={year} month={month} />
        </Row>
      </Container>
    </div>
  )
}

export default FireOccurrencesByState