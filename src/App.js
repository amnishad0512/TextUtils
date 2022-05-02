import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm";
import { About } from "./components/About";
import {Route, Routes } from "react-router-dom";
import { Error } from "./components/Error";

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
        color: theme === "light" ? "black" : "white",
        height: "100vh",
      }}
    >
      <Navbar title="TextUtils" toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="Enter the text to analyze"
              theme={theme}
              alert={alert}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
