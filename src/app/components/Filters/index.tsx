import styles from './filters.module.scss';

export default function Filters() {
  return (
    <>
      <button type="button">Фильтры</button>
      <section className={styles.filters}>
        <header className={styles.filters__header}>
          <h2 className={styles.filters__title}>Фильтры</h2>
        </header>
        <ul className={styles.filters__categories}>
          <li className={styles.filters__category}>
            <h3 className={styles.filters__categoryTitle}>Уровень</h3>
            <ul className={styles.filters__categoryList}>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>I</label>
                </div>
              </li>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>II</label>
                </div>
              </li>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>III</label>
                </div>
              </li>
            </ul>
          </li>
          <li className={styles.filters__category}>
            <h3 className={styles.filters__categoryTitle}>Класс</h3>
            <ul className={styles.filters__categoryList}>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>Подводные лодки</label>
                </div>
              </li>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>Эсминцы</label>
                </div>
              </li>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>Крейсеры</label>
                </div>
              </li>
            </ul>
          </li>
          <li className={styles.filters__category}>
            <h3 className={styles.filters__categoryTitle}>Нация</h3>
            <ul className={styles.filters__categoryList}>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>Япония</label>
                </div>
              </li>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>США</label>
                </div>
              </li>
              <li>
                <div className={styles.filters__categoryOption}>
                  <input name="test" id="test" className={styles.filters__checkbox} type="checkbox" />
                  <label htmlFor="test" className={styles.filters__label}>СССР</label>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <footer className={styles.filters__footer}>
          <button type="button">Скрыть</button>
          <button type="button">Применить</button>
        </footer>
      </section>
    </>
  );
}