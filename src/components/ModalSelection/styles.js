import styled from 'styled-components/native';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

export const Modal = styled.Modal``;

export const ModalBackground = styled.TouchableOpacity`
	flex: 1;
	background-color: ${Colors.TRANSPARENT_BACK};
	align-items: center;
	justify-content: center;
`;

export const ButtonItem = styled.TouchableOpacity`
	padding: 10px 0;
	flex-direction: row;
	margin-bottom: 5px;
	align-items: center;
`;

export const ModalView = styled.TouchableOpacity`
	background-color: ${Colors.WHITE};
	width: 80%;
	max-height: 80%;
	padding: 10px;
	border-radius: 5px;
`;

export const Text = styled.Text`
	color: ${Colors.BLACK};
	font-size: 14px;
	line-height: 20px;
	font-family: ${Fonts.ARIAL};
`;

export const ContainerItems = styled.ScrollView`
	margin-top: 20px;
	margin-bottom: 35px;
	flex-grow: 1;
`;
