import Footer from "../../Shared/Footer/Footer";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
// import NewsLatter from "./NewsLatter";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            {/* <NewsLatter></NewsLatter> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;