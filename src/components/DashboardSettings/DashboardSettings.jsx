import { Modal, Checkbox, Button } from '@dnb/eufemia/components';
import { cog } from '@dnb/eufemia/icons';

export const DashboardSettings = (props) => {


    return (
        <Modal
            title={"Settings"}
            trigger_text={"Settings"}
            trigger_icon={cog}
            trigger_icon_position={"right"}
            close_button_attributes={{text: "Close"}}
            mode="drawer"
        >
            {({ close }) => (
                <div>
                    {props.components.map((item) => {
                        return (
                            <div>
                                <Checkbox
                                    label={item.componentName}
                                    label_position="right"
                                    checked={item.isSelected}
                                    on_change={({ checked }) => console.log(checked)}
                                    bottom="1"
                                />
                            </div>
                        );

                    })}

                    <Button
                        text="Save settings"
                        on_click={() => { props.onSubmit(); close(); }}
                        top="3"
                    />
                </div>
            )}
        </Modal>
    );
};