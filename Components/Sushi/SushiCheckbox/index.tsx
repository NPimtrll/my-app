import styles from "./styles.module.scss";

import ElementService from "../../../Services/ElementService";
import serviceContainer from "../../../Services/ServiceContainer";

export interface SushiCheckboxProps {
  checked?: boolean;
  label?: string;
  testId?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export function SushiCheckbox(props: SushiCheckboxProps) {
  const { label, testId, disabled, checked, onChange } = props;
  const element = serviceContainer.get<ElementService>(ElementService);
  const checkboxId = element.nextId();

  return (
    <>
      <label htmlFor={checkboxId} className={`${styles.checkbox}`}>
        <input
          type="checkbox"
          checked={checked}
          id={checkboxId}
          disabled={disabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
              onChange(e.target.checked);
            }
          }}
          {...(testId && { "data-testid": testId })}
        />
        {checked ? (
          <span
            className={`${styles.icon} ${styles.checked} ${disabled ? styles.disabled : ""}`}
          ></span>
        ) : (
          <span
            className={`${styles.icon} ${styles.unchecked} ${disabled ? styles.disabled : ""}`}
          ></span>
        )}
        {label}
      </label>
    </>
  );
}
