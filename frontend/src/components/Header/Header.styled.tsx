import styled from "styled-components";

const HeaderStyled = styled.header`
    @font-face {
        font-family: "Dense";
        src: url("dense.regular.otf") format("opentype");
        font-style: normal;
        font-weight: 400;
    }

    display: flex;
    justify-content: space-around;

    background: rgba(87, 87, 86, 0.44);

    .container-button {
        display: flex;
    }

    button {
        background: transparent;

        border: 0.25em solid transparent;

        padding-left: 0.8em;
        padding-right: 0.8em;

        margin-top: 2.55em;
        margin-bottom: 1.75em;
        margin-left: 3.1em;
    }

    button:active {
        border-bottom-color: #ffffff;
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
