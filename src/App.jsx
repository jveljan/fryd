import "./App.css";
import ComponentFrame from "./components/componentFrame/ComponentFrame";
import Bloomberg from "./components/Bloomberg";
function App() {
  return (
    <div className="App">
      <header className="header">FRYD Dashboard</header>
      <div className="main">
        Boxes Area
        <div className="box-container">
          <ComponentFrame componentList={[1, 2, 3, 4, 5, 6]} />
        </div>
      </div>
    </div>
  );
}

export default App;
