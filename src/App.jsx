import "./App.css";
import ComponentFrame from "./components/componentFrame/ComponentFrame";
import Bloomberg from "./components/Bloomberg";
function App() {
  const realList = [{
    componentName: '',
    component: <div>Widget 1</div>,
    isSelected: true
  }, {
    componentName: '',
    component: <div>Widget 2</div>,
    isSelected: false
  }]
  return (
    <div className="App">
      <header className="header">FRYD Dashboard</header>
      <div className="main">
        Boxes Area
        <div className="box-container">
          <ComponentFrame componentList={realList.filter(c => c.isSelected).map(c=>c.component)} />
        </div>
      </div>
    </div>
  );
}

export default App;
