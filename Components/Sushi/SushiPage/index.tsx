import { SushiContainer } from "../SushiContainer";
import styles from "./styles.module.scss";

export interface SushiPageProps {
  children?: React.ReactNode;
  withToolbar?: boolean;
  title?: string;
}

export function SushiPage(props: SushiPageProps) {
  const { children, title, withToolbar } = props;
  return (
    <>
      <div
        className={`${styles.page} ${withToolbar ? styles["with-toolbar"] : ""}`}
      >
        {!!title && (
          <SushiContainer>
            <h1 className={styles.title}>{title}</h1>
          </SushiContainer>
        )}
        {children}
      </div>
    </>
  );
}
