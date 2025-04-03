import styles from "./styles.module.scss";

export interface SushiButtonGroupProps {
  children?: React.ReactNode;
}

export function SushiButtonGroup(props: SushiButtonGroupProps) {
  const { children } = props;
  return (
    <>
      <div className={styles.group}>{children}</div>
    </>
  );
}
