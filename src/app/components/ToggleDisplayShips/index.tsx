import styles from './toggleDisplayShips.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

type Props = {
  parentBlockClasses?: string,
};

export default function ToggleDisplayShips({ parentBlockClasses } : Props) {
  const [displayMode, setDisplayMode] = useState('card');
  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayMode(event.target.value);
  };
  return (
    <section className={clsx(styles.toggleDisplayShips, parentBlockClasses)}>
        <div className={styles.toggleDisplayShips__mode}>
          <input
            className={clsx(styles.toggleDisplayShips__radio)}
            type="radio"
            id="cardMode"
            name="displayMode"
            value="card"
            checked={displayMode === 'card'}
            onChange={handleModeChange}
          />
          <label className={clsx(styles.toggleDisplayShips__label, styles.toggleDisplayShips__label_style_card)} htmlFor="cardMode">Карточки</label>
        </div>
        <div className={styles.toggleDisplayShips__mode}>
          <input
            className={clsx(styles.toggleDisplayShips__radio)}
            type="radio"
            id="tableMode"
            name="displayMode"
            value="table"
            checked={displayMode === 'table'}
            onChange={handleModeChange}
          />
          <label className={clsx(styles.toggleDisplayShips__label, styles.toggleDisplayShips__label_style_table)} htmlFor="tableMode">Таблица</label>
        </div>
    </section>
  );
}