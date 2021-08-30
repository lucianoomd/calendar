import styled from 'styled-components/native';

import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

export const Container = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	padding: 10px;
`;

export const Text = styled.Text`
	text-align: center;
	align-items: center;
	justify-content: center;
	font-family: ${Fonts.ARIAL};
`;
