import { Modal, Switch, Button } from "@dnb/eufemia/components";
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
          {items.filter(x=>!x.settingsHidden).map((item) => {
            return (
              <div key={item.componentName}>
                <Switch
                  label={item.componentName}
                  checked={item.isSelected}
                  on_change={({ checked }) => (item.isSelected = checked)}
                  bottom="1"
                />
              </div>
            );
          })}
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
