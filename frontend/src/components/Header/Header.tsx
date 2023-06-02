import { useNavigate, useLocation } from "react-router-dom";
import HeaderStyled from "./Header.styled";
import beardevLogo from "../../assets/icons/beardev-logo.svg";
import brazilFlag from "../../assets/icons/flag-br.svg";
import usaFlag from "../../assets/icons/flag-usa.svg";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <HeaderStyled>
            <img className='logo' src={beardevLogo} alt='Beardev Logo' />
            <div className='container-button'>
                <button
                    className={`${
                        location.pathname === "/" ? "router-name" : null
                    }`}
                    onClick={() => navigate("/")}
                >
                    <p className={`nav-name`}>Home</p>
                </button>
                <button
                    className={`${
                        location.pathname === "/about" ? "router-name" : null
                    }`}
                    onClick={() => navigate("/about")}
                >
                    <p className={`nav-name`}>Quem somos</p>
                </button>
                <button
                    className={`${
                        location.pathname === "/assessments"
                            ? "router-name"
                            : null
                    }`}
                    onClick={() => navigate("/assessments")}
                >
                    <p className={`nav-name`}>Avaliação de clientes</p>
                </button>
                <button
                    className={`${
                        location.pathname === "/services" ? "router-name" : null
                    }`}
                    onClick={() => navigate("/services")}
                >
                    <p className={`nav-name`}>Nossos serviços</p>
                </button>
                <button
                    className={`${
                        location.pathname === "/contact" ? "router-name" : null
                    }`}
                    onClick={() => navigate("/contact")}
                >
                    <p className={`nav-name`}>Contato</p>
                </button>
            </div>
            <div className='container-flags'>
                <img
                    className='flag-Brazil'
                    src={brazilFlag}
                    alt='Flag Brazil'
                />
                <img src={usaFlag} alt='Flag United States of America' />
            </div>
        </HeaderStyled>
    );
};

export default Header;
