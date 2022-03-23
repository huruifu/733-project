import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationBar";

import HomePage from "./pages/homePage";
import FiresizePage from "./pages/firesizePage";
import ForestfireHeatmapPage from "./pages/forestfireHeatmapPage";
import ForestfireReasonPage from "./pages/forestfireReasonPage";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" exact={true} element={<HomePage/>}/>

        <Route path="/fire-size" exact={true} element={<FiresizePage/>}/>

        <Route path="/forestfire-heatmap" exact={true} element={<ForestfireHeatmapPage/>}/>

        <Route path="/forestfire-reason" exact={true} element={<ForestfireReasonPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
