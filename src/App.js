import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home-Page";
import CatalogPage from "./Pages/Catalog-Page";
import StorePage from "./Pages/Store-Page";
import KidsPage from "./Pages/Kids-Page";
import RegPage from "./Pages/Reg-Page";
import LoginPage from "./Pages/Login-Page";
function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<HomePage></HomePage>}></Route>
          <Route path={'/catalog'} element={<CatalogPage></CatalogPage>}></Route>
          <Route path={'/store'} element={<StorePage></StorePage>}></Route>
          <Route path={'/kids'} element={<KidsPage></KidsPage>}></Route>
          <Route path={'/register'} element={<RegPage></RegPage>}></Route>
          <Route path={'/login'} element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
