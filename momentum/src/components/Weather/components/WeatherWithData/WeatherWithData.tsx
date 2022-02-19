import React from 'react';
import { WeatherWithDataProps } from './WeatherWithData.types';
import classes from '../../Weather.module.css';



export const WeatherWithData: React.FC<WeatherWithDataProps> = ({weather, city, changeHandler, keyPressHandler}) => (
    <div className={classes.weather}>
      <div>
        <i
          className={`${classes.icon} owf owf-${weather?.weatherId || null}`}
         />
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
