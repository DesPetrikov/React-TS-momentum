/// <reference types="react-scripts" />
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    import React from "react";

    export const ReactComponent: React.FunctionComponent<
        React.SVGAttributes<SVGElement>
    >;
}
