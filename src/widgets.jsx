import PictureComponent from "./components/pictureComponent/PictureComponent";
import picture1 from './assets/picture1.png';
import IncomeOnInterestRateBarChart from "./components/Graphs/IncomeOnInterestRateBarChart";
import SomethingLineChart from "./components/Graphs/SomethingLineChart";

export default [
    {
      componentName: "Credit Manager",
      component: (
        <PictureComponent image={picture1} />
      ),
      isSelected: true,
    },
    {
      componentName: "Income On Interest Rate",
      component: <IncomeOnInterestRateBarChart />,
      isSelected: true,
    },
    {
      componentName: "Something Line Chart",
      component: <SomethingLineChart/>,
      isSelected: true,
    },
    {
      componentName: "Widget 4",
      component: <div>Widget 4</div>,
      isSelected: true,
    },
    {
      componentName: "Widget 5",
      component: <div>Widget 5</div>,
      isSelected: true,
    },
  ];