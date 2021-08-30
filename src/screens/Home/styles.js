import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import Colors from '../../utils/Colors';

export const Container = styled.SafeAreaView`
	background-color: ${Colors.WHITE};
	flex: 1;
`;

export const ScrollViewContainer = styled.ScrollView`
	padding: 20px;
	background-color: ${Colors.WHITE};
`;

export const SubHeaderContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const LeftSubHeaderTitle = styled.Text`
	color: ${Colors.BLACK};
`;

export const RightSubHeaderTitle = styled.Text`
	color: ${Colors.LIGHT_GRAY};
`;

export const ButtonAdd = styled.TouchableOpacity`
	position: absolute;
	bottom: 20px;
	right: 20px;
	height: 50px;
	width: 50px;
	border-radius: 25px;
	background-color: ${Colors.LIGHT_GREEN};
	align-items: center;
	justify-content: center;
`;

export const Icon = styled(MaterialIcon)``;