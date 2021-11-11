import "./App.scss";
import ComponentFrame from "./components/componentFrame/ComponentFrame";
import Header from "./components/header/Header/Header";
import { Heading, Section } from "@dnb/eufemia/components";
import { DashboardSettings } from "./components/DashboardSettings/DashboardSettings";
import Bloomberg from "./components/Bloomberg";
import Ocean from "./components/Ocean/Ocean";
import {NewsList} from "./components/NewsList/NewsList";

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
      component: <div><NewsList/></div>,
      isSelected: true,
    },
  ];

  const settings = [
    {
      componentName: "Setting 1",
      isSelected: true,
    },
    {
      componentName: "Setting 2",
      isSelected: false,
    },
    {
      componentName: "Setting 3",
      isSelected: true,
    },
  ];

  return (
    <div className="App dnb-space dnb-core-style">
      <Header />
      <div className="main">
        <Heading top="2" bottom="0">
          FRYD Dashboard
        </Heading>
        <div className="settings-container">
          <DashboardSettings components={settings} onSubmit={() => {}} />
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
