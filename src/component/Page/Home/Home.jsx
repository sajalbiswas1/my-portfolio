import Footer from "../../Shared/Footer/Footer";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
// import NewsLatter from "./NewsLatter";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            {/* <NewsLatter></NewsLatter> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;