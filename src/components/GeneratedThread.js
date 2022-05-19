import React from "react";
import { useState, useEffect } from "react";

const GeneratedThread = (numberOfThreads, thread) => {
  const [shown, setShown] = useState(["", "", "", ""])
  const [oldThread, setOldThread] = useState(thread)
  if (oldThread !== thread) {
    setOldThread(thread)
    setShown(thread)
  }

  const displayedInputs = () => {
    const inputs = [];
    for (var i = 0; i < numberOfThreads; i++) {
      inputs.push(
        <textarea
          id="1"
          className="Input"
          maxLength="280"
          value = {shown[i]}
          onChange={(e) => setShown(shown.splice(i, 1, e.target.value))}
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
