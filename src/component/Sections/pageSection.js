// Sections
import HeroSection from "./components/HeroSection";
import Question from "./components/Question";
import Workbooks from "./components/Workbooks";
import Syllabus from "./components/Syllabus";
import AboutWB from "./components/AboutWB";
import AboutAuthor from "./components/AboutAuthor";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";


function PageSection() {
  return (
    <div>
      <HeroSection />
      <Question />
      <Workbooks />
      <Syllabus />
      <AboutWB />
      <AboutAuthor />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default PageSection;
