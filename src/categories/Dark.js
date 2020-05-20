import React, {useState, useEffect} from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'

 export default function Dark() {
  
  const [joke, setJoke] = useState("")
  const [sjoke, singleJoke] = useState("")
  const [tjoke, jokeType] = useState("")
  const [fetch, setFetch] = useState(false)
  
  const categorialJoke = 'https://sv443.net/jokeapi/v2/joke/Dark'
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          categorialJoke
        )
        
        singleJoke(`${result.data.joke}`)
        jokeType(`${result.data.type}`)
        console.log(sjoke)
        console.log(joke)
        setJoke(`${result.data.setup} ${result.data.delivery}`)
      }
      fetchData()
    },
     [fetch])
  
     return (
      <div>
        <h3>{(tjoke === "single") ? sjoke : joke }</h3>
        <Button variant="dark" onClick={() => setFetch(!fetch)}>Other Joke!</Button>
      </div>
    )
  }



  
  
  