import React from "react";

interface Props {
  placeholder: string;
  type?: string;
  className?: string;
  required?: boolean;
  [rest: string]: any;
}

export const Input: React.FC<Props> = ({
  placeholder,
  type = "text",
  className,
  required,
  ...rest
}) => {
  return (
    <label className="label">
      {placeholder}
      {required && <span className="input-required">*</span>}
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={`input ${className}`}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
};
