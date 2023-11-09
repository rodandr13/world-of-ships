import styles from './filters.module.scss';
import Button from '@/app/components/Button';
import { NATIONS_RU, SHIP_LEVELS, SHIP_TYPE_RU } from '@/app/utils/constans';
import Image from 'next/image';
import React, { useState } from 'react';


type Props = {
  nationOptions: NationOption[],
  typeOptions: TypeOption[],
  levelOptions: number[],
  setSelectedLevels: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedTypes:  React.Dispatch<React.SetStateAction<string[]>>,
  setSelectedNations:  React.Dispatch<React.SetStateAction<string[]>>
};

export default function Filters({ typeOptions, nationOptions, levelOptions, setSelectedLevels, setSelectedTypes, setSelectedNations }: Props) {
  const [visibleFilters, setVisibleFilters] = useState(false);

  function handleLevelChange(e: React.ChangeEvent<HTMLInputElement>) {
    const taget = e.target;
    const isChecked = taget.checked;
    const selectedLevel = parseInt(taget.name.split('_')[1]);
    setSelectedLevels(prevSelectedLevel => {
      if (isChecked) {
        return [...prevSelectedLevel, selectedLevel];
      } else {
        return prevSelectedLevel.filter(level => level !== selectedLevel);
      }
    });
  }

  function handleTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const taget = e.target;
    const isChecked = taget.checked;
    const selectedType = taget.name;
    setSelectedTypes(prevSelectedType => {
      if (isChecked) {
        return [...prevSelectedType, selectedType];
      } else {
        return prevSelectedType.filter(type => type !== selectedType);
      }
    });
  }

  function handleNationChange(e: React.ChangeEvent<HTMLInputElement>) {
    const taget = e.target;
    const isChecked = taget.checked;
    const selectedNation = taget.name;
    setSelectedNations(prevSelectedNation => {
      if (isChecked) {
        return [...prevSelectedNation, selectedNation];
      } else {
        return prevSelectedNation.filter(nation => nation !== selectedNation);
      }
    });
  }

  function handleClick() {
    setVisibleFilters(!visibleFilters);
    console.log(visibleFilters);
  }
  
  function handleHideFilters() {
    if (visibleFilters) {
      setVisibleFilters(false);
    }
  }

  return (
    <>
      <Button type="button" style="text" title="Фильтры" handleClick={handleClick}/>
      <section className={`${styles.filters} ${!visibleFilters ? styles.filters_hide : ''}`}>
        <header className={styles.filters__header}>
          <h2 className={styles.filters__title}>Фильтры</h2>
        </header>
        <ul className={styles.filters__categories}>
          <li className={styles.filters__category}>
            <h3 className={styles.filters__categoryTitle}>Уровень</h3>
            <ul className={styles.filters__categoryList}>
              {levelOptions.map(level => (
                <li key={level} className={styles.filters__categoryItem}>
                  <div className={styles.filters__categoryOption}>
                    <input
                      name={`level_${level}`}
                      id={`level_${level}`}
                      className={styles.filters__checkbox}
                      type="checkbox"
                      onChange={handleLevelChange}
                    />
                    <label
                      htmlFor={`level_${level}`}
                      className={styles.filters__label}>
                      {SHIP_LEVELS[level]}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.filters__category}>
            <h3 className={styles.filters__categoryTitle}>Класс</h3>
            <ul className={styles.filters__categoryList}>
              {typeOptions.map(type => (
                <li key={type.name} className={styles.filters__categoryItem}>
                  <div className={styles.filters__categoryOption}>
                    <input
                      name={type.name}
                      id={type.name}
                      className={styles.filters__checkbox}
                      type="checkbox"
                      onChange={handleTypeChange}
                    />
                    <label htmlFor={type.name} className={styles.filters__label}>
                      <Image className={styles.filters__labelIcon} src={`https:${type.icon}`} alt="" width={30} height={30}/>
                      {SHIP_TYPE_RU[type.name]}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.filters__category}>
            <h3 className={styles.filters__categoryTitle}>Нация</h3>
            <ul className={styles.filters__categoryList}>
              {nationOptions.map(nation => (
                <li key={nation.name} className={styles.filters__categoryItem}>
                  <div className={styles.filters__categoryOption}>
                    <input
                      name={nation.name}
                      id={nation.name}
                      className={styles.filters__checkbox}
                      type="checkbox"
                      onChange={handleNationChange}
                    />
                    <label htmlFor={nation.name}
                           className={styles.filters__label}>
                      <Image className={styles.filters__labelIcon} src={`https:${nation.icon}`} alt="" width={45} height={27} />
                      {NATIONS_RU[nation.name]}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <footer className={styles.filters__footer}>
          <Button style="text" type="button" title="Скрыть" handleClick={handleHideFilters}/>
          <Button style="accept" type="button" title="Применить"  />
        </footer>
      </section>
    </>
  );
}