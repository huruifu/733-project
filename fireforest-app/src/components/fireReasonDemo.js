import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./fireReasonDemo.css";

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
    if (longtitude <= -100.91) {
      if (elevation <= 1009.95) {
        if (ownerDescr <= 14.5) {
          if (fireContinueDays <= 16.31) {
            if (prcp <= 0.04) {
              if (longtitude <= -123.63) {
                if (fireSize <= 4.95) {
                  if (fireSize <= 0.08) {
                    if (populationDensity <= 0.28) {
                      if (latitude <= 41.31) {
                        return "Arson";
                      } else return "Debris Burning";
                    } else {
                      return "Railroad";
                    }
                  } else {
                    if (longtitude <= -123.72) {
                      if (fireContinueDays <= 0.06) {
                        if (latitude <= 59.15) {
                          return "Equipment Use";
                        } else return "Smoking";
                      } else {
                        if (longtitude <= -153.32) {
                          return "Debris Burning";
                        } else return "Powerline";
                      }
                    } else {
                      if (prcp <= 0.03) {
                        if (longtitude <= -123.65) {
                          return "Children";
                        } else return "Fireworks";
                      } else {
                        if (latitude <= 40.57) {
                          return "Railroad";
                        } else return "Structure";
                      }
                    }
                  }
                } else {
                  if (latitude <= 59.33) {
                    if (tavg <= 63.57) {
                      if (populationDensity <= 1.81) {
                        if (elevation <= 67.15) {
                          return "Equipment Use";
                        } else return "Fireworks";
                      } else {
                        if (latitude <= 44.04) {
                          return "Fireworks";
                        } else return "Miscellaneous";
                      }
                    } else {
                      if (ownerDescr <= 11.5) {
                        if (elevation <= 287.15) {
                          return "Fireworks";
                        } else return "Campfire";
                      } else return "Arson";
                    }
                  } else {
                    if (discoveryDoy <= 142.0) {
                      if (discoveryDoy <= 140.5) {
                        return "Arson";
                      } else return "Miscellaneous";
                    } else {
                      if (prcp <= 0.02) {
                        if (awnd <= 7.9) {
                          return "Campfire";
                        } else return "Lightning";
                      } else {
                        if (fireSize <= 48.25) {
                          return "Lightning";
                        } else return "Structure";
                      }
                    }
                  }
                }
              } else {
                if (state <= 8.5) {
                  if (tavg <= 67.96) {
                    if (ownerDescr <= 5.5) {
                      if (elevation <= 105.9) {
                        if (fireYear <= 3.5) {
                          return "Debris Burning";
                        } else return "Lightning";
                      } else {
                        if (longtitude <= -122.49) {
                          return "Children";
                        } else return "Miscellaneous";
                      }
                    } else {
                      if (elevation <= 480.55) {
                        if (discoveryDoy <= 124.5) {
                          return "Structure";
                        } else return "Children";
                      } else {
                        if (discoveryDoy <= 147.5) {
                          return "Structure";
                        } else return "Debris Burning";
                      }
                    }
                  } else {
                    if (fireYear <= 1.5) {
                      if (longtitude <= -117.24) {
                        if (populationDensity <= 0.83) {
                          return "Smoking";
                        } else return "Arson";
                      } else {
                        if (elevation <= 853.75) {
                          return "Railroad";
                        } else return "Fireworks";
                      }
                    } else {
                      if (populationDensity <= 0.12) {
                        if (ownerDescr <= 9.5) {
                          return "Arson";
                        } else return "Railroad";
                      } else {
                        if (fireSize <= 1.04) {
                          return "Powerline";
                        } else return "Arson";
                      }
                    }
                  }
                } else {
                  if (discoveryDoy <= 187.5) {
                    if (discoveryDoy <= 179.5) {
                      if (longtitude <= -113.6) {
                        if (discoveryDoy <= 116.5) {
                          return "Railroad";
                        } else return "Miscellaneous";
                      } else {
                        if (discoveryDoy <= 142.5) {
                          return "Fireworks";
                        } else return "Miscellaneous";
                      }
                    } else {
                      if (tavg <= 65.47) {
                        if (populationDensity <= 31.37) {
                          return "Railroad";
                        } else return "Equipment Use";
                      } else {
                        if (ownerDescr <= 0.5) {
                          return "Equipment Use";
                        } else return "Fireworks";
                      }
                    }
                  } else {
                    if (fireSize <= 0.15) {
                      if (fireContinueDays <= 0.1) {
                        if (populationDensity <= 14.59) {
                          return "Arson";
                        } else return "Children";
                      } else {
                        if (populationDensity <= 0.21) {
                          return "Children";
                        } else return "Fireworks";
                      }
                    } else {
                      if (tavg <= 64.28) {
                        if (state <= 39.0) {
                          return "Arson";
                        } else return "Children";
                      } else {
                        if (populationDensity <= 1.32) {
                          return "Arson";
                        } else return "Fireworks";
                      }
                    }
                  }
                }
              }
            } else {
              if (populationDensity <= 1.42) {
                if (fireSize <= 0.23) {
                  if (fireContinueDays <= 0.02) {
                    if (tavg <= 56.46) {
                      return "Arson";
                    } else {
                      if (elevation <= 783.3) {
                        return "Lightning";
                      } else {
                        if (populationDensity <= 0.54) {
                          return "Lightning";
                        } else return "Miscellaneous";
                      }
                    }
                  } else {
                    if (fireContinueDays <= 8.21) {
                      if (longtitude <= -106.09) {
                        if (tavg <= 62.78) {
                          return "Powerline";
                        } else return "Equipment Use";
                      } else {
                        if (discoveryDoy <= 211.0) {
                          return "Equipment Use";
                        } else return "Powerline";
                      }
                    } else {
                      if (latitude <= 53.63) {
                        if (tavg <= 66.82) {
                          return "Lightning";
                        } else return "Equipment Use";
                      } else {
                        return "Campfire";
                      }
                    }
                  }
                } else {
                  if (latitude <= 42.98) {
                    if (elevation <= 832.4) {
                      if (latitude <= 32.87) {
                        return "Lightning";
                      } else {
                        if (discoveryDoy <= 150.0) {
                          return "Arson";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return "Fireworks";
  };

  const predictOne = () => {
    if (discoveryDoy <= 146.5) {
      if (ownerDescr <= 0.5) {
        if (elevation <= 621.95) {
          if (prcp <= 0.03) {
            if (longtitude <= -118.31) {
              if (fireContinueDays <= 19.98) {
                if (discoveryDoy <= 112.5) {
                  return "natural";
                } else {
                  if (elevation <= 295.5) {
                    return "natural";
                  } else {
                    if (discoveryDoy <= 132.5) {
                      if (latitude <= 47.3) {
                        return "accidental";
                      } else return "natural";
                    } else return "natural";
                  }
                }
              } else {
                if (longtitude <= -123.56) {
                  return "accidental";
                } else {
                  if (awnd <= 8.1) {
                    return "natural";
                  } else return "accidental";
                }
              }
            } else {
              if (longtitude <= -94.95) {
                if (awnd <= 7.52) {
                  if (awnd <= 5.37) {
                    if (fireContinueDays <= 47.92) {
                      return "natural";
                    } else return "accidental";
                  } else {
                    if (populationDensity <= 0.63) {
                      if (latitude <= 48.89) {
                        if (fireContinueDays <= 15.96) {
                          return "malicious";
                        } else return "natural";
                      } else {
                        if (awnd <= 7.52) {
                          return "malicious";
                        } else return "natural";
                      }
                    } else {
                      if (discoveryDoy <= 76.5) {
                        if (populationDensity <= 3.35) {
                          return "natural";
                        } else return "malicious";
                      } else return "malicious";
                    }
                  }
                } else {
                  if (longtitude <= -98.17) {
                    if (fireSize <= 0.45) {
                      if (fireContinueDays <= 2.81) {
                        return "malicious";
                      } else {
                        if (latitude <= 48.89) {
                          return "malicious";
                        } else return "natural";
                      }
                    } else {
                      if (awnd <= 8.17) {
                        return "malicious";
                      } else return "accidental";
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
      discoveryDoy === null ||
      fireContinueDays === null ||
      fireSize === null ||
      latitude === null ||
      longtitude === null ||
      populationDensity === null ||
      elevation === null ||
      awnd === null ||
      prcp === null ||
      tavg === null
    );
  };

  const onClickPredict = (e) => {
    if (props.isGrouped) {
      setPrediction(predictOne());
    } else {
      setPrediction(predictTwo());
    }
    e.preventDefault();
    e.target.reset();
  };

  const handleClose = (e) => {
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
    e.preventDefault();
  };

  return (
    <div>
      <Form id="myForm" onSubmit={onClickPredict}>
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
              step="any"
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
              step="any"
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
              step="any"
              //   placeholder="Enter next season age"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="longtitude">
            <Form.Label>Longtitude</Form.Label>
            <Form.Control
              type="number"
              step="any"
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

          <Form.Group as={Col} controlId="populationDensity">
            <Form.Label>Population Density</Form.Label>
            <Form.Control
              type="number"
              step="any"
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
              step="any"
              //   placeholder="Enter next season age"
              onChange={(e) => setElevation(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="awnd">
            <Form.Label>Average Wind Speed</Form.Label>
            <Form.Control
              type="number"
              step="any"
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
              step="any"
              //   placeholder="Enter next season age"
              onChange={(e) => setPrcp(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="tavg">
            <Form.Label>Average Temperature</Form.Label>
            <Form.Control
              type="number"
              step="any"
              //   placeholder="Enter Height next season"
              onChange={(e) => setTavg(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Button
          type="submit"
          style={{ marginLeft: "90%" }}
          variant="primary"
          // onClick={onClickPredict}
          disabled={isButtonDisabled()}
        >
          Submit
        </Button>
      </Form>

      {renderResults()}

      {/* <Button
        style={{ marginLeft: "90%" }}
        variant="primary"
        onClick={onClickPredict}
        disabled={isButtonDisabled()}
      >
        Submit
      </Button> */}
    </div>
  );
};

export default FireReasonDemo;
