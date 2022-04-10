import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const MapChartByCounty = ({ year, month, feature }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://www.bls.gov/lau/
    let csv_path = feature === 'population_density' ? 'data/firesize_by_county/population_by_county.csv':`data/firesize_by_county/${year}_${month}_firesize_by_county.csv`
    csv(csv_path).then((counties) => {
      setData(counties);
    });
  }, [year, month, feature]);

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d[feature]))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618",
    ]);

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const cur = data.find((s) => s.geoid === geo.id);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur[feature]) : "#ffedea"}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChartByCounty;
