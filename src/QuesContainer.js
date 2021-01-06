import React, { useState } from "react";
import QuesForm from "./QuesForm";
import QuesTable from "./QuesTable";
import "./common.css";

const QuesContainer = () => {
  const [display, setDisplay] = useState(1);
  const [answers, setAnswers] = useState();
  return (
    <div>
      <header className="header">Questionare</header>
      {display === 1 && (
        <div>
          <button className="startTestButton" onClick={() => setDisplay(2)}>
            Start Test
          </button>
        </div>
      )}
      {display === 2 && (
        <div>
          <QuesForm
            showTable={(values) => {
              setAnswers(values);
              setDisplay(3);
            }}
          />
        </div>
      )}
      {display === 3 && (
        <div>
          <QuesTable answers={answers} />
        </div>
      )}
    </div>
  );
};

export default QuesContainer;
