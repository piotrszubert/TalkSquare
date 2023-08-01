import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string; // Renamed from customClassName to className
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const defaultClassName =
    'inline-flex font-semibold border border-white hover:bg-white hover:text-black px-4 py-2 whitespace-nowrap';

  const combinedClassName = classNames(defaultClassName, className); // Use className directly

  return (
    <button {...props} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;