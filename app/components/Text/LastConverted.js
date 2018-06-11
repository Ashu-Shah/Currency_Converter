import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import LastConvertedStyles from './LastConvertedStyles';
import moment from 'moment';

const LastConverted = ({base, quote, date, conversionRate}) => (
    <Text style={LastConvertedStyles.smallText}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
);

LastConverted.propTypes = {
    base: PropTypes.string,
    quote: PropTypes.string,
    date: PropTypes.object,
    conversionRate: PropTypes.number
};

export default LastConverted;