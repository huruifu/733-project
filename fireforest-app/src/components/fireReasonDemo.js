import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FireReasonDemo = (props) => {
  const [fireYear, setYear] = useState(5); // 0
  const [discoveryDoy, setDoy] = useState(null); //1
  const [fireContinueDays, setDays] = useState(null); //2
  const [fireSize, setSize] = useState(null); //3
  const [latitude, setLatitude] = useState(null); //4
  const [longtitude, setLongtitude] = useState(null); //5
  const [ownerDescr, setOwnerdescr] = useState(1); //6
  const [state, setState] = useState(1); //7
  const [populationDensity, setPopulationDensity] = useState(null); //8
  const [elevation, setElevation] = useState(null); //9
  const [awnd, setAwnd] = useState(null); //10
  const [prcp, setPrcp] = useState(null); //11
  const [tavg, setTavg] = useState(null); //12

  const [prediction, setPrediction] = useState(null);

  const predictOne = () => {
    if (discoveryDoy <= 146.50) {
        if (ownerDescr <= 0.5) {
            if (elevation <= 621.95) {
                if (prcp <= 0.03) {
                    if (longtitude <= -118.31) {
                        if (fireContinueDays <= 19.98) {
                            if (discoveryDoy <= 112.50) {
                                return "natural";
                            }
                            else {
                                if (elevation <= 295.50) {
                                    return "natural";
                                }
                                else {
                                    if (discoveryDoy <= 132.50) {
                                        if (latitude <= 47.30) {
                                            return "accidental";
                                        }
                                        else return "natural";
                                    }
                                    else return "natural";
                                }
                            }
                        }
                        else {
                            if (longtitude <= -123.56) {
                                return "accidental";
                            }
                            else {
                                if (awnd <= 8.10) {
                                    return "natural";
                                }
                                else return "accidental";
                            }
                        }
                    }
                    else {
                        if (longtitude <= -94.95) {
                            if (awnd <= 7.52) {
                                if (awnd <= 5.37) {
                                    if (fireContinueDays <= 47.92) {
                                        return "natural";
                                    }
                                    else return "accidental";
                                }
                                else {
                                    if (populationDensity <= 0.63) {
                                        if (latitude <= 48.89) {
                                            if (fireContinueDays <= 15.96) {
                                                return "malicious";
                                            }
                                            else return "natural";
                                        }
                                        else {
                                            if (awnd <= 7.52) {
                                                return "malicious";
                                            }
                                            else return "natural";
                                        }
                                    }
                                    else {
                                        if (discoveryDoy <= 76.50) {
                                            if (populationDensity <= 3.35) {
                                                return "natural";
                                            }
                                            else return "malicious";
                                        }
                                        else return "malicious";
                                    }
                                }
                            }
                            else {
                                if (longtitude <= -98.17) {
                                    if (fireSize <= 0.45) {
                                        if (fireContinueDays <= 2.81) {
                                            return "malicious";
                                        }
                                        else {
                                            if (latitude <= 48.89) {
                                                return "malicious";
                                            }
                                            else return "natural";
                                        }
                                    }
                                    else {
                                        if (awnd <= 8.17) {
                                            return "malicious";
                                        }
                                        else return "accidental";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return "natural";
  };

//   {'Debris Burning': 3,
//  'Arson': 0,
//  'Lightning': 6,
//  'Railroad': 9,
//  'Campfire': 1,
//  'Miscellaneous': 7,
//  'Equipment Use': 4,
//  'Smoking': 10,
//  'Children': 2,
//  'Powerline': 8,
//  'Structure': 11,
//  'Fireworks': 5}
  const predictTwo = () => {
  };

  const renderResults = () => {
    if (prediction) {
      return (
        <Alert variant="primary" onClose={handleClose} dismissible>
          The predict reason for this wildfire is {prediction}
        </Alert>
      );
    } else return null;
  };

  const isButtonDisabled = () => {
    return (
      discoveryDoy === null &&
      fireContinueDays === null &&
      fireSize === null &&
      latitude === null &&
      longtitude === null && 
      populationDensity === null &&
      elevation === null &&
      awnd === null && 
      prcp === null && 
      tavg === null
    );
  };

  const onClickPredict = () => {
    if (props.isGrouped) {
      setPrediction(predictOne());
    }
    else {
      console.log("todo")
    }
  };

  const handleClose = () => {
    setDoy(null);
    setDays(null);
    setSize(null);
    setLatitude(null);
    setLongtitude(null);
    setOwnerdescr(1);
    setState(1);
    setPopulationDensity(null);
    setElevation(null);
    setAwnd(null);
    setPrcp(null);
    setTavg(null);
    setPrediction(null);
  };

  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="discoveryDoy">
            <Form.Label>Discovery Day of year</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter next season age"
              onChange={(e) => setDoy(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="fireContinueDays">
            <Form.Label>Fire Continue Days</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter Height next season"
              onChange={(e) => setDays(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="fireSize">
            <Form.Label>Fire Size</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter next season age"
              onChange={(e) => setSize(e.target.value)}
            />
          </Form.Group>

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
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="latitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter next season age"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="longtitude">
            <Form.Label>Longtitude</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter Height next season"
              onChange={(e) => setLongtitude(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="State">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value={1}>AK</option>
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

          <Form.Group as={Col} controlId="populationDensity">
            <Form.Label>Population Density</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter Height next season"
              onChange={(e) => setPopulationDensity(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="elevation">
            <Form.Label>Elevation</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter next season age"
              onChange={(e) => setElevation(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="awnd">
            <Form.Label>Average Wind Speed</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter Height next season"
              onChange={(e) => setAwnd(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="prcp">
            <Form.Label>Prcp</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter next season age"
              onChange={(e) => setPrcp(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="tavg">
            <Form.Label>Average Temperature</Form.Label>
            <Form.Control
              type="number"
              //   placeholder="Enter Height next season"
              onChange={(e) => setTavg(e.target.value)}
            />
          </Form.Group>
        </Row>
      </Form>

      {renderResults()}

      <Button
        style={{ marginLeft: "90%" }}
        variant="primary"
        onClick={onClickPredict}
        disabled={isButtonDisabled()}
      >
        Submit
      </Button>
    </div>
  );
};

export default FireReasonDemo;
