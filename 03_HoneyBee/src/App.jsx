import "./App.css";
import Footer from "./components/Footer/Footer";
import BeeAnimation from "./components/GSAP/BeeAnimation";
import Header from "./components/Header/Header";
import FirstSection from "./components/Home/FirstSection";
import FourthSection from "./components/Home/FourthSection";
import SecondSection from "./components/Home/SecondSection";
import ThirdSection from "./components/Home/ThirdSection";

const App = () => {
    return (
        <div className="w-full h-full text-black overflow-x-hidden">
            <Header />
            <FirstSection />
            <BeeAnimation />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <Footer />
        </div>
    );
};

export default App;
