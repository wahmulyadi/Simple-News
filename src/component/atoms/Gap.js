import React from 'react';
import {View} from 'react-native';

const Gap = ({height, width, marginTop, marginBottom, padding}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        marginTop: marginTop,
        marginBottom: marginBottom,
        padding: padding,
        // paddingLeft: paddingLeft,
        // paddingRight: paddingRight,
        // paddingBottom: paddingBottom,
        // paddingTop: paddingTop,
      }}
    />
  );
};

export default Gap;