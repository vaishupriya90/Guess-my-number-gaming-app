
import { Text, View, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {

    const pressHAndler = () => { }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}
                onPress={pressHAndler}
                android_ripple={{ color: 'pink' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#c2407f',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});
export default PrimaryButton;