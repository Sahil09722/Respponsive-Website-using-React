import Faq from "../../component/Faq"
import Header from "../../component/Header"
import Programs from "../../component/Programs"
import Values from "../../component/Values"
import Testimonial from "../../component/Testimonial"
import "./home.css"

const home = () => {
  return (
    <>
       <Header />
       <Programs/>
       <Values/>
       <Faq/>
       <Testimonial />

    </>
  )
}

export default home
