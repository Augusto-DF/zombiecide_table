import React from 'react';
import styles from './style.module.css';
import classnames from 'classnames';

const Button = ({ className, image, onClick, alt, haveEffect }) => {
  const [clicked, setClicked] = React.useState(false);

  function handleClick(e) {
    e.preventDefault();
    if (!clicked) {
      setClicked(true);
      onClick && onClick();
      setTimeout(() => {
        setClicked(false);
      }, 100);
    }
  }

  return (
    <button
      type="button"
      className={classnames(className, styles.button)}
      onClick={handleClick}
    >
      <img
        src={haveEffect ? (clicked ? image.clicked : image.default) : image}
        alt={alt}
      />
    </button>
  );
};

export default Button;
