import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Notfound from './pages/notFound/Notfound'
import Plans from './pages/plans/Plans'
import Trainer from './pages/trainers/Trainer'
import Navbar from './component/Navbar'
import Footer from './component/Footer'


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
   <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='plans' element={<Plans/>}/>
      <Route path='trainers' element={<Trainer/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
