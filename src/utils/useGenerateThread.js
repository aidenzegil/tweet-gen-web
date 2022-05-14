// useEffect(() => {
//     console.log('this was called')
//     const getText = async () => {
//        const hitTweet = await fetch('http://127.0.0.1:8000/tweet', {  
//       }).then((response) => response.json())
//        console.log(hitTweet)
//        return hitTweet
//     }
//   }, [])

import { useEffect, useState } from "react"


async function generateThread(tweet, numberOfThreads) {
            console.log('this was called')
               const hitTweet = await fetch('http://127.0.0.1:8000', {  
              }).then((response) => response.json())
               console.log(hitTweet)
               return hitTweet
            
        }





export const useGenerateThread = (tweet, numberOfThreads) => {
    const [thread, setThread] = useState(null)
    const generate = () => generateThread(tweet, numberOfThreads)

    // useEffect(() => {
    //     setThread(output)
    // }, [])
    return [generate, thread]
}