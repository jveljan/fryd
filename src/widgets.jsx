import PictureComponent from "./components/pictureComponent/PictureComponent";
import picture1 from './assets/picture1.png';
import IncomeOnInterestRateBarChart from "./components/Graphs/IncomeOnInterestRateBarChart";
import SomethingLineChart from "./components/Graphs/SomethingLineChart";
import {NewsList} from "./components/NewsList/NewsList";

export default [
    {
      componentName: "Credit Manager",
      componentClass: "credit-manager",
      component: (
        <PictureComponent image={picture1} />
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
      componentName: "Income On Interest Rate",
      componentClass: "income-on-interest-rate",
      component: <IncomeOnInterestRateBarChart />,
      isSelected: true,
    },
    {
      componentName: "Something Line Chart",
      componentClass: "something-line-chart",
      component: <SomethingLineChart/>,
      isSelected: true,
    },
    {
      componentName: "Widget 4",
      componentClass: "widget-4",
      component: <div>Widget 4</div>,
      isSelected: true,
    },
  ];

