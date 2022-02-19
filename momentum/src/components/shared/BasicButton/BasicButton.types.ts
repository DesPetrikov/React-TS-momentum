import { CSSProperties, FC, SVGAttributes, MouseEvent } from "react";

export type BasicButtonTypes = {
    title: string;
    titleStyles?: CSSProperties;
    buttonContainerStyles?: CSSProperties;
    icon?: FC<SVGAttributes<SVGElement>>;
    iconWidth?: number;
    iconHeight?: number;
    iconColor?: Pick<CSSProperties, "color">;
    iconStyle?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
