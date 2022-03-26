import React from 'react';

import s from './Hero.module.css';

function Hero() {
  return (
    <div className={s.Hero}>
      <div className={s.titleBox}>
        <span className={s.subtitle}>Expresso</span>
        <h1 className={s.title}>café reviews</h1>
      </div>
      <div className={s.imgBox}>
        <img
          className={s.img}
          src="https://cdn.pixabay.com/photo/2018/10/19/16/46/coffee-3759005_1280.jpg"
          alt="coffee"
          width="360"
        />
      </div>
    </div>
  );
}

export default Hero;