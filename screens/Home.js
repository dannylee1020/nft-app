import { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => (
                            <NFTCard data={item}></NFTCard>
                        )}
                        keyExtractor={(item) => item.id}
                        showVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                    <View
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            zIndex: -1,
                        }}
                    >
                        <View
                            style={{
                                height: 300,
                                backgroundColor: COLORS.primary,
                            }}
                        />
                        <View
                            style={{ flex: 1, backgroundColor: COLORS.white }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
