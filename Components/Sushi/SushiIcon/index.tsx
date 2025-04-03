import { UIIconsEnum } from "../enums/ui-icons";
import { UISizesEnum } from "../enums/ui-sizes";
import { UIVariantsEnum } from "../enums/ui-variants";
import styles from "./styles.module.scss";

export type SushiIconProps = {
  icon: UIIconsEnum;
  size?: UISizesEnum;
  variant?: UIVariantsEnum;
};

export function SushiIcon(props: SushiIconProps) {
  const { icon, size, variant, ...restProps } = props;
  return (
    <span
      className={`${styles[icon]} ${styles[size || UISizesEnum.M]} ${styles[variant || UIVariantsEnum.PRIMARY]}`}
      {...restProps}
    ></span>
  );
}
