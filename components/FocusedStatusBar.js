import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/core";
import { View, StatusBar } from "react-native";

const CustomStatusBar = ({ backgroundColor, barStyle = "light-content" }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </View>
    );
};

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
    return isFocused ? <CustomStatusBar {...props} /> : null;
};

export default FocusedStatusBar;
