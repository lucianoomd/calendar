import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButton';
import CustomDatePicker from '../../components/CustomDatePicker';
import CustomTextInput from '../../components/CustomTextInput';
import { EventActions } from '../../store/ducks/events';
import Colors from '../../utils/Colors';
import Dates from '../../utils/Dates';
import { ButtonContainer, ColorButton, Container, ListColorButtons } from './styles';
import { Alert } from 'react-native';

const EventDetails = ({ route, ...props } ) => {
	const navigation = useNavigation();

	const [event, setEvent] = useState({
		title: '',
		date: Dates.getNewDateWithoutTime(),
		startTime: null,
		endTime: null,
		description: '',
		color: Colors.BLUE
	});

	const isEditing = () => route.params && route.params.event

	const removeEvent = () => {
		if(isEditing()) {
			
			props.removeEvent(route.params.event.id);
			navigation.pop();
		}
	}

	const showRemoveAlert = () => {
		Alert.alert('Are you sure?', 'You won\'t be able to revert this!', [
			{
				text: 'Cancel',
				onPress: () => {},
				style: 'cancel'
			},
			{
				text: 'Delete',
				onPress: removeEvent,
			},
		]);
	}

	useEffect(() => {
		if(isEditing()) {
			setEvent(route.params.event);
			navigation.setParams({
				onPressHeaderRight: showRemoveAlert,
				disabled: false
			});
		};
	}, []);

	const setTitle = text => {
		setEvent({ ...event, title: text })
	}

	const setDescription = text => {
		setEvent({ ...event, description: text })
	}

	const setDateYear = year => {
		const date = event.date;
		date.setFullYear(year);
		setEvent({ ...event, date });
	}

	const setDateMonth = month => {
		const date = event.date;
		date.setMonth(month);
		setEvent({ ...event, date });
	}

	const setDateDay = day => {
		const date = event.date;
		date.setDate(day);
		setEvent({ ...event, date });
	}

	const handleSaveEvent = () => {
		if(!event.id) {
			props.addEvent(event);
		} else {
			props.editEvent(event);
		}
		navigation.pop();
	}

	const setColor = color => setEvent({ ...event, color });

	const colors = [Colors.BLUE, Colors.RED, Colors.YELLOW, Colors.DARK_GREEN];

	const isColorSelected = (color) => color === event.color;

	const renderColorButton = ({ item, index }) => {
		const setSelectedColor = () => setColor(item);
		return <ColorButton style={{ backgroundColor: item, borderColor: !isColorSelected(item) ? Colors.WHITE : Colors.BLACK  }} onPress={setSelectedColor} />;
	};

	const renderColorButtons = () => (
		<ListColorButtons
			contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
			keyExtractor={(item, index) => item.toString() + index}
			renderItem={renderColorButton}
			data={colors}
			horizontal
		/>
	);

	return (
		<Container contentContainerStyle={{ flexGrow: 1 }}>
			<CustomTextInput
				title='Title'
				text={event.title}
				onChangeText={setTitle}
				maxLength={30}
			/>

			<CustomTextInput
				title='Description'
				text={event.description}
				onChangeText={setDescription}
			/>

			<CustomDatePicker
				selectedYear={event.date.getFullYear()}
				setSelectedYear={setDateYear}
				selectedMonth={event.date.getMonth()}
				setSelectedMonth={setDateMonth}
				selectedDay={event.date.getDate()}
				setSelectedDay={setDateDay}
			/>

			{renderColorButtons()}

			<ButtonContainer>
				<CustomButton
					title='SAVE'
					onPress={handleSaveEvent}
					disabled={!event.title.length}
				/>
			</ButtonContainer>
		</Container>
	);
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(EventActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
