import { useEffect, useState } from "react";
import "./App.css";
import Animal from "../Animal/Animal";
import { Link } from "react-router-dom";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
      });
  }, []);
  return (
    <>
      <h1>Our Beautiful Animals</h1>
      <Link to={"/add-animal"}>
        <h2>Add an Animal 😸</h2>
      </Link>
      <div className="animals">
        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal}></Animal>
        ))}
      </div>
    </>
  );
}

export default App;
