import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

export const Container = styled.View`
	padding: 10px 0;
	background-color: ${Colors.WHITE};
	flex-direction: row;
`;

export const ContentContainer = styled.View``;

export const TitleText = styled.Text`
	color: ${Colors.BLACK};
	font-family: ${Fonts.ARIAL};
	text-align: left;
	margin-bottom: 5px;
	font-size: 10px;
`;

export const CustomPickerYear = styled(Picker)`
	font-family: ${Fonts.ARIAL};
	color: ${Colors.BLACK};
	width: 110px;
`;

export const CustomPickerMonth = styled(Picker)`
	font-family: ${Fonts.ARIAL};
	color: ${Colors.BLACK};
	width: 150px;
`;

export const CustomPickerDay = styled(Picker)`
	font-family: ${Fonts.ARIAL};
	color: ${Colors.BLACK};
	width: 110px;
`;

export const PickerItem = styled(Picker.Item)`
	font-family: ${Fonts.ARIAL};
	color: ${Colors.BLACK};
	font-size: 14px;
`;

