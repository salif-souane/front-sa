
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const[clients, setClients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/client")
     .then(response => response.json())
     .then(data => setClients(data))
     .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Voir les clients</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.id}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
