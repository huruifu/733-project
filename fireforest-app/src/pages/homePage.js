import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./homePage.css";

const images = {
  wildfires_counts: "/images/home/wildfires_counts.png",
};
function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" interval={null}>
      <Carousel.Item>
        <img
          className="d-block img-format"
          src={images.wildfires_counts}
          alt="First slide"
        />
        <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <Carousel.Caption>
          <h3>Plot for the counts of wildfire incidents by states</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default HomePage;
