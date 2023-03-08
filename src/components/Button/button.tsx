import React, { useState } from "react";
import classnames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}
export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: string;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
//联合类型
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

// Partial<T>属性变为可选属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> 


const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, className,size, btnType, children, href,...restProps } = props;
  const classes = classnames("btn",className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  //Link类型
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}> 
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};
export default Button;
