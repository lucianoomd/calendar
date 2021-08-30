import styled from 'styled-components/native';

import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

export const Container = styled.TouchableOpacity`
	padding: 10px;
	margin-bottom: 10px;
`;

export const Title = styled.Text`
	font-family: ${Fonts.ARIAL};
	font-weight: bold;
	font-size: 18px;
	color: ${Colors.WHITE};
`;

export const SecondaryText = styled.Text`
	font-family: ${Fonts.ARIAL};
	font-size: 12px;
	color: ${Colors.WHITE};
`;
