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
`;

export default HeaderStyled;
