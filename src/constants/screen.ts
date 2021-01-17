import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen')

const properties = {
    height: Math.round(height),
    widht: Math.round(width)
}

export default properties;