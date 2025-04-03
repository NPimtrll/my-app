import { UIButtonRoles } from "../enums/ui-button-roles";
import { UIIconsEnum } from "../enums/ui-icons";
import { UIVariantsEnum } from "../enums/ui-variants";
import { SushiIcon } from "../SushiIcon";
import styles from "./styles.module.scss";

export type SushiButtonProps = {
  role?: UIButtonRoles;
  variant: UIVariantsEnum;
  label?: string;
  leftIcon?: UIIconsEnum;
  rightIcon?: UIIconsEnum;
  disabled?: boolean;
  onClick?: () => void;
  testId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SushiButton(props: SushiButtonProps) {
  const {
    role,
    variant,
    leftIcon,
    rightIcon,
    label,
    onClick,
    disabled,
    testId,
    ...restProps
  } = props;
  const uiVariant = variant || UIVariantsEnum.PRIMARY;
  const buttonRole = role || UIButtonRoles.BUTTON;

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={buttonRole}
      className={`${styles.button} ${!leftIcon && !rightIcon ? styles.center : ""} ${styles[uiVariant]} ${disabled ? styles.disabled : ""}`}
      {...restProps}
      disabled={disabled}
      onClick={onClickHandler}
      {...(testId && { "data-testid": testId })}
    >
      {!!leftIcon && (
        <SushiIcon icon={leftIcon} variant={uiVariant}></SushiIcon>
      )}
      {label || ""}
      {!!rightIcon && (
        <SushiIcon icon={rightIcon} variant={uiVariant}></SushiIcon>
      )}
    </button>
  );
}
