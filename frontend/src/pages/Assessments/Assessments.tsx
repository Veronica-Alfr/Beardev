import React from "react";
import Header from "../../components/Header/Header";
import AssessmentsStyled from "./Assessments.styled";
import { customerReviewsData } from "./data/customerReviewsData";
import star from "../../assets/icons/star.svg";
import Slider from "react-slick";
import "./slick/slick-carousel.css";
import "./slick/slick-theme.css";

const Assessments: React.FC = () => {
    const rating = [star, star, star, star, star];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <AssessmentsStyled>
            <Header />
            <div className='container-all-text'>
                <h1>Avaliação de clientes</h1>
                <Slider {...settings} className='slider-container'>
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
                                <div className='container-review'>
                                    <p className='customer-review'>{review}</p>
                                </div>
                            </div>
                        )
                    )}
                </Slider>
            </div>
        </AssessmentsStyled>
    );
};

export default Assessments;
