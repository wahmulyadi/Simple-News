import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    const active = '#2890dd';
    const inActive = '#9F9F9F';
    return (
        <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
            <Path data-name="Path 7" d="M0 0h25v25H0z" fill="none" />
            <Path
                data-name="Path 8"
                d="M12.582 25.864v-7.192h5.435v7.192a1.4 1.4 0 001.358 1.436h4.076a1.4 1.4 0 001.359-1.438V15.795h2.31a.72.72 0 00.448-1.251L16.209 3.712a1.313 1.313 0 00-1.821 0L3.03 14.543a.723.723 0 00.448 1.251h2.31v10.07A1.4 1.4 0 007.147 27.3h4.076a1.4 1.4 0 001.359-1.436z"
                transform="translate(0 .813) translate(-2.802 -3.345)"
                fill={props.active ? active : inActive}
            />
        </Svg>
    );
}

export default SvgComponent;
