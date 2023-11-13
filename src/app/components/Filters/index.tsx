import styles from './filters.module.scss';
import Button from '@/app/components/Button';
import { NATIONS_RU, SHIP_LEVELS, SHIP_TYPE_RU } from '@/app/utils/constans';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import {
  resetFilters,
  toggleLevelOption,
  toggleTypeOption,
  toggleNationOption,
} from '@/app/redux/features/filtersSlice';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import clsx from 'clsx';

export default function Filters() {
  const dispatch = useTypedDispatch();
  const levelOptions = useTypedSelector(state => state.filters.levelOptions);
  const typeOptions = useTypedSelector(state => state.filters.typeOptions);
  const nationOptions = useTypedSelector(state => state.filters.nationOptions);
  const selectedLevels = levelOptions.filter(level => level.isSelected);
  const selectedTypes = typeOptions.filter(type => type.isSelected);
  const selectedNations = nationOptions.filter(nation => nation.isSelected);
  const [visibleFilters, setVisibleFilters] = useState(false);
  const isFiltersSelected = selectedLevels.length > 0 || selectedTypes.length > 0 || selectedNations.length > 0;
  function handleLevelChange(level: number) {
    dispatch(toggleLevelOption(level));
  }

  function handleTypeChange(typeName: string) {
    dispatch(toggleTypeOption(typeName));
  }

  function handleNationChange(nationName: string) {
    dispatch(toggleNationOption(nationName));
  }

  function handleClick() {
    setVisibleFilters(!visibleFilters);
  }
  
  function handleHideFilters() {
    if (visibleFilters) {
      setVisibleFilters(false);
    }
  }

  function handleClearFilters() {
    dispatch(resetFilters());
  }

  function handleRemoveLevelTag(levelNumber: number) {
    dispatch(toggleLevelOption(levelNumber));
  }

  function handleRemoveTypeTag(levelNumber: string) {
    dispatch(toggleTypeOption(levelNumber));
  }

  function handleRemoveNationTag(levelNumber: string) {
    dispatch(toggleNationOption(levelNumber));
  }

  return (
    <section className={styles.filters}>
      <div className={styles.filters__buttonContainer}>
        <Button type="button" style="filter" title="Фильтры" parentBlockClasses={styles.filters__button} handleClick={handleClick} />
        <button
          className={clsx(styles.filters__buttonClear, !isFiltersSelected && styles.filters__buttonClear_hide)}
          type="button"
          onClick={handleClearFilters}
        >Очистить фильтры</button>
      </div>
      <div className={styles.filters__activeFilters}>
        {selectedLevels.length > 0 &&
            <ul className={styles.filters__activeFiltersList}>
              {selectedLevels.map(level => (
                <li className={styles.filters__activeFiltersItem} key={level.number}>
                  <span className={styles.filters__activeFiltersTag}>{SHIP_LEVELS[level.number]}</span>
                  <button className={styles.filters__removeTag} type="button" onClick={() => handleRemoveLevelTag(level.number)} />
                </li>
              ))}
            </ul>
        }
        {selectedTypes.length > 0 &&
            <ul className={styles.filters__activeFiltersList}>
              {selectedTypes.map(type => (
                <li className={styles.filters__activeFiltersItem} key={type.name}>
                  <span className={styles.filters__activeFiltersTag}>{SHIP_TYPE_RU[type.name]}</span>
                  <button className={styles.filters__removeTag} type="button" onClick={() => handleRemoveTypeTag(type.name)} />
                </li>
              ))}
            </ul>
        }
        {selectedNations.length > 0 &&
            <ul className={styles.filters__activeFiltersList}>
              {selectedNations.map(nation => (
                <li className={styles.filters__activeFiltersItem} key={nation.name}>
                  <span className={styles.filters__activeFiltersTag}>{NATIONS_RU[nation.name]}</span>
                  <button className={styles.filters__removeTag} type="button" onClick={() => handleRemoveNationTag(nation.name)} />
                </li>
              ))}
            </ul>
        }
      </div>
      <div className={clsx(styles.filters__container, !visibleFilters && styles.filters__container_hide)}>
        <header className={styles.filters__header}>
          <h2 className={styles.filters__title}>Фильтры</h2>
        </header>
        <ul className={styles.filters__categories}>
          <li className={styles.filters__category}>
            <h3 className={styles.filters__categoryTitle}>Уровень</h3>
            <ul className={`${styles.filters__categoryList} ${styles.filters__categoryList_style_level}`}>
              {levelOptions.map(level => (
                <li key={level.number} className={styles.filters__categoryItem}>
                  <div className={styles.filters__categoryOption}>
                    <input
                      name={`level_${level.number}`}
                      id={`level_${level.number}`}
                      className={styles.filters__checkbox}
                      type="checkbox"
                      onChange={() => handleLevelChange(level.number)}
                      checked={level.isSelected}
                    />
                    <label
                      htmlFor={`level_${level.number}`}
                      className={styles.filters__label}>
                      {SHIP_LEVELS[level.number]}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.filters__category}>
            <h3 className={styles.filters__categoryTitle}>Класс</h3>
            <ul className={`${styles.filters__categoryList} ${styles.filters__categoryList_style_type}`}>
              {typeOptions.map(type => (
                <li key={type.name} className={styles.filters__categoryItem}>
                  <div className={styles.filters__categoryOption}>
                    <input
                      name={type.name}
                      id={type.name}
                      className={styles.filters__checkbox}
                      type="checkbox"
                      onChange={() => handleTypeChange(type.name)}
                      checked={type.isSelected}
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
            <ul className={`${styles.filters__categoryList} ${styles.filters__categoryList_style_nation}`}>
              {nationOptions.map(nation => (
                <li key={nation.name} className={styles.filters__categoryItem}>
                  <div className={styles.filters__categoryOption}>
                    <input
                      name={nation.name}
                      id={nation.name}
                      className={styles.filters__checkbox}
                      type="checkbox"
                      onChange={() => handleNationChange(nation.name)}
                      checked={nation.isSelected}
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
        </footer>
      </div>
    </section>
  );
}