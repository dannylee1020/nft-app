import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
    CircleButton,
    RectButton,
    SubInfo,
    FocusedStatusBar,
    DetailsDesc,
    DetailsBids,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: "100%", height: 373 }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
        />
        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />

        <CircleButton
            imgUrl={assets.heart}
            right={15}
            top={StatusBar.currentHeight + 10}
        />
    </View>
);

const Details = ({ route, navigation }) => {
    const { data } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            ></FocusedStatusBar>
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    paddingVertical: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 0.5)",
                    zIndex: 1,
                }}
            >
                <RectButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                ></RectButton>
            </View>
            <FlatList
                // data is being passed from navigation in NFTCard as params in route prop automatically by react navigation
                data={data.bids}
                renderItem={({ item }) => <DetailsBids bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDesc data={data} />

                            {data.bids.length > 0 && (
                                <Text
                                    style={{
                                        fontSize: SIZES.font,
                                        fontFamily: FONTS.bold,
                                        color: COLORS.primary,
                                        marginTop: 40,
                                    }}
                                >
                                    Current Bids
                                </Text>
                            )}
                        </View>
                    </React.Fragment>
                )}
            ></FlatList>
        </SafeAreaView>
    );
};

export default Details;
