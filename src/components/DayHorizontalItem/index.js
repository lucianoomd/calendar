import React from 'react';
import Dates from '../../utils/Dates';
import EventHorizontalItem from '../EventHorizontalItem';

import { Container, LeftContainer, RightContainer, SecondaryText, Title } from './styles';

const DayHorizontalItem = ({ day }) => {
	const { date, events } = day;
	const dayNumber = date.getDate();
	const dayText = Dates.getAbbreviatiedWeekDay(date);

	const renderEventItems = () => events.map((item, index) => (
		<EventHorizontalItem key={item.title + index}
			event={item}
		/>
	));

	return (
		<Container>
			<LeftContainer>
				<Title>{dayNumber}</Title>
				<SecondaryText>{dayText}</SecondaryText>
			</LeftContainer>

			<RightContainer>
				{!events.length ? (
					<SecondaryText>No events</SecondaryText>
				) : (
					renderEventItems()
				)}
			</RightContainer>
		</Container>
	);
};

export default DayHorizontalItem;
