import { About } from './components/about'
import { Contacts } from './components/contacts'
import { Experients } from './components/expierens'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header'
import { Nav } from './components/nav'
import { Portfolio } from './components/portfolio'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'

function App() {
   return (
      <>
         <Header />
         <Nav />
         <About />
         <Experients />
         {/* <Services /> */}
         <Portfolio />
         <Testimonials />
         <Contacts />
         <Footer />
      </>
   )
}

export default App
