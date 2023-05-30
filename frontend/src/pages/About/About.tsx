import Header from "../../components/Header/Header";
import AboutStyled from "./About.styled";
import beardevLogoHighest from "../../assets/icons/beardev-logo-highest.svg";

const About = () => {
    return (
        // <div>
            <AboutStyled>
            <Header />
                <div className='container-about'>
                    <div className='container-paragraphs-about'>
                        <h1>Quem Somos</h1>
                        <p className='paragraph-about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                        </p>
                        <p className='paragraph-about paragraph-about-bold'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <p className='paragraph-about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                        </p>
                    </div>
                    <img className="logo-highest" src={beardevLogoHighest} alt="Beardev Logo" />
                </div>
            </AboutStyled>
        // </div>
    );
};

export default About;
