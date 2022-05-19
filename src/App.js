import "./sass/App.css";
import { useState } from "react";
import { useTwitterAuth } from "./utils/useTwitterAuth";
import GeneratedThread from "./components/GeneratedThread";
import { useGenerateThread } from "./utils/useGenerateThread";

function App() {
  const [numberOfThreads, setNumberOfThreads] = useState(1);
  const [userTweet, setUserTweet] = useState("");
  const [signOut, signIn, userInfo] = useTwitterAuth();
  const [generate, thread] = useGenerateThread(userTweet, numberOfThreads);
  const displayedOutput = GeneratedThread(numberOfThreads, thread);

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
      <header className="Header" style={{top: 0, marginTop: 0, fontSize: 40, padding: 10}}>Tweeter Man</header>
      {userInfo ? (
        <div
          id="application"
          className="Container"
          style={{ display: "block" }}
        >
          <button className="Btn" onClick={signOut} style={{top: 0, right: 0, position: "absolute"}}>
            Sign Out
          </button>
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
      ) : (
        <div id="login" className="Container">
          <button className="Btn" onClick={signIn} style={{padding: 50, fontSize: 20}}>
            Sign in with Twitter
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
