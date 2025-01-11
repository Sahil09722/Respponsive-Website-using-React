import "./trainers.css";
import SecondHeader from "../../component/Secondheader"
import headerImage from "../../images/header_bg_5.jpg";
import T_card from "../../UI/T_card";
import {trainers} from "../../data"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";

const Trainer = () => {
  return (
    <div className="trainers ">
        <SecondHeader title="Our trainers" image={headerImage}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            minus distinctio voluptate praesentium sed vel temporibus dolorem
            nemo animi, unde aperiam? Eaque exercitationem rem, doloribus rerum
            corporis aperiam expedita modi!
          </p>
        </SecondHeader>
        <div className="trainer-container container">
           {
            trainers.map(({id,image,name,job,socials})=>{
              return <T_card key={id} image={image} name={name} job={job} socials={
                [
                  {icon:<FaInstagram/>,link:socials[0]},
                  {icon:<FaFacebook/>,link:socials[1]},
                  {icon:<FaTwitter/>,link:socials[2]},
                  {icon:<FaLinkedin/>,link:socials[3]}
                ]
              }>
              </T_card>
           })}
        </div>
    </div>
  );
};

export default Trainer;
