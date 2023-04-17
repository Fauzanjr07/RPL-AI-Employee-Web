import Login from "./pages/login/Login";
import FaceRecognitionPage from "./pages/faceRocegnitionPage/FaceRecognitionPage";
import InformationPage from "./pages/informationPage/InformationPage";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}/>
            <Route path="faceRecognitionPage" element={<FaceRecognitionPage/>}/>
            <Route path="informationPage" element={<InformationPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
