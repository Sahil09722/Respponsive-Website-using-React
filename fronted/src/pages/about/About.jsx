import Secondheader from "../../component/Secondheader";
import Headerimage from "../../images/header_bg_1.jpg";
import aboutImage1 from "../../images/about1.jpg";
import aboutImage2 from "../../images/about2.jpg";
import aboutimage3 from "../../images/about3.jpg";
import "./about.css";

const about = () => {
  return (
    <>
      <Secondheader title="About Us" image={Headerimage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
        architecto fugit aperiam facere vitae veritatis blanditiis explicabo
        harum et doloribus ipsa tempore quod mollitia expedita corrupti, itaque
        laborum ipsum vero.
      </Secondheader>
      <article className="about_story">
        <div className="container about_story_container">
          <div className="about_section-image">
            <img src={aboutImage1} alt="About Story Image1" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              illo molestiae fugit ut dolorum, odio totam tempora quibusdam
              dolore! Sit ipsum temporibus fugit praesentium aut id incidunt
              placeat voluptate optio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              placeat, nesciunt, enim facilis delectus asperiores, similique quo
              illo eaque repellendus nostrum natus! Id impedit, illo accusamus
              magni nesciunt blanditiis nemo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vero?
            </p>
          </div>
        </div>
      </article>
      <article className="about_vision">
        <div className="container about_vision_container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              illo molestiae fugit ut dolorum, odio totam tempora quibusdam
              dolore! Sit ipsum temporibus fugit praesentium aut id incidunt
              placeat voluptate optio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              placeat, nesciunt, enim facilis delectus asperiores, similique quo
              illo eaque repellendus nostrum natus! Id impedit, illo accusamus
              magni nesciunt blanditiis nemo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vero?
            </p>
          </div>
          <div className="about_section-image">
            <img src={aboutImage2} alt="About vision  Image1" />
          </div>
        </div>
      </article>
      <article className="about_mission">
        <div className="container about_mission_container">
          <div className="about_section-image">
            <img src={aboutimage3} alt="About Mission  Image1" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              illo molestiae fugit ut dolorum, odio totam tempora quibusdam
              dolore! Sit ipsum temporibus fugit praesentium aut id incidunt
              placeat voluptate optio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              placeat, nesciunt, enim facilis delectus asperiores, similique quo
              illo eaque repellendus nostrum natus! Id impedit, illo accusamus
              magni nesciunt blanditiis nemo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vero?
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default about;
