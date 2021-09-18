import React from 'react';
import classnames from 'classnames';
import styles from './style.module.css';
const Pin = ({ value, className, style }) => {
  const [bigPin, setBigPin] = React.useState(null);

  function handleClick(event) {
    event.preventDefault();
    bigPin === 'clicked' ? setBigPin('unclicked') : setBigPin('clicked');
  }

  return (
    <div
      onClick={handleClick}
      className={classnames(styles['pin-container'], className)}
      style={style}
    >
      <div className={classnames(styles['pin-body'], styles[bigPin])}>
        <div className={classnames(styles['big-head-modafoka'])}>
          <div className={classnames(styles['xp-display'])}>
            {bigPin === 'clicked' && <span>{value + ' xp'}</span>}
          </div>
        </div>
        <div className={classnames(styles['little-leg'])}></div>
      </div>
    </div>
  );
};

export default Pin;
