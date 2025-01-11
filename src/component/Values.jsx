import SectionHead from "./SectionHead";
import { IoDiamondOutline } from "react-icons/io5";
import { values } from "../data";
import Cards from "../UI/Card";
import Image from "../images/values.jpg";

const Values = () => {
  return (
    <section className="values container">
      <div className=" values_container">
        <div className="values_image">
          <img src={Image} alt="Values Image" />
        </div>
        <div className="values-right">
          <div className="values-head">
            <SectionHead icon={<IoDiamondOutline />} title="Values" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum voluptatibus.</p>
          <div className="values_wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Cards key={id} className="values_value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </Cards>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
