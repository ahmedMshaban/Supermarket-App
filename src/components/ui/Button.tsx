import React from "react";

interface Props {
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
  [rest: string]: any;
}

export const Button: React.FC<Props> = ({
  children,
  outline,
  className,
  ...rest
}) => {
  return (
    <button
      className={`btn ${outline ? "btn-outline" : "btn-default"} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
