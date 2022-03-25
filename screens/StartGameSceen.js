import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false} />

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,//shadow for andriod devices
        //for shadow in ios use shadow properties
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1,
        padding: 15,
        backgroundColor: '#72063c'
    },
    textInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen;