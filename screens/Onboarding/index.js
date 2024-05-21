import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import Svg, { Path } from 'react-native-svg'
import { constants, COLORS, SIZES, FONTS } from "../../constants";

const Onboarding = () => {

  // SVG
  const controlX = SIZES.width / 2; // control center point's x coordinate

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: COLORS.primary50 }}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={item => `onboarding_screens_phone-${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: SIZES.width, alignItems: 'center' }}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    marginTop: SIZES.padding * 3,
                    width: SIZES.width * 0.8,
                    height: SIZES.height * 0.8
                  }}
                />
              </View>
            )
          }}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: COLORS.gray900 }}>
        {/* Curve */}
        <Svg
          style={{ position: 'absolute', top: -100 }}
          width={SIZES.width}
          height={100}
        >
          <Path
            d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
            fill={COLORS.gray900}
          />
        </Svg>

        {/* Title and Description */}
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={item => `onboarding_screens_title-${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  paddingHorizontal: SIZES.radius,
                  width: SIZES.width,
                  alignItems: 'center'
                }}
              >
                {/* Title */}
                <Text style={{ ...FONTS.h1, textAlign: "center", color: COLORS.primary100 }}>
                  {item.title}
                </Text>

                {/* Description */}
                <Text style={{ ...FONTS.pr2, marginTop: SIZES.radius, textAlign: 'center', color: COLORS.primary100 }}>{item.desc}</Text>

              </View>
            )
          }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
