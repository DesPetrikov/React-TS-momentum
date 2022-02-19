import React from 'react';

import { WeatherErrorProps } from './WeatherError.types';

import classes from '../../Weather.module.css';

export const WeatherError: React.FC<WeatherErrorProps> = ({
  city,
  changeHandler,
  keyPressHandler,
}) => (
    <div className={classes.weather}>
      <h3>Wrong city!</h3>
      <p>Enter correct city.</p>
      <input
        value={city}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        className={classes.city}
      />
    </div>
  );
