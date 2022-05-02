import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm";

function App() {
  const [theme, setTheme] = React.useState("light");
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color:theme === "light" ? "black" : "white",
        height: "100vh",
      }}
    >
      <Navbar title="TextUtils" toggleTheme={toggleTheme} theme={theme} />
      <TextForm heading="Enter the text to analyze" theme={theme} />
    </div>
  );
}

export default App;
