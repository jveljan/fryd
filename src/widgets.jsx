import PictureComponent from "./components/pictureComponent/PictureComponent";
import picture1 from "./assets/picture1.png";
import {NewsList} from "./components/NewsList/NewsList";

export default [
  {
    componentName: "Credit Manager",
    component: (
      <PictureComponent image={picture1} height="280px" width="430px" />
    ),
    isSelected: true,
  },
  {
    componentName: "Widget 2",
    component: <div>Widget 2</div>,
    isSelected: true,
  },
  {
    componentName: "Widget 3",
    component: <div>Widget 3</div>,
    isSelected: true,
  },
  {
    componentName: "Widget 4",
    component: <div>Widget 4</div>,
    isSelected: true,
  },
  {
    componentName: "news-widget",
    component: <div><NewsList/></div>,
    isSelected: true,
  },
];
