import { Modal, ToggleButton, Button } from "@dnb/eufemia/components";
import { cog } from "@dnb/eufemia/icons";

export const DashboardSettings = (props) => {
  const items = props.components;
  return (
    <Modal
      title={"Settings"}
      trigger_text={"Settings"}
      trigger_icon={cog}
      trigger_icon_position={"right"}
      close_button_attributes={{ text: "Close" }}
      mode="drawer"
    >
      {({ close }) => (
        <div>
          <ToggleButton.Group
            multiselect="true"
            values={items.map((item) => item.componentName)}
            on_change={({ values }) => {
              console.log("on_change", values);
            }}
          >
            {items.map((item) => {
              return (
                <div key={item.componentName}>
                  <ToggleButton
                    text={item.componentName}
                    value={item.componentName}
                    bottom="1"
                    on_change={({ checked }) => (item.isSelected = checked)}
                  />
                </div>
              );
            })}
          </ToggleButton.Group>
          <br />
          <Button
            text="Save settings"
            on_click={() => {
              props.onSubmit(items);
              close();
            }}
            top="3"
          />
        </div>
      )}
    </Modal>
  );
};
