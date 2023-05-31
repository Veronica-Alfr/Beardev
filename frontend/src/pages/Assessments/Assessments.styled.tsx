import styled from "styled-components";

const AssessmentsStyled = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Roboto&display=swap');
    
    * {
        padding: 0;
        margin: 0;
    }

    background: #3C3C3B;
    width: 100%;
    height: 100%;

    .container-all-text {
        display: flex;
        flex-direction: column;

        padding-top: 5em;
        padding-left: 6.45em;
        padding-right: 6.45em;
    }

    h1 {
        font-family: 'Antonio';
        font-weight: 100;
        font-size: 3em; // o tamanho da letra tem que ultrapassar pouco o card
        color: #FFFFFF;

        margin-left: 1em;
    }

    .container-assessments {
        display: flex;
        justify-content: center;
    }

    .container-customers-reviews {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 1.5em;
        margin-bottom: 4.4em;
        padding: 2em;

        line-height: 150%;
    }

    .photo-customer {
        // background: #D9D9D9;
        background: #9D9D9C;
        border-radius: 100%;

        width: 10em;
        height: 10em;

        margin-bottom: 1.35em;
    }

    p {
        color: #9D9D9C;
        font-family: 'Roboto';
    }

    .name-customer {
        font-weight: 700;
        font-size: 1.6em;
        
        margin-bottom: 0.5em;
    }

    .star {
        margin-bottom: 0.2em;
    }

    .customer-review {
        font-size: 0.95em;
    }
`;

export default AssessmentsStyled;
