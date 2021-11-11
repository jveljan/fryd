import PictureComponent from "./components/pictureComponent/PictureComponent";
import picture1 from './assets/picture1.png';
import Ocean from "./components/Ocean/Ocean";

export default [
    {
      componentName: "Credit Manager",
      component: (
        <PictureComponent image={picture1} />
      ),
      isSelected: true,
    },
    {
      componentName: "Graphs",
      component: <Ocean />,
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
      componentName: "Widget 5",
      component: <div>Widget 5</div>,
      isSelected: true,
    },
  ];