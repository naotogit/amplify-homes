/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="240px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="240px"
        height="18px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="194px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Price: "}${home?.price}${"/night"}`}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="240px"
        height="18px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="168px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.address}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Image
        width="320px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
