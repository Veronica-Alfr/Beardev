import { useNavigate } from "react-router-dom";
import FooterStyled from "./Footer.styled";
import whatsapLogoHighest from "../../assets/icons/whatsap-logo-highest.svg";
import facebookLogoHighest from "../../assets/icons/facebook-logo-highest.svg";
import instagramLogoHighest from "../../assets/icons/instagram-logo-highest.svg";
import linkedinLogoHighest from "../../assets/icons/linkedin-logo-highest.svg";
import beardevLogoWithName from "../../assets/icons/beardev-logo-with-name.svg";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <FooterStyled>
            <div className='container-footer'>
                <div className='container-buttons-logo'>
                    <div className='container-category'>
                        <p>Categorias</p>
                        <div className='container-button'>
                            <button
                                className='footer-nav'
                                onClick={() => navigate("/")}
                            >
                                <p className={`nav-name`}>Home</p>
                            </button>
                            <button
                                className='footer-nav'
                                onClick={() => navigate("/about")}
                            >
                                <p className={`nav-name`}>Quem somos</p>
                            </button>
                            <button
                                className='footer-nav'
                                onClick={() => navigate("/assessments")}
                            >
                                <p className={`nav-name`}>
                                    Avaliação de clientes
                                </p>
                            </button>
                            <button
                                className='footer-nav'
                                onClick={() => navigate("/services")}
                            >
                                <p className={`nav-name`}>Nossos serviços</p>
                            </button>
                            <button
                                className='footer-nav'
                                onClick={() => navigate("/contact")}
                            >
                                <p className={`nav-name`}>Contato</p>
                            </button>
                        </div>
                    </div>
                    <img
                        className='logo-with-name'
                        src={beardevLogoWithName}
                        alt='Beardev Logo With Name Entreprise'
                    />
                </div>
                <div className='container-contacts'>
                    <p>Nos acompanhe em nossas redes sociais</p>
                    <div className='container-social-medias'>
                        <img
                            className='icon-media'
                            src={whatsapLogoHighest}
                            alt='Whatsap Logo'
                        />{" "}
                        {/*Fazer com que ao clicar no icone direcione para a pagina*/}
                        <img
                            className='icon-media'
                            src={instagramLogoHighest}
                            alt='Instagram Logo'
                        />
                        <img
                            className='icon-media'
                            src={facebookLogoHighest}
                            alt='Facebook Logo'
                        />
                        <img
                            className='icon-media'
                            src={linkedinLogoHighest}
                            alt='LinkedIn Logo'
                        />
                    </div>
                </div>
                <span>Beardev® 2022 - Todos os direitos reservados.</span>
            </div>
        </FooterStyled>
    );
};

export default Footer;
