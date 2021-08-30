import styled from 'styled-components/native';

import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

export const Container = styled.View`
	background-color: ${Colors.WHITE};
	flex-direction: row;
	margin: 10px 0;
	min-height: 70px;
`;

export const LeftContainer = styled.View`
	margin-right: 20px;
	align-items: center;
`;

export const RightContainer = styled.View`
	flex: 1;
	justify-content: center;
`;

export const Title = styled.Text`
	font-family: ${Fonts.ARIAL};
	font-size: 28px;
	color: ${Colors.BLACK};
`;

export const SecondaryText = styled.Text`
	font-family: ${Fonts.ARIAL};
	font-size: 12px;
	color: ${Colors.LIGHT_GRAY};
`;
