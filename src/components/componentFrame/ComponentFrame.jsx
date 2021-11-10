import styles from "./ComponentFrame.module.css";

const ComponentFrame = ({ componentList }) => {
  return (
    <>
      {componentList.map((component) => (
        <div className={styles.componentWrapper}>{component}</div>
      ))}
    </>
  );
};

export default ComponentFrame;
