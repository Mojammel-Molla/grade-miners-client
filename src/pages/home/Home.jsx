import Footer from '../Footer';

import Banner from './Banner';
import FAQSection from './FAQSection';
import AllAssignments from './assignments/AllAssignments';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllAssignments></AllAssignments>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
