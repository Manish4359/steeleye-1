import styles from "./ListRow.module.css";

const ListCell = ({ children,onCLick }) => {
  return <tr className={styles.cell} onClick={onCLick}>{children}</tr>;
};

export default ListCell;
