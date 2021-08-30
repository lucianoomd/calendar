import React from 'react';
import Colors from '../../utils/Colors';
import { Container, Icon } from './styles';

const IconButton = ({
    onPress = () => {},
    disabled = false,
    color = Colors.WHITE,
    size = 30,
    icon = '',
}) => {
    const customColor = disabled ? Colors.LIGHT_GRAY : color;
    const customOnPress = disabled ? () => {} : onPress;

    return (
        <Container onPress={customOnPress} >
            <Icon name={icon} size={size} color={customColor} />
        </Container>           
    )
}

export default IconButton;
