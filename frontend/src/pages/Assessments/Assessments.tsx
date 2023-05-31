import React from "react";
import Header from "../../components/Header/Header";
import AssessmentsStyled from "./Assessments.styled";
import { customerReviewsData } from "./data/customerReviewsData";
import star from "../../assets/icons/star.svg";

const Assessments: React.FC = () => {
    const rating = [star, star, star, star, star];
    return (
        <AssessmentsStyled>
            <Header />
            <div className='container-all-text'>
                <h1>Avaliação de clientes</h1>
                <div className='container-assessments'>
                    {customerReviewsData.map(
                        ({ nameCustomer, review }, index) => (
                            <div
                                className='container-customers-reviews'
                                key={index}
                            >
                                <div className='photo-customer' />
                                <p className='name-customer'>{nameCustomer}</p>
                                <div className='stars'>
                                    {rating.map(star => (
                                        <img
                                            className='star'
                                            src={star}
                                            alt='Rating Star'
                                        />
                                    ))}
                                </div>
                                <p className='customer-review'>{review}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </AssessmentsStyled>
    );
};

export default Assessments;
