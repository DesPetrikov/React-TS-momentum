import { WeatherWithDataProps } from './WeatherWithData.types';
import classes from '../../Weather.module.css';
import React from 'react';



export const WeatherWithData: React.FC<WeatherWithDataProps> = ({weather, city, changeHandler, keyPressHandler}) => {
  return (
    <div className={classes.weather}>
      <div>
        <i
          className={`${classes.icon} owf owf-${weather?.weatherId || null}`}
        ></i>
        <span className={classes.temperature}>
          {`${weather?.temperature || null} °C`}{' '}
        </span>
      </div>
      <div>
        <div className={classes.description}>
          {weather?.description || null}
        </div>
        <div>{`Humidity ${weather?.humidity || null} %`}</div>
        <div>{`Wind speed ${weather?.windSpeed || null} m/sec`}</div>
        <input
          value={city}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          className={classes.city}
        />
      </div>
    </div>
  );
};
