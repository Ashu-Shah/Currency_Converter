import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const LogoStyles = EStyleSheet.create({
    $largeContainerSize: imageWidth,
    $largeImageSize: imageWidth,
    $smallContainerSize: imageWidth / 2,
    $smallImageSize: imageWidth / 2,

    container: {
        alignItems: 'center'
    },
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '$largeContainerSize',
        height: '$largeContainerSize'
    },
    logo: {
        width: '$largeImageSize',
        height: '$largeImageSize'
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