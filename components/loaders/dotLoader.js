import styles from "./styles.module.css";
import DotLoader from "react-spinners/DotLoader";


export default function DotLoaderSpinner({ loading }) {
  return (
    <div className={styles.loader}>
      <DotLoader color="#000" loading={loading} />
    </div>
  );
}
