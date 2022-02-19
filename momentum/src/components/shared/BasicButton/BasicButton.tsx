import React, { MouseEventHandler, useCallback } from "react";
import { BasicButtonTypes } from "./BasicButton.types";

export const BasicButton: React.FC<BasicButtonTypes> = ({
    title,
    titleStyles,
    buttonContainerStyles,
    icon,
    iconColor,
    iconHeight,
    iconStyle,
    iconWidth,
    onClick,
}) => {
    const onClickHandler: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            onClick?.(event);
        },
        []
    );
    const Icon = icon as React.FC<React.SVGAttributes<SVGElement>>;
    return (
        <button
            type="button"
            style={buttonContainerStyles}
            onClick={onClickHandler}
        >
            {icon && (
                <Icon
                    height={iconHeight}
                    width={iconWidth}
                    fill={iconColor as string}
                    className={iconStyle}
                />
            )}
            <span style={titleStyles}>{title}</span>
        </button>
    );
};
