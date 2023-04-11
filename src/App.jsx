import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [ships, addShip] = useState([]);

  function createTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
        <tr>
        <td>
          {ships[0].name}
        </td>
      </tr>
        </tbody>
      </table>
    )
  }

  function getShips(query) {
    let shiplist = [];
    for (let ship of query.data.results) {
      shiplist.push(ship);
    }
    
    return shiplist;
  }

  /*async function getShips(query) {
    for (let ship of query.data.results) {
      addShip([...ships, ship]);
    }
    console.log(ships);
  }*/

    async function getChips() {
      let query = axios.get("https://swapi.dev/api/starships");
      let result = await query;
      addShip([...ships, ...getShips(result)]);
      //getShips(query);
      return createTable();
    }

    return (
      <div className="App">
        <button onClick={getChips}>Click me</button>
      </div>
    );
  }

export default App;
