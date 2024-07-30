import 'bootstrap/dist/css/bootstrap.min.css';


import { Navbar,Footer,Call, Faq, Services, About, Hero} from './components';
import { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className='container'>
 
       <Navbar /> 
      <Hero />
      <About />
      <Services />
      <Faq />
      <Call />
      <Footer />
      
    </div>
  )
}

export default App
