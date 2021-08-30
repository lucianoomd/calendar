import React, { useEffect, useState } from 'react';
import Dates from '../../utils/Dates';

import { ButtonTitle, Container, Subtitle, Title, TitleContainer, Icon, RightButton } from './styles';
import Colors from '../../utils/Colors';
import IconButton from '../IconButton';

const Header = ({
	title = 'DefaultTitle',
	subtitle = 'defaultSubtitle',
	onPressHeader = () => {},
	onPressHeaderRight = () => {},
}) => {
	return (
		<Container>
			<ButtonTitle onPress={onPressHeader}>
				<TitleContainer>
					<Title>{title}</Title>
					<Icon name='menu-down' size={25} color={Colors.WHITE} />
				</TitleContainer>
				<Subtitle>{subtitle}</Subtitle>
			</ButtonTitle>
			<RightButton onPress={onPressHeader}>
				<IconButton icon='calendar' onPress={onPressHeaderRight} color={Colors.WHITE} />
			</RightButton>
		</Container>
	);
};

export default Header;
