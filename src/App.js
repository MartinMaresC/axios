import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [data, setData] = useState([]);
    useEffect(()=>{
      axios.get('https://reqres.in/api/users?page=2')
      .then(res=> setData(res.data.data))
      .catch(err=> console.log(err));
    })


  return (

    <div className="App">
      <h2>Axios Library in React JS</h2>
      {
        data.map(d => {
          return <p>{d.email}</p>
        })
      }
    </div>
  );
}

export default App;
