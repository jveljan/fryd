import styles from "./ComponentFrame.module.css";

const ComponentFrame = ({ componentList }) => {
  return (
    <>
      {componentList.map((c) => (
        <div className={styles.componentWrapper} key={c.title}>
          <div class="widget">
            <h2 className="title">{c.title}</h2>
            {c.component}
          </div>
        </div>
      ))}
    </>
  );
};

export default ComponentFrame;
