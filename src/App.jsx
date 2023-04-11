import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [ships, addShip] = useState([]);

  function getShips(query) {
    let shiplist = [];
    for (let ship of query.data.results) {
      shiplist.push(ship);
    }

    return shiplist;
  }

  async function getChips() {
    let query = await axios.get("https://swapi.dev/api/starships");
    addShip([...ships, ...getShips(query)]);
  }

  return (
    <div className="App">
      <button onClick={getChips}>Click me</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {ships.map((ship) => {
            return (
              <tr>
                <td>{ship.name}</td>
                <td>{ship.manufacturer}</td>
                <td>{ship.cost_in_credits}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
