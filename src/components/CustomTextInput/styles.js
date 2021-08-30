import styled from 'styled-components/native';

import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

export const Container = styled.View`
	padding: 10px 0;
	background-color: ${Colors.WHITE};
	align-items: center;
`;

export const TitleText = styled.Text`
	color: ${Colors.BLACK};
	font-family: ${Fonts.ARIAL};
	text-align: left;
	margin-bottom: 5px;
	font-size: 10px;
	width: 100%;
`;

export const ErrorText = styled.Text`
	color: ${Colors.RED_ERROR};
	text-align: right;
	margin-top: 3px;
	font-family: ${Fonts.ARIAL};
	font-size: 10px;
	width: 100%;
`;

export const TextInput = styled.TextInput`
	width: 100%;
	font-family: ${Fonts.ARIAL};
	height: 45px;
	color: ${Colors.BLACK};
	padding-left: 20px;
	font-size: 14px;
	border-width: 1px;
	border-color: ${Colors.BLACK};
	background-color: ${Colors.WHITE};
`;

