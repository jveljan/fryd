import "./App.css";
import ComponentFrame from "./components/componentFrame/ComponentFrame";
import Bloomberg from "./components/Bloomberg";
import Ocean from "./Ocean";

function App() {
  const realList = [{
    componentName: '',
    component: <div><Ocean/></div>,
    isSelected: true
  }, {
    componentName: '',
    component: <div>Widget 2</div>,
    isSelected: true
  }, {
    componentName: '',
    component: <div>Widget 3</div>,
    isSelected: true
  }, {
    componentName: '',
    component: <div>Widget 4</div>,
    isSelected: true
  }, {
    componentName: '',
    component: <div>Widget 6</div>,
    isSelected: true
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
