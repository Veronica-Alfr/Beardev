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

        cursor: pointer;

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

    @media (max-width: 480px) {
        p {
            font-size: 1em;
        }

        .container-buttons-logo {
            min-width: 120%;
            padding-top: 3em;
        }

        .container-button {
           margin-left: -0.5em;
        }

        .container-category {
            margin-left: 4em;
        }

        .container-contacts {
            margin-left: 4em;
        }

        .logo-with-name {
            width: 8em;
        }

        .phrase-follow-us {
            font-size: 0.9em;
            margin-top: -1.5em;
        }

        .container-social-medias {
            margin-left: 1em;
            margin-bottom: 1.5em;
        }

        .icon-media {
            width: 30%;
            margin-right: 0.4em;
        }

        span {
            font-size: 0.9em;
        }
    }
`;

export default FooterStyled;
