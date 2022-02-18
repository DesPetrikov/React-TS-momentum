import React from "react";

import {Props} from './ErrorIndicator.types'

export const ErrorIndicator: React.FC<Props> = () => {
	return (
		<div>
			<h2>Something has gone wrong</h2>
			<span>We will try to fix it</span>
		</div>
	)
} 