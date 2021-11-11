import PictureComponent from "./components/pictureComponent/PictureComponent";
import picture1 from './assets/picture1.png';
import indexesPicture from "./assets/indexes.png";
import IncomeOnInterestRateBarChart from "./components/Graphs/IncomeOnInterestRateBarChart";
import SomethingLineChart from "./components/Graphs/SomethingLineChart";
import {NewsList} from "./components/NewsList/NewsList";

export default [
  {
    componentName: "Credit Manager",
    componentClass: "credit-manager",
    component: (
      <PictureComponent image={picture1} height="280px" width="430px" />
    ),
    isSelected: true,
  },
  {
    componentName: "Income On Interest Rate",
    componentClass: "interest-rate",
    component: <IncomeOnInterestRateBarChart />,
    isSelected: true,
  },
  {
    componentName: "Something Line Chart",
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
    componentName: "Widget 6",
    componentClass: "widget-6",
    component: <div>Widget 6</div>,
    isSelected: true,
  },
];
