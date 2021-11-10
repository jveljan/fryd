import "./App.css";
import Bloomberg from "./components/Bloomberg";
function App() {
  return (
    <div className="App">
      <header className="header">FRYD Dashboard</header>
      <div className="main">
        Boxes Area
        <div className="box-container">
          {[1,2,3,4,5,6].map(x => {
            return <div key={x} className="box">Box {x}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
