import styled from "styled-components";

const ContactStyled = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Roboto:wght@700&display=swap");

    background: linear-gradient(
        95.91deg,
        #3c3c3b 4.85%,
        #9d9d9c 67.19%,
        #f6f6f6 99.26%
    );

    position: relative;

    .container-contact {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: 9.5em;
        margin-bottom: 10em;
    }

    h1 {
        font-family: "Antonio";
        font-weight: 100;
        font-size: 5em;
        margin-left: -2em;
    }

    p {
        font-family: "Roboto";
        font-weight: 700;
    }

    h1,
    p {
        color: #f6f6f6;
    }

    .container-datas-icons-contact {
        display: flex;
        align-items: center;
    }

    .container-infos-contact {
    }

    .icon-social-media {
        margin: 0.5em;
        margin-right: 1.3em;
    }

    .logo {
        position: absolute;
        margin-top: -30%;
        z-index: 0;
    }
`;

export default ContactStyled;
