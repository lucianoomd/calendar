import styled from 'styled-components/native';

import Colors from '../../utils/Colors';

export const Container = styled.View`
	flex: 1;
	padding: 20px;
	background-color: ${Colors.WHITE};
`;

export const LeftSubHeaderTitle = styled.Text`
	color: ${Colors.BLACK};
`;

export const ListColorButtons = styled.FlatList`
	margin-top: 20px;
`;

export const ColorButton = styled.TouchableOpacity`
	height: 50px;
	width: 50px;
	border-width: 2px;
`;

export const ButtonContainer = styled.View`
	flex-grow: 1;
	justify-content: flex-end;
	align-items: center;
`;

