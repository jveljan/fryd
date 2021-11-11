import styles from "./ComponentFrame.module.css";

const ComponentFrame = ({ componentList }) => {
  return (
    <>
      {componentList.map((component) => (
        <div className={styles.componentWrapper + ' ' + component.componentClass}>{component.component}</div>
      ))}
    </>
  );
};

export default ComponentFrame;
