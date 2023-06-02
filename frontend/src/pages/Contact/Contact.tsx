import beardevLogo from "../../assets/icons/beardev-logo-page-contact.svg";
// import Header from "../../components/Header/Header";
import ContactStyled from "./Contact.styled";
import emailIcon from "../../assets/icons/email-icon.svg";
import whatsapIcon from "../../assets/icons/whatsap-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import locationIcon from "../../assets/icons/location.svg";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
    return (
        <ContactStyled>
            {/* <Header /> */}
            <div className='container-contact'>
                <h1>Contato</h1>
                <div className='container-infos-contact'>
                    <div className='container-datas-icons-contact'>
                        <img
                            className='icon-social-media'
                            src={emailIcon}
                            alt='Email Icon'
                        />
                        <p>emailbeardev@beardev.digital</p>
                    </div>
                    <div className='container-datas-icons-contact'>
                        <img
                            className='icon-social-media'
                            src={whatsapIcon}
                            alt='Whatsap Logo'
                        />
                        <p>(xx) x xxxx-xxxx</p>
                    </div>
                    <div className='container-datas-icons-contact'>
                        <img
                            className='icon-social-media'
                            src={instagramIcon}
                            alt='Instagram Logo'
                        />
                        <p>/beardevdigital</p>
                    </div>
                    <div className='container-datas-icons-contact'>
                        <img
                            className='icon-social-media'
                            src={facebookIcon}
                            alt='Facebook Logo'
                        />
                        <p>/beardevdigital</p>
                    </div>
                    <div className='container-datas-icons-contact'>
                        <img
                            className='icon-social-media'
                            src={linkedinIcon}
                            alt='LinkedIn Logo'
                        />
                        <p>/company/beardevbr/</p>
                    </div>
                    <div className='container-datas-icons-contact'>
                        <img
                            className='icon-social-media'
                            src={locationIcon}
                            alt='Location Icon'
                        />
                        <p>endereço da Beardev, 000, - Belo Horizonte, MG.</p>
                    </div>
                </div>
            </div>
            <img className='logo' src={beardevLogo} alt='Beardev Logo' />
            <Footer />
        </ContactStyled>
    );
};

export default Contact;
