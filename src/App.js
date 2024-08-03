// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
          setData(response.data);
          //setData("");
          console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      {data ? (
          <div>
            <h1>Data from Frontend</h1>
          <p>{data.message}</p>
          {/* <ul>
            {data.data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
