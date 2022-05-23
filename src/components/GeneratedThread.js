import React from "react";
import { useState } from "react";

// const GeneratedThread = (numberOfThreads, thread) => {
//   const [shown, setShown] = useState(["", "", "", ""])
//   const [oldThread, setOldThread] = useState(thread)
//   if (oldThread !== thread) {
//     setOldThread(thread)
//     setShown(thread)
//   }

//   const displayedInputs = () => {
//     const inputs = [];
//     for (var i = 0; i < numberOfThreads; i++) {
//       inputs.push(
//         <textarea
//           className="Input"
//           maxLength="280"
//           value = {shown[i]}
//           onChange={(e) => setShown(shown.splice(i, 1, e.target.value))}
//         />
//       );
//     }
//     return inputs;
//   };

//   const displayed = displayedInputs()

//   return (
//     <div>
//       {displayed}
//     </div>
//   );
// };

// export default GeneratedThread;

const GeneratedThread = (numThreads, thread, textArea = []) => {
  const [shown, setShown] = useState(["", "", "", ""])
  const [oldThread, setOldThread] = useState(thread)

  //saves the last generated thread and changes whats shown if a new thread is generated
  if (oldThread !== thread) {
    setOldThread(thread)
    setShown(thread)
  }

  if (numThreads >= textArea.length) {
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
    value={shown[textArea.length]}
    onChange={(e) => setShown(shown.splice(textArea.length, 1, e.target.value))}
  />

  return GeneratedThread(numThreads, thread, [...textArea, newTextArea])
}

export default GeneratedThread