import styled from "styled-components";

const AboutResponsiveStyled = styled.section`
    display: none;

    @media (max-width: 480px) {
        display: block;
        background: #f6f6f6;

        .container-about-responsive {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            font-size: 1.6em;
        }

        .container-about {
            display: flex;
            flex-direction: column;
        }

        .container-title-paragraph-initial {
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 45ch;
            margin-top: 4em;
            margin-bottom: 4em;
        }

        .paragraph-about {
            font-size: 0.9em;
            /* padding: 2em; */
            /* padding-left: 2em;
            padding-right: 2em; */
        }

        .paragraph-third {
            display: none;
        }

        .quadrilaterals-about {
            display: flex;
            flex-wrap: wrap;

            margin-bottom: 3em;
        }

        .quadrilateral {
            background-color: #d9d9d9;
            border: 0.05em solid #ffffff;
        }

        .quadrilateral-first {
            width: 16em;
            height: 8em;
        }

        .quadrilateral-second {
            width: 6em;
            height: 8em;
        }

        .quadrilateral-third {
            width: 7.7em;
            height: 8em;
        }

        .quadrilateral-fourth {
            width: 20em;
            height: 6em;
        }

        .quadrilateral-fifth {
            width: 9.8em;
            height: 6em;
        }

        .container-paragraph-and-logo {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

            width: 38ch;
            margin-bottom: 4em;
        }
    }
`;
export default AboutResponsiveStyled;
