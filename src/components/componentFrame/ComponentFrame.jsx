import styles from "./ComponentFrame.module.css";

const ComponentFrame = () => {
  return (
    <div className={styles.container}>
      {componentList.map((component) => (
        <div className={styles.componentWrapper}>{component}</div>
      ))}
    </div>
  );
};

export default ComponentFrame;
