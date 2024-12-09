import CoreBeliefs from "../components/Home/CoreBeliefs";
import FrontSection from "../components/Home/FrontSection";
import Structures from "../components/Home/Structures";

const HomePage: React.FC = () => {
  return (
    <>
      <FrontSection />
      <CoreBeliefs />
      <Structures />
    </>
  );
};

export default HomePage;
