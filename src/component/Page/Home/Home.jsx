import Footer from "../../Shared/Footer/Footer";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Service from "./Service";
import Skill from "./Skill";
// import NewsLatter from "./NewsLatter";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Skill></Skill>
            <Service></Service>
            <Contact></Contact>
            {/* <NewsLatter></NewsLatter> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;