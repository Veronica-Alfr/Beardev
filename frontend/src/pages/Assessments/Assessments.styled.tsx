import styled from "styled-components";

const AssessmentsStyled = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Roboto&display=swap");

    * {
        padding: 0;
        margin: 0;
    }

    background: #3c3c3b;
    width: 100%;
    height: 100%;

    .slider-container {
        position: relative;
    }

    .slider-container .slick-slide {
        padding: 2em;
    }

    .slick-arrow {
        position: absolute;
        top: 48%;
        transform: translateY(-50%);
        z-index: 1;
    }

    .slider-container .slick-track {
        margin: 0 18em;
    }

    .container-all-text {
        display: flex;
        flex-direction: column;
        padding-top: 5em;
        padding-left: 6.45em;
        padding-right: 6.45em;
    }

    h1 {
        font-family: "Antonio";
        font-weight: 100;
        font-size: 4.5em;
        color: #ffffff;

        margin-left: 0.5em;
    }

    .container-customers-reviews {
        display: flex !important;
        flex-direction: column;
        align-items: center;

        margin-top: 1.5em;
        margin-bottom: -22em;
        padding: 2em;

        border-radius: 0.6em;

        line-height: 150%;
    }

    .container-customers-reviews:hover {
        background: #f6f6f6;
    }

    .container-customers-reviews:hover .customer-review {
        color: #3c3c3b;
    }

    .container-customers-reviews:hover .name-customer {
        color: #575756;
    }

    .container-customers-reviews:hover .photo-customer {
        background: #d9d9d9;
    }

    .photo-customer {
        background: #9d9d9c;
        border-radius: 100%;

        width: 10em;
        height: 10em;

        margin-bottom: 1.35em;
    }

    p {
        color: #9d9d9c;
        font-family: "Roboto";
    }

    .name-customer {
        font-weight: 700;
        font-size: 1.6em;

        margin-bottom: 0.5em;
    }

    .stars {
        display: flex;
        margin-bottom: 0.3em;
    }

    .star {
        margin: 0.4em;
    }

    .container-review {
        padding-right: 1em;
        padding-left: 1em;
    }

    .customer-review {
        font-size: 0.95em;
    }
`;

export default AssessmentsStyled;
