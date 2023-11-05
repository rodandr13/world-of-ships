import styles from './button.module.scss';
import clsx from 'clsx';

type Props = {
  title?: string,
  type: 'button' | 'submit' | 'reset',
  parentBlockClasses?: string,
  style?: string,
};

export default function Button({ title, type, parentBlockClasses, style } : Props) {
  const buttonStyle = styles[`button_style_${style}`];
  const buttonClasses = clsx(
    styles.button,
    parentBlockClasses,
    buttonStyle,
  );
  return (
    <button type={type} className={buttonClasses}>{title}</button>
  );
}