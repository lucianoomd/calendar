import React from 'react';
import Colors from '../../utils/Colors';
import { Container, ErrorText, TitleText, TextInput } from './styles';

const CustomTextInput = ({
    title = '',
    text = '',
    onChangeText = () => {},
    mask = (value) => value,
    placeholder = '',
    keyboardType = 'default',
    maxLength,
    errorMessage = '',
    secureTextEntry = false,
    onSubmit= () => {},
}) => {
    const maskedValue = mask(text)
    
    return (
        <Container>
            <TitleText>{title}</TitleText>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.LIGHT_GRAY}
                keyboardType={keyboardType}
                value={maskedValue}
                onChangeText={onChangeText}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmit}
            />
            {errorMessage !== '' && <ErrorText>{errorMessage}</ErrorText>}
        </Container>
    )
};

export default CustomTextInput
