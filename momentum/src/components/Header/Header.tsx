import React from 'react';
import { AnchorButton } from '../Button';
import { Weather } from '../Weather';

import classes from './Header.module.css';

import { SvgAudioAnchor, SvgMainAnchor, SvgVideoAnchor } from '../Svg';


export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <AnchorButton to="/">
              <SvgMainAnchor />
            </AnchorButton>
          </li>
          <li>
            <AnchorButton to={'/audioPlayer'}>
              <SvgAudioAnchor/>
            </AnchorButton>
          </li>
          <li>
            <AnchorButton to={'/videoPlayer'}>
              <SvgVideoAnchor />
            </AnchorButton>
          </li>
        </ul>
      </nav>
      <Weather />
    </header>
  );
};

