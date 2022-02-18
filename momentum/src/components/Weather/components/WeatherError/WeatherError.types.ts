export type WeatherErrorProps = {
	city: string;
	changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	keyPressHandler: (event: React.KeyboardEvent) => void;
};
