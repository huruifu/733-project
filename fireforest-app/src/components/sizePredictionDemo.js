import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

const SizePredictionDemo = () => {
  const [sourceSystemType, setSourceSystemType] = useState(0); // 0
  const [fireYear, setYear] = useState(2022); // 1
  const [statCauseCode, setStatCauseCode] = useState(null); //2
  const [ownerDescr, setOwnerdescr] = useState(1); //3
  const [state, setState] = useState(0); //4
  const [populationDensity, setPopulationDensity] = useState(null); //5
  const [elevation, setElevation] = useState(null); //6
  const [awnd, setAwnd] = useState(null); //7
  const [prcp, setPrcp] = useState(null); //8
  const [distance, setDistance] = useState(null); //9
  const [hourDiff, setHourDiff] = useState(null); //10
  const [month, setMonth] = useState(null); //11
  const [time, setTime] = useState(0); //12
  const [latitude, setLatitude] = useState(null); //13
  const [longtitude, setLongtitude] = useState(null); //14
  const [tavg, setTavg] = useState(null); //15

  const [prediction, setPrediction] = useState(null);
  const [inProgress, setInProgress] = useState(false);

  const isButtonDisabled = () => {
    return (
      statCauseCode === null ||
      distance === null ||
      hourDiff === null ||
      month === null ||
      latitude === null ||
      longtitude === null ||
      populationDensity === null ||
      elevation === null ||
      awnd === null ||
      prcp === null ||
      tavg === null
    );
  };

  //A 0
  // B 1
  //C 2
  // D 3
  //E 4
  //F 5
  //G 6
  // const treeOne = () => {
  //   if (ownerDescr <= 8.0) {
  //     if (month <= 4.5) {
  //       if (ownerDescr <= 2.0) {
  //         if (latitude <= 42.7) {
  //           if (populationDensity <= 6.95) {
  //             return "A";
  //           } else return "F";
  //         } else {
  //           if (hourDiff <= 2.22) {
  //             return "B";
  //           } else return "C";
  //         }
  //       } else {
  //         if (sourceSystemType <= 1.5) {
  //           if (longtitude <= -96.03) {
  //             return "F";
  //           } else return "E";
  //         } else {
  //           if (distance <= 0) {
  //             return "A";
  //           } else return "D";
  //         }
  //       }
  //     } else {
  //       if (month <= 8.5) {
  //         if (latitude <= 48.9) {
  //           if (tavg <= 68.0) {
  //             return "F";
  //           } else return "G";
  //         } else return "G";
  //       } else {
  //         if (statCauseCode <= 4.0) {
  //           return "A";
  //         } else {
  //           if (statCauseCode <= 9.0) {
  //             return "A";
  //           } else return "F";
  //         }
  //       }
  //     }
  //   } else {
  //     if (hourDiff <= 2) {
  //       if (month <= 3.5) {
  //         if (elevation <= 178.05) {
  //           if (longtitude <= -76.09) {
  //             return "B";
  //           } else return "A";
  //         } else {
  //           if (longtitude <= -91.42) {
  //             return "C";
  //           } else return "B";
  //         }
  //       } else {
  //         if (hourDiff <= 0.8) {
  //           return "A";
  //         } else return "B";
  //       }
  //     } else {
  //       if (sourceSystemType <= 1.5) {
  //         if (hourDiff <= 149.68) {
  //           if (ownerDescr <= 14.0) {
  //             return "E";
  //           } else return "A";
  //         } else {
  //           if (elevation <= 1036.23) {
  //             return "F";
  //           } else return "G";
  //         }
  //       } else {
  //         if (latitude <= 38.5) {
  //           if (distance <= 0) {
  //             return "B";
  //           } else return "C";
  //         } else {
  //           if (longtitude <= -79.45) {
  //             return "D";
  //           } else return "A";
  //         }
  //       }
  //     }
  //   }
  // };

  const onClickPredict = async (e) => {
    e.preventDefault();
    setInProgress(true);
    try {
      let url = "https://project-733-backend.herokuapp.com/fire-size-predict";
      console.log(url);
      let response = await axios({
        method: "post",
        url: url,
        data: {
          SOURCE_SYSTEM_TYPE: [sourceSystemType],
          FIRE_YEAR: [fireYear],
          STAT_CAUSE_CODE: [statCauseCode],
          OWNER_CODE: [ownerDescr],
          STATE: [state],
          population_density: [populationDensity],
          ELEVATION: [elevation],
          AWND: [awnd],
          PRCP: [prcp],
          distance: [distance],
          hour_diff: [hourDiff],
          month: [month],
          time: [time],
          LATITUDE: [latitude],
          LONGITUDE: [longtitude],
          temp_average: [tavg],
        },
      });
      console.log(response);
      console.log(response["data"]["class"]);
      setPrediction(getPredictionClass(parseInt(response["data"]["class"])));
      setInProgress(false);
    } catch {
      alert("Something wrong");
      setInProgress(false);
    }
    // setPrediction(treeOne);
    e.preventDefault();
    e.target.reset();
  };

  //A 0
  // B 1
  //C 2
  // D 3
  //E 4
  //F 5
  //G 6
  const getPredictionClass = (classNum) => {
    switch (classNum) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      case 4:
        return "E";
      case 5:
        return "F";
      case 6:
        return "G";
    }
  };

  const handleClose = (e) => {
    setStatCauseCode(null);
    setDistance(null);
    setHourDiff(null);
    setMonth(null);
    setLatitude(null);
    setLongtitude(null);
    setPopulationDensity(null);
    setElevation(null);
    setAwnd(null);
    setPrcp(null);
    setTavg(null);
    setPrediction(null);
  };

  const showSpinner = () => {
    return inProgress ? <Spinner animation="border" /> : null;
  };

  const renderResults = () => {
    if (prediction) {
      return (
        <Alert variant="primary" onClose={handleClose} dismissible>
          The predict fire size class is {prediction}
        </Alert>
      );
    } else return null;
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Class</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td> 0 - 0.25 acres </td>
          </tr>
          <tr>
            <td>B</td>
            <td>0.26-9.9 acres</td>
          </tr>
          <tr>
            <td>C</td>
            <td>10-99.9 acres</td>
          </tr>
          <tr>
            <td>D</td>
            <td>100-299 acres</td>
          </tr>
          <tr>
            <td>E</td>
            <td>300-999 acres</td>
          </tr>
          <tr>
            <td>F</td>
            <td>1000-4999 acres</td>
          </tr>
          <tr>
            <td>G</td>
            <td>5000+ acres</td>
          </tr>
        </tbody>
      </Table>

      <Form id="myForm" onSubmit={onClickPredict}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="SourceSystemType">
            <Form.Label>Source System Type</Form.Label>
            <Form.Select
              defaultValue={sourceSystemType}
              onChange={(e) => setSourceSystemType(e.target.value)}
            >
              <option value={0}>FED</option>
              <option value={1}>INTERAGCY</option>
              <option value={2}>NONFED</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="statCauseCode">
            <Form.Label>Stat Cause Code</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setStatCauseCode(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="Ownerdescr">
            <Form.Label>Owner Descr</Form.Label>
            <Form.Select
              defaultValue={ownerDescr}
              onChange={(e) => setOwnerdescr(e.target.value)}
            >
              <option value={1}>BML</option>
              <option value={2}>BOR</option>
              <option value={3}>COUNTY</option>
              <option value={4}>FOREIGN</option>
              <option value={5}>FWS</option>
              <option value={6}>MISSING/NOT SPECIFIED</option>
              <option value={7}>MUNICIPAL/LOCAL</option>
              <option value={8}>NPS</option>
              <option value={9}>OTHER FEDERAL</option>
              <option value={11}>PRIVATE</option>
              <option value={12}>STATE OR PRIVATE</option>
              <option value={13}>TRIBAL</option>
              <option value={14}>UNDEFINED FEDERAL</option>
              <option value={15}>USFS</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="State">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value={0}>AK</option>
              <option value={1}>AL</option>
              <option value={2}>AR</option>
              <option value={3}>AZ</option>
              <option value={4}>CA</option>
              <option value={5}>CO</option>
              <option value={6}>CT</option>
              <option value={7}>DC</option>
              <option value={8}>DE</option>
              <option value={9}>FL</option>
              <option value={11}>GA</option>
              <option value={12}>IA</option>
              <option value={13}>ID</option>
              <option value={14}>IL</option>
              <option value={15}>IN</option>
              <option value={17}>KY</option>
              <option value={18}>LA</option>
              <option value={19}>MA</option>
              <option value={20}>MD</option>
              <option value={21}>ME</option>
              <option value={22}>MI</option>
              <option value={23}>MN</option>
              <option value={24}>MO</option>
              <option value={25}>MS</option>
              <option value={26}>MT</option>
              <option value={27}>NC</option>
              <option value={28}>ND</option>
              <option value={29}>NE</option>
              <option value={30}>NH</option>
              <option value={31}>NJ</option>
              <option value={32}>NM</option>
              <option value={33}>NV</option>
              <option value={34}>NY</option>
              <option value={35}>OH</option>
              <option value={36}>OK</option>
              <option value={37}>TX</option>
              <option value={38}>PA</option>
              <option value={39}>RI</option>
              <option value={40}>SC</option>
              <option value={41}>SD</option>
              <option value={42}>TN</option>
              <option value={44}>UT</option>
              <option value={45}>VA</option>
              <option value={46}>VT</option>
              <option value={47}>WA</option>
              <option value={48}>WI</option>
              <option value={49}>WV</option>
              <option value={50}>WY</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="populationDensity">
            <Form.Label>Population Density</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setPopulationDensity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="elevation">
            <Form.Label>Elevation</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setElevation(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="awnd">
            <Form.Label>Average Wind Speed</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setAwnd(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="prcp">
            <Form.Label>Prcp</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setPrcp(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="Distance">
            <Form.Label>Distance</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setDistance(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="hourDiff">
            <Form.Label>Hour Diff</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setHourDiff(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="Month">
            <Form.Label>Month</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setMonth(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Time">
            <Form.Label>Time</Form.Label>
            <Form.Select
              defaultValue={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value={0}>null</option>
              <option value={1}>early morning (5am - 12pm)</option>
              <option value={2}>afternoon: 12pm-5pm</option>
              <option value={3}>evening: 5pm-10pm</option>
              <option value={4}>night: 10pm-5am</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="latitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="longtitude">
            <Form.Label>Longtitude</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setLongtitude(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="Tavg" className="w-50">
            <Form.Label>Avarge Temperature</Form.Label>
            <Form.Control
              type="number"
              step="any"
              onChange={(e) => setTavg(e.target.value)}
            />
          </Form.Group>
        </Row>

        {showSpinner()}
        {renderResults()}

        <Button
          type="submit"
          style={{ marginRight: "90%" }}
          variant="primary"
          disabled={isButtonDisabled()}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SizePredictionDemo;
