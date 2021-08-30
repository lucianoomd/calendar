import React from 'react';
import Dates from '../../utils/Dates';
import { useNavigation } from '@react-navigation/native';

import { Container, SecondaryText, Title } from './styles';

const EventHorizontalItem = ({ event }) => {
	const navigation = useNavigation();

	const { title, startTime, endTime, description, color } = event;
	const formattedStartTime = Dates.getFormattedTime(startTime, true);
	const formattedEndTime = Dates.getFormattedTime(endTime, true);
	const formattedTimeRange = startTime && endTime ? `${formattedStartTime} - ${formattedEndTime}, ` : '';
	const formattedDescription = endTime ? description : '';
	const fullSecondaryText = `${formattedTimeRange}${formattedDescription}`;
	const editEvent = () => navigation.navigate('EventDetails', { title: 'Edit Event', event });

	return (
		<Container style={{ backgroundColor: color }} onPress={editEvent}>
			<Title numberOfLines={1}>{title}</Title>
			<SecondaryText>{fullSecondaryText}</SecondaryText>
		</Container>
	);
};

export default EventHorizontalItem;
