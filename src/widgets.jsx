import PictureComponent from "./components/pictureComponent/PictureComponent";
import picture1 from './assets/picture1.png';
import indexesPicture from "./assets/indexes.png";
import finsightPicture from './assets/finsight.png'
import IncomeOnInterestRateBarChart from "./components/Graphs/IncomeOnInterestRateBarChart";
import SomethingLineChart from "./components/Graphs/SomethingLineChart";
import {NewsList} from "./components/NewsList/NewsList";
import { Icon } from "@dnb/eufemia";
import { add_circled } from "@dnb/eufemia/icons";
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
    componentName: "Add new widget",
    component: <Icon top="4rem" icon={add_circled} size="150" />,
    isSelected: true,
  },
];
