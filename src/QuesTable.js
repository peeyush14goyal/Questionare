import React from "react";
import "./common.css";

const QuesTable = (props) => {
  console.log(props);
  return (
    <div className="showtable">
      <span className="headerText">Show table</span>
      <table className="tableDisplay">
        <thead>
          <tr>
            <th>Question No.</th>
            <th>Option</th>
          </tr>
        </thead>
        {props.answers &&
          props.answers.map((x) => (
            <tr>
              <td>{x.ques}</td>
              <td>{x.ans}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default QuesTable;
