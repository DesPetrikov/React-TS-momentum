import { useCallback, useEffect, useRef, useState } from 'react';
import { WeatherError, WeatherWithData } from '.';

import './owfont-regular.css';

import { getWeather, FilteredDataType } from '../../services';

export const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('Minsk');
  const [weather, setWeather] = useState<FilteredDataType>();
  const [errorStatus, setErrorStatus] = useState<boolean>(false);

  const isTimerStarted = useRef<boolean>(false);

  const weatherHandler = useCallback(() => {
    getWeather(city)
      .then((data) => {
        setWeather(data);
        setErrorStatus(false);
      })
      .catch(() => {
        setErrorStatus(true);
      });
  }, [city]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      weatherHandler();
    }
  };

  useEffect(() => {
    !weather && weatherHandler();
    let interval: NodeJS.Timer;
    if (!isTimerStarted.current) {
      interval = setInterval(weatherHandler, 100000);
      isTimerStarted.current = true;
    }
    return () => {
      clearInterval(interval);
    };
  }, [weather, weatherHandler]);

  if (errorStatus) {
    return (
      <WeatherError
        city={city}
        changeHandler={changeHandler}
        keyPressHandler={keyPressHandler}
      />
    );
  }
  return (
    <WeatherWithData
      weather={weather}
      city={city}
      changeHandler={changeHandler}
      keyPressHandler={keyPressHandler}
    />
  );
};
