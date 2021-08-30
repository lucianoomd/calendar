import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

export const Container = styled.View`
	background-color: ${Colors.HEADER_DEFAULT};
	justify-content: center;
	align-items: center;
	padding: 10px;
	flex-direction: row;
`;

export const ButtonTitle = styled.TouchableOpacity`
	padding: 5px;
`;

export const RightButton = styled.TouchableOpacity`
	position: absolute;
	right: 10px;
`;

export const TitleContainer = styled.View`
	flex-direction: row;
`;

export const Icon = styled(MaterialIcon)``;

export const Title = styled.Text`
	font-family: ${Fonts.ARIAL};
	font-size: 18px;
	font-weight: bold;
	color: ${Colors.WHITE};
`;

export const Subtitle = styled.Text`
	font-family: ${Fonts.ARIAL};
	font-size: 16px;
	color: ${Colors.WHITE};
`;
