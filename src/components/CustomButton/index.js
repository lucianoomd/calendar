import React from 'react';
import Colors from '../../utils/Colors';
import { Container, Text } from './styles';

const CustomButton = ({
    title = '',
    onPress = () => {},
    handleDisabled = () => {},
    disabled = false,
    bgColor = Colors.LIGHT_GREEN,
    width = '70%',
    height = 50,
    marginTop = 0,
    marginBottom = 0,
    textColor = Colors.WHITE,
    fontSize = 18,
    textTransform = 'capitalize'
}) => {
    const backgroundColor = disabled ? Colors.LIGHT_GRAY : bgColor;
    const customOnPress = disabled ? handleDisabled : onPress;

    return (
        <Container
            onPress={customOnPress}
            style={{
                backgroundColor,
                width,
                height,
                marginBottom,
                marginTop
            }}
        >
            <Text style={{
                color: textColor,
                fontSize: fontSize,
                textTransform
            }}>
                {title}
            </Text>
        </Container>           
    )
}

export default CustomButton;
