// Home.jsx
import Hero from '../components/Hero.jsx'
import BookPublishingSection from "../components/BookPublishingSection.jsx";
import BottomBar from "../components/BottomBar.jsx";
import PublishingHeroBanner from "../components/PublishingHeroBanner.jsx";
import PublishingPlatforms from "../components/PublishingPlatforms.jsx";
import PublishingProcessSection from "../components/PublishingProcessSection.jsx";
import PublishedWorksSection from "../components/PublishingWorksSection.jsx";
import StoryCTABanner from "../components/StoryCTABanner.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";

const Home = () => {
  return (
    <div>
      <Hero client:load />
      <PublishingPlatforms client:load />
      <BookPublishingSection client:load /> 
      <PublishingHeroBanner client:load />
      <PublishedWorksSection client:load />
      <PublishingProcessSection client:load />
      <StoryCTABanner client:load />
      <TestimonialsSection client:load />
      <BottomBar client:load />
    </div>
  );
};

export default Home;
