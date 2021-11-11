import "./App.scss";
import ComponentFrame from "./components/componentFrame/ComponentFrame";
import Header from "./components/header/Header/Header";
import { Heading, Section, Modal } from "@dnb/eufemia/components";
import { Ul } from "@dnb/eufemia";
import { DashboardSettings } from "./components/DashboardSettings/DashboardSettings";
import { useState } from "react";
import widges from "./widgets";
import {bell, cog} from "@dnb/eufemia/icons";

function App() {
  const widgetToComponentStructure = (x) => ({
    component: x.component,
    title: x.componentName,
    className: x.componentClass
  });
  const [realList, setRealList] = useState(widges.filter((x) => x.isSelected).map(widgetToComponentStructure));

  const [settings, setSettings] = useState(
    widges.map((x) => ({
      componentName: x.componentName,
      isSelected: x.isSelected,
      settingsHidden: x.settingsHidden
    }))
  );

  return (
    <div className="App dnb-space dnb-core-style">
      <div className="main">
        <Section style_type="white">
          <Header />
          <div className="headingLine">
            <Heading top="2" bottom="0">
              Hello, Åsmund!
            </Heading>
            <div className="settings-container">
                <Modal
                    title={"Alerts"}
                    trigger_text={"Alerts"}
                    trigger_icon={bell}
                    trigger_variant="signal"
                    trigger_icon_position={"left"}
                    close_button_attributes={{ text: "Close" }}
                    mode="drawer"
                    right="1"
                >
                    <div>
                        <Ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </Ul>
                    </div>
                </Modal>
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
                      .map(widgetToComponentStructure)
                  );
                }}
              />
            </div>
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
