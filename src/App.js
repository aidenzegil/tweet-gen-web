import "./sass/App.css";
import { useState } from "react";
import { useTwitterAuth } from "./utils/useTwitterAuth";
import GeneratedThread from "./components/GeneratedThread";
import {useGenerateThread} from "./utils/useGenerateThread"

function App() {
  const [numberOfThreads, setNumberOfThreads] = useState(1);
  const [userTweet, setUserTweet] = useState("");

  const [signOut, signIn, userInfo] = useTwitterAuth();
  const [generate, thread] = useGenerateThread(userTweet, numberOfThreads);
  const displayedOutput = GeneratedThread(numberOfThreads, userTweet);

  const addThread = () => {
    numberOfThreads < 4
      ? setNumberOfThreads(numberOfThreads + 1)
      : alert("Maximum thread amount reached");
  };

  const removeThread = () => {
    numberOfThreads > 1
      ? setNumberOfThreads(numberOfThreads - 1)
      : alert("Minimum thread amount reached");
  };
  

  return (
    <div className="App">
      {userInfo ? (
        <div
          id="application"
          className="Container"
          style={{ display: "block" }}
        >
          <header className="Header">
            Put the start of your thread here, GPT-3 will take care of the rest!
          </header>
          <textarea
            className="Input"
            placeholder="this is the input"
            maxLength="280"
            value={userTweet} 
            onChange={e => setUserTweet(e.target.value)}
          />
          <header className="Header">Generated thread below!</header>
          {displayedOutput}
          <div className="BtnContainer">
            <button className="Btn" onClick={generate}> Submit </button>
            <button className="Btn" onClick={signOut}>
              Sign Out
            </button>
            <button className="Btn" onClick={addThread}>
              Add Thread
            </button>
            <button className="Btn" onClick={removeThread}>
              Remove Thread
            </button>
          </div>
        </div>
      ) : (
        <div id="login" className="Container">
          <button className="Btn" onClick={signIn}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
