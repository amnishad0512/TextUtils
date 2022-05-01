import React from "react";

export const TextForm = ({ heading }) => {
  const [text, setText] = React.useState("");
  const [char, setChar] = React.useState(0);
  const [word, setWord] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [line, setLine] = React.useState(0);
  function handleChange(e) {
    let text = e.target.value;
    setText(text);
    setChar(text.length);
    setWord(
      text
        .trim()
        .split(" ")
        .filter((element) => element != "" || element === "\n").length
    );
    setTime(
      text.length === 0 ? 0 : (0.008 * text.trim().split(" ").length).toFixed(3)
    );
    setLine(text.split("\n").length);
  }

  function changeUppercase() {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  }
  function clear() {
    setText("");
    setChar(0);
    setWord(0);
    setTime(0);
    setLine(0);
  }
  function changeLowercase() {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  }

  return (
    <div className="container my-3">
      <h5>{heading}</h5>
      <textarea
        className="form-control my-3"
        id="myBox"
        rows="8"
        value={text}
        onChange={handleChange}
      ></textarea>
      <h6>
        Character Count: {char} | Word Count: {word} | Line Count: {line}
      </h6>
      <h6>Minutes to read: {time}</h6>
      <button className="btn btn-primary" onClick={changeLowercase}>
        lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={changeUppercase}>
        UPPERCASE
      </button>
      <button className="btn btn-primary mx-1" onClick={clear}>
        Clear
      </button>
    </div>
  );
};
