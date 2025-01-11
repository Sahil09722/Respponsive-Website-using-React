import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Temp = ({ question, answer }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <article
      className="freq-container"
      onClick={() => setIsShowing((prev) => !prev)}
    >
      <div className="freq_Qst">
        <div className="question">
          <h4>{question}</h4>
          <button>{isShowing ? <FaMinus /> : <FaPlus />}</button>
        </div>
        <div className={`answer ${isShowing ? "show-answer" : "hide-answer"}`}>
          {isShowing && <p>{answer}</p>}
        </div>
      </div>
    </article>
  );
};

export default Temp;
