import { Footer, Grid, Hero, Navbar, OurStory, SubBrandsSlider, Testimonials, WholesaleRetail } from "./components"


function App() {

  return (
    <main className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <WholesaleRetail />
      <SubBrandsSlider />
      <Grid />
      <Testimonials />
      <OurStory />
      <Footer />
    </main>
  )
}

export default App
