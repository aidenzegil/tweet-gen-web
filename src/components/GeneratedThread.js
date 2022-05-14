import React from "react";
import { useState } from "react";

const GeneratedThread = (numberOfThreads, userTweet, thread) => {
  const [generatedTweet, setGeneratedTweet] = useState(["", "", "", ""])

  // making different inputs based on text

  const displayedInputs = () => {
    const inputs = [];
    for (var i = 0; i < numberOfThreads; i++) {
      inputs.push(
        <textarea
          id="1"
          className="Input"
          placeholder="this is just a placeholder div"
          maxLength="280"
          value = {generatedTweet[i]}
        />
      );
    }
    return inputs;
  };

  const displayed = displayedInputs()

  return (
    <div>
      {displayed}
    </div>
  );
};

export default GeneratedThread;
