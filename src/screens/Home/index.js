import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DayHorizontalItem from '../../components/DayHorizontalItem';
import Header from '../../components/Header';
import { CalendarActions } from '../../store/ducks/calendar';
import { ModalSelectionActions } from '../../store/ducks/modalSelection';
import Dates from '../../utils/Dates';
import { ButtonAdd, Container, Icon, LeftSubHeaderTitle, RightSubHeaderTitle, ScrollViewContainer, SubHeaderContainer } from './styles';
import ModalSelection from '../../components/ModalSelection';

const Home = ({ route, ...props }) => {
	const dispatch = useDispatch();
	const events = useSelector(state => state.events);
	const selectedDate = useSelector(state => state.calendar.selectedDate);

	const navigation = useNavigation();
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('Work Calendar');
	const [maxDayEventsToRender, setMaxDayEventsToRender] = useState(3);
	const [modalHandlerSelected, setModalHandlerSelected] = useState('');

	const years = Dates.generateYearItems(10);
	const months = Dates.generateAllMonths().map(item => Dates.getMonthName(new Date(2021, item)));

	const [monthDays, setMonthDays] = useState([]);

	useEffect(() => {
		setTitle(`${Dates.getMonthName(selectedDate)} ${selectedDate.getFullYear()}`)
		generateMonthDays(selectedDate);
	}, [events]);

	useEffect(() => {
		setTitle(`${Dates.getMonthName(selectedDate)} ${selectedDate.getFullYear()}`)
		generateMonthDays(selectedDate);
	}, [selectedDate]);

	useEffect(() => {
		generateMonthDays(selectedDate);
	}, []);

	const generateMonthDays = () => {
		const newMonthDays = Dates.generateAllMonthDays(selectedDate.getFullYear(), selectedDate.getMonth());
		const monthDaysEvents = newMonthDays.map(item => ({
			...item,
			events: events.filter(event => (event.date - item.date) === 0).slice(0, maxDayEventsToRender)
		}));

		setMonthDays(monthDaysEvents);
	}

	const navigateToEventDetails = () => {
		navigation.navigate('EventDetails', { title: 'New Event' })
	}

	const renderDays = () => (monthDays.map(item => <DayHorizontalItem day={item} key={item.date.toString()} />));

	const getFirstMonthDay = () => monthDays[0] ? monthDays[0].date.getDate() : '';

	const getLastMonthDay = () => monthDays.length ? monthDays[monthDays.length - 1].date.getDate() : '';

	const setSelectedYear = (year) => dispatch(CalendarActions.setSelectedYear(year));

	const setSelectedMonth = (month) => dispatch(CalendarActions.setSelectedMonth(months.indexOf(month)));

	const generateMonthsModalItems = () => {
		dispatch(ModalSelectionActions.setModalItems(months));
		dispatch(ModalSelectionActions.setSelectedValue(Dates.getMonthName(selectedDate)));
		setModalHandlerSelected('setSelectedMonth');
	}
	
	const generateYearsModalItems = () => {
		dispatch(ModalSelectionActions.setModalItems(years));
		dispatch(ModalSelectionActions.setSelectedValue(selectedDate.getFullYear()));
		setModalHandlerSelected('setSelectedYear');
	}

	return (
		<Container>
			<Header
				title={title}
				subtitle={subtitle}
				onPressHeader={generateMonthsModalItems}
				onPressHeaderRight={generateYearsModalItems}
			/>

			<ModalSelection
				handleSelectedItem={modalHandlerSelected === 'setSelectedMonth' ? setSelectedMonth : setSelectedYear}
			/>

			<ScrollViewContainer>
				<SubHeaderContainer>
					<LeftSubHeaderTitle>{Dates.getAbbreviatiedMonthName(selectedDate)} {getFirstMonthDay()} - {getLastMonthDay()}</LeftSubHeaderTitle>
					<RightSubHeaderTitle>{selectedDate.getFullYear()}</RightSubHeaderTitle>
				</SubHeaderContainer>

				{renderDays()}

			</ScrollViewContainer>
			<ButtonAdd onPress={navigateToEventDetails}>
				<Icon name='plus' size={25} color={'#fff'} />
			</ButtonAdd>
		</Container>
	);
};

export default Home;
