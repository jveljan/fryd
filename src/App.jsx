import "./App.scss";
import ComponentFrame from "./components/componentFrame/ComponentFrame";
import Header from "./components/header/Header/Header";
import { Heading, Section } from "@dnb/eufemia/components";
import { DashboardSettings } from "./components/DashboardSettings/DashboardSettings";
<<<<<<< HEAD
import PictureComponent from "./components/pictureComponent/PictureComponent";
import Bloomberg from "./components/Bloomberg";
import {NewsList} from "./components/NewsList/NewsList";

=======
>>>>>>> 50405fe91f72d55a5ffa54480a0c20701322114c
import { useState } from "react";
import widges from "./widgets";

function App() {
  const [realList, setRealList] = useState(widges.map((x) => x.component));

  const [settings, setSettings] = useState(
    widges.map((x) => ({
      componentName: x.componentName,
      isSelected: x.isSelected,
    }))
  );

  return (
    <div className="App dnb-space dnb-core-style">
      <div className="main">
        <Section style_type="white">
          <Header />
          <Heading top="2" bottom="0">
            FRYD Dashboard
          </Heading>
          <div className="settings-container">
            <DashboardSettings
              components={settings}
              onSubmit={(items) => {
                setRealList(
                  items
                    .map((it, idx) => {
                      widges[idx].isSelected = it.isSelected;
                      return widges[idx];
                    })
                    .filter((x) => x.isSelected)
                    .map((x) => x.component)
                );
              }}
            />
          </div>
        </Section>

        <div className="box-container">
          <ComponentFrame componentList={realList} />
        </div>
      </div>
    </div>
  );
}

export default App;
