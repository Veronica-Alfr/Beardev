import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Assessments from "./pages/Assessments/Assessments";
import Services from "./pages/Services/Services";
import GlobalStyles from "./Global.styled";
import Contact from "./pages/Contact/Contact";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/assessments' element={<Assessments />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
