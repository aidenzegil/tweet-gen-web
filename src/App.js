import "./sass/App.css";
import { useState } from "react";
import GeneratedThread from "./components/GeneratedThread";
import { useGenerateThread } from "./utils/useGenerateThread";

function App() {
  const [numThreads, setNumThreads] = useState(1);
  const [userTweet, setUserTweet] = useState("");
  const [generate, threads] = useGenerateThread(userTweet, numThreads);
  
  const displayedOutput = GeneratedThread(numThreads, threads);

  const addThread = () => {
    numThreads < 4
      ? setNumThreads(numThreads + 1)
      : alert("Maximum thread amount reached");
  };

  const removeThread = () => {
    numThreads > 1
      ? setNumThreads(numThreads - 1)
      : alert("Minimum thread amount reached");
  };

  return (
    <div className="App">
      <header
        className="Header"
        style={{ top: 0, marginTop: 0, fontSize: 50, padding: 15 }}
      >
        Tweeter Man
      </header>
        <div
          id="application"
          className="Container"
          style={{ display: "block" }}
        >
          <header className="Header">
            Put the start of your thread here, I'll take care of the rest!
          </header>
          <textarea
            className="Input"
            placeholder="Write the beginning of your thread here, the more descriptive the better the result!"
            maxLength="280"
            value={userTweet}
            onChange={(e) => setUserTweet(e.target.value)}
          />
          <button className="Btn" onClick={generate}>
            Submit
          </button>
          <header className="Header">Here's what I came up with!</header>
          {displayedOutput}
          <div className="BtnContainer">
            <button className="Btn" onClick={addThread}>
              Add Thread
            </button>
            <button className="Btn" onClick={removeThread}>
              Remove Thread
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
