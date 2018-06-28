import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const InputWithButtonStyles = EStyleSheet.create({
    $buttonBackgroundColorBase: '$white',
    $buttonBackgroundColorModifier: '0.1',
    container: {
        backgroundColor: '$white',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11
    },
    containerDisabled: {
        backgroundColor: '$lightGray'
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '$primaryBlackish',
        paddingHorizontal: 16
    },
    saperator: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border'
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        borderTopRightRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
        fontSize: 16,
        color: '$inputText',
        paddingHorizontal: 8

    }

});

export default InputWithButtonStyles;