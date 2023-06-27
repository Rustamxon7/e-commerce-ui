import React from 'react';

const Dots = ({ position, setPosition, styles }) => {
  return (
    <div className={styles.dots}>
      {[0, 1, 2].map((i) => (
        <span
          className={position === i ? styles.active_dot : styles.dot}
          onClick={() => setPosition(i)}
        />
      ))}
    </div>
  );
};

export default Dots;
