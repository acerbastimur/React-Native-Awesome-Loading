import * as React from 'react';
import {View, Text, TextStyle, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

export interface AwesomeLoadingProps {
  indicatorId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  size?: number;
  text?: string;
  textStyle?: TextStyle;
  direction?: 'row' | 'column';
  isActive: boolean;
}

export interface AwesomeLoadingState {}

export default class AwesomeLoading extends React.Component<
  AwesomeLoadingProps,
  AwesomeLoadingState
> {
  constructor(props: AwesomeLoadingProps) {
    super(props);
    this.state = {};
  }

  renderIndicator = (indicatorId: number, size: number) => {
    switch (indicatorId) {
      case 1:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator1.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );

      case 2:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator2.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );

      case 3:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator3.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );

      case 4:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator4.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );
      case 5:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator5.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );
      case 6:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator6.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );
      case 7:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator7.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );
      case 8:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator8.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );

      default:
        return (
          <FastImage
            style={{width: size, height: size, alignSelf: 'center'}}
            source={require('./indicators/indicator1.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        );
    }
  };

  public render() {
    const {
      indicatorId = 1,
      size = 50,
      text,
      direction,
      textStyle,
      isActive,
    } = this.props;
    return isActive ? (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          flexDirection: direction,
          position: 'absolute',
          height: Dimensions.get('screen').height,
          width: '100%',
          zIndex: 999999,
          elevation: 1,
        }}>
        {this.renderIndicator(indicatorId, size)}
        {text ? <Text style={textStyle}>{text}</Text> : null}
      </View>
    ) : null;
  }
}
