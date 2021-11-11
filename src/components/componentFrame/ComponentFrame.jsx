import styles from "./ComponentFrame.module.css";

const ComponentFrame = ({ componentList }) => {
  return (
    <>
      {componentList.map((c) => (
        <div className={styles.componentWrapper + ' ' + c.className} key={c.title}>
          <h2 className="title">{c.title}</h2>
          {c.component}
        </div>
      ))}
    </>
  );
};

export default ComponentFrame;
