import React, { useState } from "react";
import { questions } from "./data/data.json";
import "./common.css";

const QuesForm = (props) => {
  const [key, setKey] = useState(1);
  const [ans, setAns] = useState([]);
  const [skipped, setSkipped] = useState(0);
  const len = Object.keys(questions).length;

  const handleClick = () => {
    let values = document.getElementsByName("a" + key);
    let flag = 0;
    values.forEach((x, i) => {
      if (x.checked === true) {
        const temp = ans;
        temp.push({ ques: key, ans: i });
        setAns(temp);
        flag = 1;
      }
    });
    if (flag === 0) {
      const temp = ans;
      temp.push({ ques: key, ans: "Not Answered" });
      setAns(temp);
      setSkipped(skipped + 1);
    }
    values.forEach((x) => (x.checked = false));
    if (key < len) {
      setKey(key + 1);
    }
  };
  return (
    <div>
      <div className="dataInfo">
        <div className="total">Total: {len}</div>
        <div className="solved">Solved: {ans.length - skipped}</div>
        <div className="skipped">Skipped: {skipped}</div>
        <div className="unsolved">Unsolved: {len - ans.length}</div>
      </div>
      <div className="question">
        <div className="questionDiv">
          Q{key} : {questions[key].title} ?
        </div>
        <div className="options">
          {questions[key] &&
            questions[key].options &&
            questions[key].options.map((x) => {
              return (
                <div className="optionsDiv">
                  <label>
                    <input className="checkbox" type="radio" name={"a" + key} />
                    <span className="optionText">{x}</span>
                  </label>
                </div>
              );
            })}
        </div>
        <div>
          {key === len ? (
            <button onClick={props.showTable(ans)}>Submit</button>
          ) : (
            <button className="nextBtn" onClick={handleClick}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuesForm;
