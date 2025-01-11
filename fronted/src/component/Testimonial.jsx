import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import SectionHead from "./SectionHead";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

// import View from "../UI/View";
import { testimonials } from "../data";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const handlePrevClick = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  const nextBtnClick = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <>
      <div className="container testimonial-container">
        <div className="testimonial-head">
          <SectionHead icon={<ImQuotesLeft />} title={"Testimonial"} />
        </div>
        <div className="testimonial_wrapper">
          <article>
            <div className="views-Box">
              <div className="view_img">
                <img src={avatar} alt="Image of Student" />
              </div>
              <div className="view_text">
                <p>"{quote}"</p>
              </div>
              <div className="view_job">
                <h4>{job}</h4>
              </div>
              <div className="view_name">{name}</div>
            </div>
          </article>
        </div>
          <div className="btns">
            <button className="change-btn-prev" onClick={handlePrevClick}>
              <GrFormPrevious />
            </button>
            <button className="change-btn-next" onClick={nextBtnClick}>
              <GrFormNext />
            </button>
            </div>
      </div>
    </>
  );
};

export default Testimonial;
