import { Modal, Checkbox, Button } from "@dnb/eufemia/components";
import { cog } from "@dnb/eufemia/icons";

export const DashboardSettings = (props) => {
  const items = props.components
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
          {items.map((item) => {
            return (
              <div>
                <Checkbox
                  label={item.componentName}
                  label_position="right"
                  checked={item.isSelected}
                  on_change={({ checked }) => item.isSelected = checked}
                  bottom="1"
                />
              </div>
            );
          })}

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
