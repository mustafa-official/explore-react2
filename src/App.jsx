import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Actor from "./Actor";
import Singer from "./Singer";
import Bookstore from "./Bookstore";


function App() {
  const actors = ["Sakib", "Rubel", "Raj", "Balam"];
  const singers = [
    { name: "Zunayed Evan", age: 22 },
    { name: "Aether", age: 22 },
    { name: "Mizan", age: 22 },
  ];

  const books = [
    {id:1, name:'Physics', price: 120},
    {id:2, name:'English', price: 130},
    {id:3, name:'Math', price: 150},
  ]
  return (
    <>
      <h2>Vite + React</h2>
      <Bookstore allBook={books}></Bookstore>
      {
        singers.map((singer)=><Singer name={singer.name} age={singer.age}></Singer>)
      }


      <Actor name="Akash"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
    </>
  );
}

export default App;
