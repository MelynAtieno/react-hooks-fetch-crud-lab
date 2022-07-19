import React from "react";

function QuestionItem({ question, onDeleteClick, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function ClickDelete() {
    onDeleteClick(id);
  }

  function ChangeAnswer(event) {
    onAnswerChange(id, parseInt(event.target.value));
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
      
        Correct Answer:
        <select defaultValue={correctIndex} onChange = {ChangeAnswer}>{options}</select>
      </label>
      <button onClick={ClickDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
