import React from "react";
import { Link } from "react-router-dom";
import { AnchorButtonTypes } from "./AnchorButton.types";
import classes from "./AnchorButton.module.css";
import { BasicButton } from "../BasicButton/BasicButton";

export const AnchorButton: React.FC<AnchorButtonTypes> = ({
    to,
    title,
    titleStyles,
    icon,
    iconWidth,
    iconHeight,
    iconColor,
    iconStyle = "",
    buttonContainerStyles,
    onClick,
}) => (
    <Link to={to} className={classes.link}>
        <BasicButton
            title={title}
            titleStyles={titleStyles}
            icon={icon}
            iconWidth={iconWidth}
            iconHeight={iconHeight}
            iconColor={iconColor}
            iconStyle={iconStyle}
            buttonContainerStyles={buttonContainerStyles}
            onClick={onClick}
        />
    </Link>
);
