import React, { useState, useEffect } from "react"
import axios from "axios"
import Any from "../categories/Any"
import Miscellaneous from "../categories/Miscellaneous"
import Programming from "../categories/Programming"
import Dark from "../categories/Dark"
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

export default function Service () {
  const everyjokes = [<Any/>, <Miscellaneous/>, <Programming/>, <Dark/> ]
  const [allcategories, cat ] = useState([])

  useEffect(() => {
    const category = async () => {
      const firstcategories =  await axios.get(
        'https://sv443.net/jokeapi/v2/categories'
      )
      cat(firstcategories.data.categories)
    }
    category()
  },
   [])

  const jokes = allcategories.map((data, i) => {
      const ejokes = everyjokes[i];
    return (
      <Card
        key={i}
        bg="dark"
        text="white"
        className="text-center" 
        style={{margin: "10px" }}
      >
        <Card.Img variant="top"  />
        <Card.Body>
        <Card.Title style={{display: "inline"}}>Joke from <p style={{color: "red", display: "inline"}}>{data}</p> category</Card.Title>
        <Card.Text></Card.Text>
        <Card.Text>{ejokes}</Card.Text>
    
        </Card.Body>
      </Card>
    );
  });
  
  return (
    <div style={{background: "black"}}>
        <h1 style={{background: "black", textAlign: "center", color: "silver", marginTop: "75px", marginBottom: "80px"}}>Hi! Choose Your Favourite Category And Generate Jokes. </h1>
        <p style={{background: "black"}}>{jokes}</p>
    </div>
  )
}





