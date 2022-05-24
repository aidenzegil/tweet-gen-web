import React from "react";
import { useState } from "react";

const GeneratedThread = (numThreads, thread) => {
const [shown, setShown] = useState([" ", " ", " ", " "])
const [oldThread, setOldThread] = useState(thread)  

  //saves the last generated thread and changes what's shown if a new thread is generated
  if (oldThread !== thread) {
    setOldThread(thread)
    setShown(thread)
  }

  var index = 0

  function renderThreads(numThreads, textArea = []) {
    if (numThreads <= textArea.length) {
      return (
        <div>
          {textArea}
        </div>
      )
    }
    
    //this is a little messy, here is what is happening:
    //the threads that are generated are in an array so i need to 
    //get them out of the array an into the value of the text area
    //so i used textarea.length as the index value since it starts at 0
    //and increases by one every function call
    const newTextArea = 
    <textarea
      className="Input"
      maxLength="280"
      value={shown[index]}
      onChange={(e) => setShown(shown.splice(index, 1, e.target.value))}
    />
    index++
    return renderThreads(numThreads, [...textArea, newTextArea])
  }
  return renderThreads(numThreads)
}

export default GeneratedThread
