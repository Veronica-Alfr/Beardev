import styled from "styled-components";

const HeaderStyled = styled.header`
    @font-face {
        font-family: "Dense";
        src: url("dense.regular.otf") format("opentype");
        font-style: normal;
        font-weight: 400;
    }

    /* *{
        padding: 0;
        margin: 0;
    } */

    display: flex;
    justify-content: space-around;

    background: rgba(87, 87, 86, 0.44);

    .container-button {
        display: flex;
    }

    button {
        background: transparent;
        position: relative;

        border: 0.25em solid transparent;

        cursor: pointer;

        padding: 0.6em;

        margin-top: 2.55em;
        margin-bottom: 1.75em;
        margin-left: 3.1em;
    }

    .router-name::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.3em;
        background-color: #ffffff;
        border-radius: 1em;
    }

    .nav-name {
        color: #f6f6f6;
        font-family: "Dense";
        font-size: 2.25em;
    }

    .container-flags {
        display: flex;
    }

    .flag-Brazil {
        margin-right: 1em;
    }

    @media (max-width: 480px) {
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: end;
        padding-right: 2em;
        padding-left: 2em;
        width: 40vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        

        .container-button {
            display: flex;
            flex-direction: column;
            align-items: end;
        }
        
        .nav-name {
            font-size: 1.2em;
            // width: 10em;
            font-family: 'Roboto';
        }

        button {
            white-space: nowrap;
            margin-bottom: 0;
            margin-top: 2em;
            //margin-left: 1em;

        }

        .container-flags {
            display: flex;
            align-items: end;
            justify-content: flex-end;

            margin-top: 2em;
        }

        .flag-Brazil, .flag-USA {
            width: 30%;
        }

        .logo {
            display: none;
        }


    }
`;

export default HeaderStyled;
