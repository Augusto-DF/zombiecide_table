import classnames from 'classnames';
import React from 'react';
import Button from '../Button';
import { BUTTON_ICONS } from './constants';
import styles from './style.module.css';

const HealthBar = () => {
  const [hpBar, setHpBar] = React.useState([]);
  const [hp, setHp] = React.useState(0);

  function generateHp(healthPoints) {
    const array = [];
    for (let ii = 0; ii < 4; ++ii) {
      if (ii <= healthPoints) {
        array.push(true);
      } else {
        array.push(false);
      }
    }
    return array;
  }

  function takeDamage() {
    hp < 4 && setHp(hp + 1);
  }

  function heal() {
    hp > 0 && setHp(hp - 1);
  }

  React.useEffect(() => {
    setHpBar(generateHp(hp));
  }, [hp]);
  return (
    <div>
      <span className={styles.label}>DAMAGE</span>
      <div className={styles['damage-container']}>
        <div className={styles.healthBar}>
          {hpBar.length > 0 &&
            hpBar.map((point, index) => {
              return point ? (
                <div
                  key={index}
                  className={classnames(styles.damege, styles.healthPoint)}
                ></div>
              ) : (
                <div
                  key={index}
                  className={classnames(styles.healthPoint)}
                ></div>
              );
            })}
        </div>
        <Button
          className={styles.button}
          image={BUTTON_ICONS.DAMAGE}
          haveEffect={true}
          onClick={takeDamage}
        />
        <Button
          className={styles.button}
          image={BUTTON_ICONS.HEAL}
          haveEffect={true}
          onClick={heal}
        />
      </div>
    </div>
  );
};

export default HealthBar;
