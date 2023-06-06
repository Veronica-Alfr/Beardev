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

    .container-nav-and-logo {
        display: flex;
        justify-content: space-around;
        width: 100vw;

        background: rgba(87, 87, 86, 0.44);
    }

    .logo-with-name {
        display: none;
    }

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
        margin-left: 10em;
    }

    .flag-Brazil {
        margin-right: 1em;
    }

    #menu-bar {
        display: none;
    }

    @media (max-width: 480px) {
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

        display: flex;

        .container-header-and-logo {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100vw;
        }

        .logo-with-name {
            display: block;
        }

        .container-button {
            display: none;
        }

        .nav-name {
            font-size: 1.2em;
            font-family: "Roboto";
        }

        button {
            white-space: nowrap;
            margin-bottom: 0;
            margin-top: 2em;
        }

        .container-flags {
            // aqui
            display: flex;
            align-items: end;
            justify-content: flex-end;

            margin-top: 2em;
        }

        .flag-Brazil,
        .flag-USA {
            width: 100%;
        }

        .logo {
            display: none;
        }

        #menu {
            padding-right: 2em;
            padding-left: 2em;

            margin-top: -0.5em;

            position: absolute;
            z-index: 1;
            top: 0;
            right: 0;
        }

        #menu-bar {
            display: block;
            width: 2em;
            margin: 1.85em 0 1.25em 0;
        }

        #menu-buttons {
            margin-top: 3em;
        }

        .bar {
            height: 0.2em;
            width: 100%;
            background-color: white;
            display: block;
            border-radius: 0.5em;
            transition: 0.3s ease;
        }

        #bar1 {
            transform: translateY(-0.3em);
        }

        #bar3 {
            transform: translateY(0.25em);
        }

        /* .router-name::after {
            display: none;
        }

        .router-name .nav-name{
            font-weight: 700;
        } */

        .change-menu-nav {
            background: linear-gradient(180deg, rgba(112, 111, 111, 0.95) 0%, rgba(112, 111, 111, 0.798) 100%);
            height: 100vh;
            width: 30vh;
        }

        .change {
            display: flex;
            flex-direction: column;
            align-items: end;
        }

        .change-menu {
            padding-left: 80%;
        }

        .change-menu .bar {
            background-color: white;
        }

        .change-menu #bar1 {
            transform: translateY(0.15em) rotateZ(-45deg);
        }

        .change-menu #bar2 {
            opacity: 0;
        }

        .change-menu #bar3 {
            transform: translateY(-0.3em) rotateZ(45deg);
        }
    }
`;

export default HeaderStyled;
