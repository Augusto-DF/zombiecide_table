import React from 'react';
import Button from '../Button';
import Pin from '../Pin';
import { XP } from './constants';
import styles from './style.module.css';

const XpDisplay = () => {
  const [xp, setXp] = React.useState(0);
  const [pos, setPos] = React.useState(0);
  const onePartOfBar = 13;

  function gotXp() {
    setXp(xp + 1);
    xp >= 1 && pos < 550 && setPos(pos + onePartOfBar);
  }

  function lostXp() {
    xp > 0 && setXp(xp - 1);
    pos > 0 && setPos(pos - onePartOfBar);
  }
  return (
    <div className={styles['xp-container']}>
      <div className={styles['button-container']}>
        <Button className={styles.button} image={XP.prev} onClick={lostXp} />
        <Button className={styles.button} image={XP.next} onClick={gotXp} />
      </div>
      <div className={styles['xp-bar']}>
        <Pin
          value={xp}
          className={styles.pin}
          style={{ marginLeft: pos + 'px' }}
        />
        <div className={styles.bar}>
          <div className={styles['blue-bar']}></div>
          <div className={styles['yellow-bar']}></div>
          <div className={styles['orange-bar']}></div>
          <div className={styles['red-bar']}></div>
        </div>
      </div>
    </div>
  );
};

export default XpDisplay;
