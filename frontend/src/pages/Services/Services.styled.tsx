import styled from "styled-components";

const ServiceStyled = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

    background: #f6f6f6;
    width: 100%;
    height: 100%;

    .slider-container {
        position: relative;
    }

    .slider-container .slick-slide {
        padding: 0.5em;
    }

    .slick-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }

    .slider-container .slick-track {
        margin: 0 24em;
    }

    .slick-prev:before,
    .slick-next:before {
        color: black;
    }

    .container-all-text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-top: 5em;
        padding-left: 6.45em;
        padding-right: 6.45em;
    }

    h1 {
        font-family: "Roboto";
        font-weight: 700;
        font-size: 3.5em;
        color: #3c3c3b;

        margin-left: 0.8em;
    }

    .container-services {
        display: flex !important;
        flex-direction: column;
        align-items: center;

        margin-top: 1.5em;
        margin-bottom: -20em;
        padding: 1em;

        line-height: 150%;
    }

    .container-services:hover .img-service {
        background: #d9d9d9;
    }

    .container-services:hover .title-service {
        color: #575756;
    }

    .container-services:hover .about-service {
        color: #3c3c3b;
    }

    .img-service {
        background: #9d9d9c;
        border-radius: 0.3em;

        width: 10em;
        height: 10em;

        margin-bottom: 1em;
    }

    p {
        color: #9d9d9c;
        font-family: "Roboto";
    }

    .title-service {
        font-weight: 700;
        font-size: 1.6em;

        margin-bottom: 0.5em;
    }

    .container-about-service {
        padding: 1.5em;
    }

    .about-service {
        font-size: 0.95em;
    }
`;

export default ServiceStyled;
