import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const LogoStyles = EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: imageWidth,
        height: imageWidth
    },
    logo: {
        width: imageWidth / 2
    },
    logoTitle: {
        fontWeight: '600',
        fontSize: 28,
        color: '$white',
        letterSpacing: -0.5,
        marginTop: 15
    }
});

export default LogoStyles;