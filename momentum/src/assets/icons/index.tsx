import React, { SVGAttributes } from "react";

import { ReactComponent as Audio } from "./audio.svg";
import { ReactComponent as Home } from "./home.svg";
import { ReactComponent as Video } from "./video.svg";

export const AudioSVG: React.FC<SVGAttributes<SVGElement>> = (props) => (
    <Audio {...props} />
);

export const HomeSVG: React.FC<SVGAttributes<SVGElement>> = (props) => (
    <Home {...props} />
);

export const VideoSVG: React.FC<SVGAttributes<SVGElement>> = (props) => (
    <Video {...props} />
);
