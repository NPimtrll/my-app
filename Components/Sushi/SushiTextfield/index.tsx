import React, { InputHTMLAttributes } from "react";
import styles from "./style.module.scss";

export interface SushiTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  viewOnly?: boolean;
}

export function SushiTextField({
  error,
  disabled,
  viewOnly,
  ...rest
}: SushiTextFieldProps) {
  return (
    <input
      type="text"
      disabled={disabled || viewOnly}
      readOnly={viewOnly}
      {...rest}
    />
  );
}
