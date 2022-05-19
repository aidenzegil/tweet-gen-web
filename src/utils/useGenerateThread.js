import { useState, useEffect } from "react";

async function generateThread(thread, numberOfThreads, setState) {
  console.log(JSON.stringify({ body: thread, numberOfThreads}));
  const hitTweet = await fetch("http://127.0.0.1:8000/tweet/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ thread, numberOfThreads }),
  }).then((response) => response.json());
  setState(hitTweet.substring(1).split(" \n-"))
}

export const useGenerateThread = (tweet, numberOfThreads) => {
  const [thread, setThread] = useState("", "", "", "");
  const generate = () => generateThread(tweet, numberOfThreads, setThread);
  return [generate, thread];
};
