import "./contact.css";
import headerImage from "../../images/header_bg_2.jpg";
import Secondheader from "../../component/Secondheader";
import  { CiMail } from "react-icons/ci";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const contact = () => {
  return (
    <div>
      <Secondheader title="Contact Us" image={headerImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        tempora voluptatem quis, accusantium voluptate ab, voluptas inventore
        quisquam facere sint quos! Minima labore consequatur voluptate nihil
        maiores ratione commodi officiis?
      </Secondheader>
      <div className="Contact-Contents container">
        <div className="mailicon"><a href="mailto:sahilrampurkar77@gmail.com" target="_blank" rel="noreferrer noopener"><CiMail/></a></div>
        <div className="facebookicon"><a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><FaFacebookMessenger/></a></div>
        <div className="whatsappicon"><a href="https:/wa.me/+8275945435" target="_blank" rel="noreferrer noopener"><FaWhatsapp/></a></div>
      </div>
    </div>
  );
};

export default contact;
