import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'contained' | 'outlined';
  size?: 'md';
  color?: 'primary' | 'secondary';
}

export function Button({
  variant = 'contained',
  size = 'md',
  color = 'primary',
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      className={classNames(
        className,
        styles.button,
        styles[`button__variant__${variant}`],
        styles[`button__size__${size}`],
        styles[`button__color__${color}`],
      )}
    />
  );
}
