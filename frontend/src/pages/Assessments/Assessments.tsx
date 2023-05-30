import React from "react";
import Header from "../../components/Header/Header";
import AssessmentsStyled from "./Assessments.styled";
import { customerReviewsData } from "./data/customerReviewsData";

const Assessments: React.FC = () => {
    return (
        <AssessmentsStyled>
            <Header />
            <h1>Lorem Ipsum</h1>
                {
                    customerReviewsData.map(({ name, rating, review }) => {
                        <div className="container-customers-reviews">
                            <div className="photo-customer" />
                                <p className="name-customer">{ name }</p>
                            <img src={ rating } alt="Rating Star"/>
                            <p className='customer-review'>{ review }</p>
                        </div>
                    })
                }
        </AssessmentsStyled>
    );
};

export default Assessments;
