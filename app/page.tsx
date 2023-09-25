import HomePageHeroSection from './components/HomePageHeroSection'
import HomePageFeaturesSection from "./components/HomePageFeaturesSection"
import HomePageTestimonialsSection from "./components/HomePageTestimonialsSection"
import HomePageCtaSection from "./components/HomePageCtaSection"
import HomePageFooter from "./components/HomePageFooter"

export default function Home() {
  return (
   <>
      <HomePageHeroSection />
      <HomePageFeaturesSection />
      <HomePageTestimonialsSection />
      <HomePageCtaSection />
      <HomePageFooter />
   </>
  )
}
