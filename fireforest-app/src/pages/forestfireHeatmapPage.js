import React, {useState} from "react"
import MapChart from "./MapChart"

function ForestfireHeatmapPage() {
    const [month, setMonth] = useState('1')
    const [feature, setFeature] = useState('population_density')

    let months = []
    for (let i = 1; i < 13; i++) {
        months.push(<option key={i} value={i}>{i}</option>)
    }
    
    let feature_names = ['population_density', 'temperature', 'wind speed', 'humidity', 'weather']
    let feature_rows = []
    for (let i = 0; i < feature_names.length; i++) {
        feature_rows.push(<option key={i} value={feature_names[i]} >{feature_names[i]}</option>)
    }

    const handleMonthChange = (e) => {
        setMonth(e.target.value)
    }
    const handleFeatureChange = (e) => {
        setFeature(e.target.value)
    }
    
    return (
        <div>
            <MapChart
                month={month}
                feature={feature}
            />
            <select onChange={handleMonthChange}
                name="selectList" id="selectMonth">
                {months}
            </select>
            <select onChange={handleFeatureChange}
                name="selectList" id="selectFeature">
                {feature_rows}
            </select>
        </div>
    )
}

export default ForestfireHeatmapPage