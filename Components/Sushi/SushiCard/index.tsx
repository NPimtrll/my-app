import styles from "./styles.module.scss";

export interface SushiCardProps {
  children: React.ReactNode;
  testId?: string;
}

export interface SushiCardHeaderProps {
  children: React.ReactNode;
}

export interface SushiCardBodyProps {
  children: React.ReactNode;
  maxHeight?: number;
}

export interface SushiCardFooterProps {
  children: React.ReactNode;
  noSeparator?: boolean;
}

function SushiCardHeader(props: SushiCardHeaderProps) {
  const { children } = props;

  return (
    <>
      <div className={styles.header}>{children}</div>
    </>
  );
}

function SushiCardBody(props: SushiCardBodyProps) {
  const { children, maxHeight } = props;
  const embeddedStyles: React.CSSProperties = {};

  if (maxHeight) {
    embeddedStyles.maxHeight = `${maxHeight}px`;
    embeddedStyles.overflowY = "auto";
  }
  return (
    <>
      <div className={styles.body} style={embeddedStyles}>
        {children}
      </div>
    </>
  );
}

function SushiCardFooter(props: SushiCardFooterProps) {
  const { children, noSeparator } = props;

  return (
    <>
      <div
        className={`${styles.footer} ${noSeparator ? "" : styles["with-separator"]}`}
      >
        {children}
      </div>
    </>
  );
}

function SushiCard(props: SushiCardProps) {
  const { children, testId } = props;

  return (
    <>
      <div className={styles.card} {...(testId && { "data-testid": testId })}>
        {children}
      </div>
    </>
  );
}

SushiCard.Header = SushiCardHeader;
SushiCard.Body = SushiCardBody;
SushiCard.Footer = SushiCardFooter;

export { SushiCard };
