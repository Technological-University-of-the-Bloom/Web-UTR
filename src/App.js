import "./App.css";
import down from "./down.jpeg"; //Importación local de imagen

function App() {
  return (
    <div>
      {/* Contenedor con flex */}
      <div className="ImageContainer">
        <img className="down" alt="Niño con down" src={down}></img>
        <img
          className="down"
          alt="Perrito"
          src="https://media.tenor.com/wt3RTvjtRC4AAAAi/dancing-dance.gif"
        ></img>
      </div>
      {/* Párrafo */}
      <p>Tiene síndrome, no se rían</p>
    </div>
  );
}

export default App;
