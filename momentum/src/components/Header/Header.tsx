import React from "react";
import { AudioSVG, HomeSVG, VideoSVG } from "assets";
import { AnchorButton } from "../shared/AnchorButton";
import { Weather } from "../Weather";
import classes from "./Header.module.css";
import { audioClass, videoClass, homeClass } from "../Svg";

export const Header: React.FC = () => (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <AnchorButton
                        to="/"
                        icon={HomeSVG}
                        title="Home"
                        iconStyle={homeClass.svg}
                    />
                </li>
                <li>
                    <AnchorButton
                        to="/audioPlayer"
                        icon={AudioSVG}
                        title="Audio"
                        iconStyle={audioClass.svg}
                    />
                </li>
                <li>
                    <AnchorButton
                        to="/videoPlayer"
                        icon={VideoSVG}
                        title="Video"
                        iconStyle={videoClass.svg}
                    />
                </li>
            </ul>
        </nav>
        <Weather />
    </header>
);
