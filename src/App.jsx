import "./App.scss";
import ComponentFrame from "./components/componentFrame/ComponentFrame";
import Header from "./components/header/Header/Header";
import {Heading, Section} from "@dnb/eufemia/components";
import { DashboardSettings } from './components/DashboardSettings/DashboardSettings'
import Bloomberg from "./components/Bloomberg";
import Ocean from "./components/Ocean/Ocean";

function App() {
  const realList = [
    {
      componentName: "",
      component: (
        <div>
          <Ocean />
        </div>
      ),
      isSelected: true,
    },
    {
      componentName: "",
      component: <div>Widget 2</div>,
      isSelected: true,
    },
    {
      componentName: "",
      component: <div>Widget 3</div>,
      isSelected: true,
    },
    {
      componentName: "",
      component: <div>Widget 4</div>,
      isSelected: true,
    },
    {
      componentName: "",
      component: <div>Widget 6</div>,
      isSelected: true,
    },
  ];
  return (
    <div className="App dnb-space dnb-core-style">
      <Header />
      <div className="main">
      <Heading top="2" bottom="0">FRYD Dashboard</Heading>
      <div class="settings-container">
      <DashboardSettings
        components={[]}
        onSubmit={() => {}}
      />
      </div>
      
      <Section style_type="lavender">
        <div className="box-container">
          <ComponentFrame
            componentList={realList
              .filter((c) => c.isSelected)
              .map((c) => c.component)}
          />
        </div>
      </Section>
    </div>
    </div>
  );
}

export default App;
