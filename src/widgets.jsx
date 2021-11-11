import PictureComponent from "./components/pictureComponent/PictureComponent";
import picture1 from './assets/picture1.png';
import indexesPicture from "./assets/indexes.png";
import finsightPicture from './assets/finsight.png'
import IncomeOnInterestRateBarChart from "./components/Graphs/IncomeOnInterestRateBarChart";
import SomethingLineChart from "./components/Graphs/SomethingLineChart";
import {NewsList} from "./components/NewsList/NewsList";
import {Icon, Button, Ul} from "@dnb/eufemia";
import {add_circled, add, bell} from "@dnb/eufemia/icons";
import {Modal} from "@dnb/eufemia/components";
export default [
  {
    componentName: "Credit Manager",
    componentClass: "credit-manager",
    component: (
      <PictureComponent image={picture1} height="280px" width="430px" />
    ),
    isSelected: false,
  },
  {
    componentName: "Income On Interest Rate",
    componentClass: "interest-rate",
    component: <IncomeOnInterestRateBarChart />,
    isSelected: true,
  },
  {
    componentName: "Exchange Rate",
    componentClass: "line-chart",
    component: <SomethingLineChart />,
    isSelected: true,
  },
  {
    componentName: "Index overview",
    componentClass: "index-overview",
    component: (
      <PictureComponent image={indexesPicture} height="280px" width="330px" />
    ),
    isSelected: true,
  },
  {
    componentName: "News",
    componentClass: "news-widget",
    component: <div><NewsList/></div>,
    isSelected: true,
  },
  {
    componentName: "Finsight",
    componentClass: "widget-6",
    component: <PictureComponent image={finsightPicture} height="280px" width="330px" />,
    isSelected: true,
  },
  {
    componentName: "",
    componentClass: "add-new-widget",
    component: <div>
      <Modal
          title={"Explore widgets"}
          close_button_attributes={{ text: "Close" }}
          mode="drawer"
          right="1"
          trigger_variant="tertiary"
          trigger_text="Explore widgets"
          trigger_icon={add}
          trigger_icon_position="top"
          trigger_icon_size="large"
          trigger_size="large"
      >
        <div>
          <Ul>
            <li>Widget 1</li>
            <li>Widget 2</li>
            <li>Widget 3</li>
          </Ul>
        </div>
      </Modal>
    </div>,
    isSelected: true,
    settingsHidden: true
  },
];
