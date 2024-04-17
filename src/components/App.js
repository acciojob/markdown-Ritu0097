import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setText(text);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      <textarea
        name="text"
        value={text}
        id="text"
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      ></textarea>

      <div className="preview">
        {loading ? <p className="loading">Loading...</p> : <p>{text}</p>}
      </div>
    </div>
  );
};

export default App;