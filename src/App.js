import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name="Rubel Nayok" nayika="Moushumi"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="Bppa Raz" nayika="Cheka"></Person>
        <Person name="Elias Kanchon" nayika="Bobita"></Person>
      </header>
    </div>
  );
}
function Person(props){
  console.log(props)
  return (
    <div style={{border:'2px solid red', margin:'10px'}}>
    <h1>Nayok: {props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
    </div>
  )
}
export default App;
