import styles from "./sectionHeader.module.css";

const SectionHeader = ({ title }) => {
  return <h2 className={styles.sectionHeader}>{title}</h2>;
};

export default SectionHeader;
