import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';

const HeaderStyles = EStyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left:  0,
        right: 0,
        //backgroundColor: 'green',
        '@media ios': {
            paddingTop: 20
        },
        '@media android': {
            paddingTop: StatusBar.currentHeight
        }
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    icon: {
        width: 18
    }
});

export default HeaderStyles;