import BookPublishingSection from "../components/BookPublishingSection"
import Hero from "../components/Hero"
import PublishingHeroBanner from "../components/PublishingHeroBanner"
import PublishingPlatforms from "../components/PublishingPlatforms"
import PublishingProcessSection from "../components/PublishingProcessSection"
import PublishedWorksSection from "../components/PublishingWorksSection"
import StoryCTABanner from "../components/StoryCTABanner"
import TestimonialsSection from "../components/TestimonialsSection"


const Home = () => {
  return (
    <div>
        <Hero />
        <PublishingPlatforms/>
        <BookPublishingSection/>
        <PublishingHeroBanner/>
        <PublishedWorksSection/>
        <PublishingProcessSection/>
        <StoryCTABanner/>
        <TestimonialsSection/>
    </div>
  )
}

export default Home