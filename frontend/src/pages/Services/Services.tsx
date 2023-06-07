import React from "react";
import Header from "../../components/Header/Header";
import { servicesData } from "./data/servicesData";
import Slider from "react-slick";
import "./slick/slick-carousel.css";
import "./slick/slick-theme.css";
import ServiceStyled from "./Services.styled";

const Services: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const maxToShow = 4;

    return (
        <ServiceStyled>
            <Header />
            <div className='container-all-text'>
                <h1>Nossos Serviços</h1>
                <Slider {...settings} className='slider-container'>
                    {servicesData.map(
                        ({ title, service }, index) =>
                            index < maxToShow && (
                                <div className='container-services' key={index}>
                                    <div className='img-service' />
                                    <p className='title-service'>{title}</p>
                                    <div className='container-about-service'>
                                        <p className='about-service'>
                                            {service}
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </Slider>
            </div>
        </ServiceStyled>
    );
};

export default Services;
