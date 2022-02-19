import React from "react";
import { FilteredDataType } from "../../../../services";

export type WeatherWithDataProps = {
    weather: FilteredDataType | undefined;
    city: string;
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    keyPressHandler: (event: React.KeyboardEvent) => void;
};
