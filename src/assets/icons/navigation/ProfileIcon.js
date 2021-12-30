import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
    const active = '#2890dd';
    const inActive = '#9F9F9F';
    return (
        <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
            <Path
                data-name="Path 10"
                d="M29 24.867v-3.289A6.42 6.42 0 0022.75 15h-12.5A6.42 6.42 0 004 21.578v3.289"
                transform="translate(-4 .133)"
                fill={props.active ? active : inActive}
            />
            <Circle
                data-name="Ellipse 4"
                cx={6}
                cy={6}
                r={6}
                transform="translate(7)"
                fill={props.active ? active : inActive}
            />
        </Svg>
    );
}

export default SvgComponent;
