import { useNavigate, useLocation } from "react-router-dom";
import HeaderStyled from "./Header.styled";
import beardevLogo from "../../assets/icons/beardev-logo.svg";
import brazilFlag from "../../assets/icons/flag-br.svg";
import usaFlag from "../../assets/icons/flag-usa.svg";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuOnClick = (): void => {
        const menuButtons = document.getElementById("menu-buttons") as HTMLElement;
        menuButtons.classList.toggle("change");

        const menuBar = document.getElementById("menu-bar") as HTMLElement;
        menuBar.classList.toggle("change-menu");

        // const header = document.getElementById("header") as HTMLElement;
        // const changed = document.querySelectorAll('change-menu');

        // if(changed) {
        //     header.style.backgroundColor = 'rgba(87, 87, 86, 0.44)';
        // } else {
        //     header.style.backgroundColor = 'transparent';
        // }

    };

    return (
        <HeaderStyled id="header">
            <img className='logo' src={beardevLogo} alt='Beardev Logo' />
            <div className='menu'>
                <div id='menu-bar' onClick={() => menuOnClick()}>
                    <div id='bar1' className='bar'></div>
                    <div id='bar2' className='bar'></div>
                    <div id='bar3' className='bar'></div>
                </div>
                <div className='container-button' id="menu-buttons">
                    <button
                        className={`${
                            location.pathname === "/"
                                ? "router-name"
                                : null
                        }`}
                        onClick={() => navigate("/")}
                    >
                        <p className={`nav-name`}>Home</p>
                    </button>
                    <button
                        className={`${
                            location.pathname === "/about"
                                ? "router-name"
                                : null
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
                            location.pathname === "/services"
                                ? "router-name"
                                : null
                        }`}
                        onClick={() => navigate("/services")}
                    >
                        <p className={`nav-name`}>Nossos serviços</p>
                    </button>
                    <button
                        className={`${
                            location.pathname === "/contact"
                                ? "router-name"
                                : null
                        }`}
                        onClick={() => navigate("/contact")}
                    >
                        <p className={`nav-name`}>Contato</p>
                    </button>
                </div>
            </div>
            <div className='container-flags'>
                <img
                    className='flag-Brazil'
                    src={brazilFlag}
                    alt='Flag Brazil'
                />
                <img
                    className='flag-USA'
                    src={usaFlag}
                    alt='Flag United States of America'
                />
            </div>
        </HeaderStyled>
    );
};

export default Header;
