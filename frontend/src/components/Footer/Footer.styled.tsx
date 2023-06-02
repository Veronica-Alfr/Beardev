import styled from "styled-components";

const FooterStyled = styled.footer`
    @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

    background: #3c3c3b;
    box-shadow: 4px 0px 3px 2px rgba(87, 87, 86, 0.44);

    position: relative;

    width: 100%;
    height: 55vh;

    .container-footer span {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container-buttons-logo {
        display: flex;
        justify-content: space-between;

        padding-top: 3.75em;
    }

    .container-category {
        margin-left: 9.5em;
    }

    .logo-with-name {
        margin-top: -5em;
        margin-right: 8.25em;
    }

    .container-button {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    button {
        background: transparent;
        border: none;

        margin-top: 0.6em;
        margin-left: 0.7em;
    }

    .nav-name {
        font-family: "Roboto";
        font-weight: 400;
    }

    .container-contacts {
        margin-top: 3em;
        margin-left: 9.5em;
    }

    .container-social-medias {
        display: flex;
        width: 12%;
        justify-content: space-around;
    }

    .icon-media {
        margin-top: 0.65em;
    }

    span {
        color: #f6f6f6;
        font-family: "Inter";
    }
`;

export default FooterStyled;
