import "./App.scss";
import ComponentFrame from "./components/componentFrame/ComponentFrame";
import Header from "./components/header/Header/Header";
import { Heading, Section } from "@dnb/eufemia/components";
import { DashboardSettings } from "./components/DashboardSettings/DashboardSettings";
import PictureComponent from "./components/pictureComponent/PictureComponent";
import Bloomberg from "./components/Bloomberg";
import Ocean from "./components/Ocean/Ocean";
import image1 from "./assets/picture1.png";

function App() {
  console.log(image1);
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
      component: (
        <div>
          <PictureComponent image={image1} />
        </div>
      ),
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
      component: (
        <div>
          <NewsList />
        </div>
      ),
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
      <div className="main">
        <Section style_type="white">
          <Header />
          <Heading top="2" bottom="0">
            FRYD Dashboard
          </Heading>
          <div className="settings-container">
            <DashboardSettings components={settings} onSubmit={() => {}} />
          </div>
        </Section>

        <div className="box-container">
          <ComponentFrame
            componentList={realList
              .filter((c) => c.isSelected)
              .map((c) => c.component)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
