import { ContactUs, Footer, Grid, Hero, Navbar, OurStory, SubBrandsSlider, WholesaleRetail } from "./components"


function App() {

  return (
    <main className="overflow-x-hidden max-w-[1600px] flex flex-col justify-center">
      <Navbar />
      <Hero />
      <WholesaleRetail />
      <SubBrandsSlider />
      <Grid />
      <ContactUs />
      <OurStory />
      <Footer />
    </main>
  )
}

export default App
