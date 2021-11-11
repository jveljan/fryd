import styles from "./ComponentFrame.module.css";
import { H2 } from '@dnb/eufemia'
const ComponentFrame = ({ componentList }) => {
  return (
    <>
      {componentList.map((c) => (
        <div className={styles.componentWrapper + ' ' + c.className} key={c.title}>
          <H2>{c.title}</H2>
          {c.component}
        </div>
      ))}
    </>
  );
};

export default ComponentFrame;
