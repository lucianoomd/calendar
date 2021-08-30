import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModalSelectionActions } from '../../store/ducks/modalSelection';
import { ButtonItem, ContainerItems, Modal, ModalBackground, ModalView, Text } from './styles';

const ModalSelection = ({ 
	handleSelectedItem = () => {},
}) => {
	const dispatch = useDispatch();
	const items = useSelector(state => state.modalSelection.items);
	const selectedValue = useSelector(state => state.modalSelection.selectedValue);

	const showModal = () => items.length > 0
	const closeModal = () => dispatch(ModalSelectionActions.cleanModalSelection());

	const renderItems = () => items.map((item) => {
		const setSelectedItem = () => {
			handleSelectedItem(item);
			closeModal();
		};

		return (
			<ButtonItem
				onPress={setSelectedItem}
				key={item}
			>
				<Text style={{ fontWeight: selectedValue === item ? 'bold' : 'normal' }}>{item}</Text>
			</ButtonItem>
	)});

	return (
		<Modal visible={showModal()} transparent onRequestClose={closeModal} >
			<ModalBackground onPress={closeModal} activeOpacity={1}>
				<ModalView activeOpacity={1}>
					<ContainerItems>
						{renderItems()}
					</ContainerItems>
				</ModalView>
			</ModalBackground>
		</Modal>
	);
}

export default ModalSelection;
