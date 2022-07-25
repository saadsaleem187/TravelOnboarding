import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import {images, theme} from '../constants';

const {COLORS, SIZES, FONTS} = theme;
const {onBoarding1, onBoarding2, onBoarding3} = images;
const onBoardings = [
  {
    title: "Let's Travelling",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: onBoarding1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: onBoarding2,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: onBoarding3,
  },
];

const OnBoarding = () => {
  const scrollX = new Animated.Value(0);

  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onBoardings.map((item, index) => {
          return (
            <View key={index} style={{width: SIZES.width}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.img}
                  resizeMode="cover"
                  style={{width: 400, height: 400}}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: '5%',
                  left: 40,
                  right: 40,
                }}>
                <Text
                  style={{
                    ...FONTS.h1,
                    color: COLORS.gray,
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    textAlign: 'center',
                    marginTop: SIZES.base,
                    color: COLORS.gray,
                  }}>
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => console.log('on skip pressed')}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 100,
                  height: 50,
                  paddingLeft: 20,
                  justifyContent: 'center',
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                  backgroundColor: COLORS.blue,
                }}>
                <Text style={{...FONTS.h1, color: COLORS.white}}>Skip</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </Animated.ScrollView>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              opacity={opacity}
              style={[
                styles.dot,
                {width: dotSize, height: dotSize},
              ]}></Animated.View>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '28%' : '20%',
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});

export default OnBoarding;
