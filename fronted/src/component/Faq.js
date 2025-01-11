import { faqs } from "../data";
import SectionHead from "./SectionHead";
import { FaQuestion} from "react-icons/fa";
import Temp from "../UI/Temp.jsx";

const Faq = () => {
  return (
    <div className="freq_ques container">
      <div className="freq_ques-head ">
        <SectionHead icon={<FaQuestion />} title={"FAQs"} />
      </div>
      <div className="freqs-container">
        {faqs.map(({ id, question,answer}) => {
          return (
            <Temp key={id} question={question} answer={answer}/>  );
        })}
      </div>
    </div>
  );
};

export default Faq;
