import styled from "styled-components";

const AboutStyled = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

    .container-about {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-left: 5em;
    }

    .container-paragraphs-about {
        margin-bottom: 1em;
        margin-right: 8em;

        width: 62ch;

        font-family: Roboto;
    }

    h1 {
        font-size: 2.45em;
        font-weight: 700;
    }

    .paragraph-about {
        margin-top: 25px;

        font-size: 0.9em;
    }

    .paragraph-about-bold {
        font-size: 1.4em;
        font-weight: 700;
    }

    .logo-highest {
        width: 40%;
        margin-top: 2em;
    }
`;

export default AboutStyled;
