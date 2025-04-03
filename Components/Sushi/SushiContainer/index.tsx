import styles from "./styles.module.scss";

export interface SushiContainerProps {
  children?: React.ReactNode;
  withToolbar?: boolean;
}

export function SushiContainer(props: SushiContainerProps) {
  const { children, withToolbar } = props;
  return (
    <>
      <div
        className={`${styles.container} ${withToolbar ? styles["has-toolbar"] : ""}`}
      >
        {children}
      </div>
    </>
  );
}
