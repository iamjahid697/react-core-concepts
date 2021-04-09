import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const players =['Sakib Al Hasan', 'Mustafizur Rahman','Tamim Iqbal', 'Sommo Sarkar', 'Liton Das','Musfiqur Rahim','Mahmudullah Riad','Taskin Ahmed']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'what should be', price: '$3.44'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            players.map(player => <li>{player}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product =><Product product={product}></Product>)
          
        }
      </header>
    </div>
  );

  function Counter(){
    const [count, setCount] = useState(10);
    return (
      <div>
      <h1>Count: {count}</h1>
        <button onClick={() => setCount(count -1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    )
  }
  function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])
    return(
      <div>
        <h3>Dynamic Users:{users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }

  function Product(props) {
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      width: '200px',
      height: '200px',
      float: 'left'
    };
    const {name, price} = props.product;
    console.log(name, price)
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h2>{price}</h2>
        <button>Buy now</button>
      </div>
    )
  }

}
export default App;
