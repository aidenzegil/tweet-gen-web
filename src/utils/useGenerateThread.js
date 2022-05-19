import { useState } from "react";

async function generateThread(tweet, numThreads, thread = []) {

  if (thread.length >= numThreads) return thread
  
  const prompt = "Continue "  + [tweet, ...thread].join("\n\n") + "\n\n"
  console.log(prompt)

  const result = await fetch("http://127.0.0.1:8000/tweet/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ sentPrompt: prompt }),
  }).then((response) => response.json())


  console.log(result)
  const newThread = (result.choices[0].text)

  return generateThread(tweet, numThreads, [...thread, newThread])
}


export const useGenerateThread = (tweet, numThreads) => {
  const [threads, setThreads] = useState([""]);

  const generate = async() => {
    const newThread = await generateThread(tweet, numThreads)
    setThreads(newThread)
  }

  return [generate, threads];
};
