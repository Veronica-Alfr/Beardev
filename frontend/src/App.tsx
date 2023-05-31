import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Assessments from "./pages/Assessments/Assessments";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/assessments' element={<Assessments />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
