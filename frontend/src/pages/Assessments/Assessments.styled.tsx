import styled from "styled-components";

const AssessmentsStyled = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Roboto&display=swap");

    background: #3c3c3b;
    width: 100%;
    height: 100%;

    .slider-container {
        position: relative;
    }

    .slider-container .slick-slide {
        padding: 2em;
    }

    .slider-container .slick-track {
        margin: 0 18em;
    }

    .slick-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }

    .slick-next {
        right: -50px;
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
        font-size: 3.5em;
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

    @media (max-width: 480px) {
        h1 {
            font-size: 1.9em;
        }

        .photo-customer {
            width: 6em;
            height: 6em;
        }

        .name-customer {
            font-size: 1.2em;
        }

        .container-customers-reviews {
            min-width: 215%;
            margin-top: -2em;
        }

        .customer-review {
            font-size: 0.8em;
        }

        .star {
            width: 10%;
        }

        .slider-container {
            margin-bottom: 8em;
        }

        .slider-container .slick-slider {
            display: flex;
            align-items: center;
        }

        .slider-container .slick-slide {
            padding: 6em;
        }

        .slider-container .slick-track {
            display: flex;
            margin: 0 12em 16em;
        }

        .slick-next {
            right: -35px;
        }

        /* .slick-initialized .slick-slide {
            display: flex;
        } */

        /* .slick-initialized .slick-slide {
            display: flex;
            justify-content: space-between;
        } */
    }
`;

export default AssessmentsStyled;
