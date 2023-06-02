import Header from "../../components/Header/Header";
import HomeStyled from "./Home.styled";

const Home = () => {
    return (
        <HomeStyled>
            <Header />
            <div className='container-text-home'>
                <h1>Lorem Ipsum</h1>
                <div className='container-paragraph'>
                    <p className='paragraph-home'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
            </div>
        </HomeStyled>
    );
};

export default Home;
