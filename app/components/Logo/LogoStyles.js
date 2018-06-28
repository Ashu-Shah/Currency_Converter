import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const LogoStyles = EStyleSheet.create({
    $smallContainerSize: imageWidth / 2.5,
    $smallImageSize: imageWidth / 4,
    $largeContainerSize: imageWidth / 1.5,
    $largeImageSize: imageWidth / 2,

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
        tintColor: '$primaryBlackish'
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