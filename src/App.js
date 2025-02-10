import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home-Page";
function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
