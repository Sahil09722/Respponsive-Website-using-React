import { FaCrown } from "react-icons/fa";
import { programs } from "../data.js";
import SectionHead from "./SectionHead.jsx";
import Card from "../UI/Card.jsx";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
      <div className="programs-head">
          <SectionHead icon={<FaCrown />} title="Programs" />
        </div>
        <div className="programs_wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs_program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <FaArrowCircleRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
