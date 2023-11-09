import styles from './button.module.scss';
import clsx from 'clsx';

type Props = {
  title?: string,
  type: 'button' | 'submit' | 'reset',
  parentBlockClasses?: string,
  style?: string,
  handleClick?: any,
};

export default function Button({ title, type, parentBlockClasses, style, handleClick } : Props) {
  const buttonStyle = styles[`button_style_${style}`];
  const buttonClasses = clsx(
    styles.button,
    parentBlockClasses,
    buttonStyle,
  );
  return (
    <button type={type} className={buttonClasses} onClick={handleClick}>{title}</button>
  );
}