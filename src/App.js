import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/index_page/Index";
import About from "./components/about_page/About";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import QUESTION_ANSWER from "./components/Q&A/QUESTION_ANSWER";
import ConfirmPassword from "./components/login/ConfirmPassword";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Q&A" element={<QUESTION_ANSWER />} />
          <Route path="/Confirm-Password" element={<ConfirmPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
