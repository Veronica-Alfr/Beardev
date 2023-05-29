import styled from "styled-components";
import backgroundScreenNotebook from "../../assets/background/background-home.svg";

const HomeStyled = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

    * {
        padding: 0;
        margin: 0;
    }

    background-image: url(${backgroundScreenNotebook});
    // linear-gradient(
    //     67.47deg,
    //     rgba(60, 60, 59, 0.8) 5.3%,
    //     rgba(157, 157, 156, 0.8) 48.92%,
    //     rgba(217, 217, 217, 0.8) 94.93%
    // );

    width: 100vw;
    height: 100vh;

    background-size: 100%;
   // background-position: left top;

    @font-face {
        font-family: "Dense";
        src: url("dense.regular.otf") format("opentype");
        font-style: normal;
        font-weight: 400;
    }

    .container-text-home {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        margin-top: 10em;
    }

    h1 {
        font-size: 6em;
        font-family: "Dense";
        color: #f6f6f6;
    }

    .container-paragraph {
        display: flex;
        width: 40em;
    }

    .paragraph-home {
        font-size: 2.05em;
        font-family: "Roboto";
        text-align: center;
        color: #f6f6f6;

        margin-top: 1em;
    }
`;

export default HomeStyled;
