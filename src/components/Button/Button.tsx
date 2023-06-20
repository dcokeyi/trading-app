import React from 'react';

export interface ButtonProps {
  title: string;
  rootClass: string;
  label: string;
  handleClick: any;
}

export const Button = (props: ButtonProps) => {
  const { title, rootClass, label, handleClick } = props;
  return (
    <button
      className={rootClass}
      aria-label={label}
      type="submit"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
