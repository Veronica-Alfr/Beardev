import beardevLogoHighest from "../../../assets/icons/beardev-logo-highest.svg";
import AboutResponsiveStyled from "./AboutResponsive.styled";

const AboutResponsive = () => {
    return (
        <AboutResponsiveStyled>
            <div className='container-about-responsive'>
                <div className='container-title-paragraph-initial'>
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
                </div>
                <div className='quadrilaterals-about'>
                    <div className='quadrilateral quadrilateral-first'></div>
                    <div className='quadrilateral quadrilateral-second'></div>
                    <div className='quadrilateral quadrilateral-third'></div>
                    <div className='quadrilateral quadrilateral-fourth'></div>
                    <div className='quadrilateral quadrilateral-fifth'></div>
                </div>
                <div className='container-paragraph-and-logo'>
                    <p className='paragraph-about paragraph-about-bold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <img
                        className='logo-highest'
                        src={beardevLogoHighest}
                        alt='Beardev Logo'
                    />
                </div>
            </div>
        </AboutResponsiveStyled>
    );
};

export default AboutResponsive;
