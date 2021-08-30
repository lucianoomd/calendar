import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Dates from '../../utils/Dates';
import { Container, ContentContainer, CustomPickerYear, CustomPickerMonth, CustomPickerDay, TitleText, PickerItem } from './styles';
import Colors from '../../utils/Colors';

const CustomDatePicker = ({
    selectedYear,
    setSelectedYear = () => {},
    selectedMonth,
    setSelectedMonth = () => {},
    selectedDay,
    setSelectedDay = () => {},
}) => {
    const [years, setYears] = useState([]);
    const [months, setMonths] = useState([]);
    const [days, setDays] = useState([]);

    useEffect(() => {
		generateYearItems();
	}, []);

    useEffect(() => {
		generateMonthItems();
	}, [selectedYear]);

    useEffect(() => {
        generateDayItems();
	}, [selectedMonth, months]);

    const generateYearItems = () => {
        const newYears = Dates.generateYearItems(10);
        setYears(newYears);
    };

    const renderYearItems = () => {
        return years.map(item => (
            <Picker.Item
                style={{ color: Colors.BLACK, backgroundColor: Colors.SUPER_LIGHT_GRAY, fontSize: 12 }}
                key={item}
                label={String(item)}
                value={item}
            />
        ))
    };

    const generateMonthItems = () => {
        const newMonths = Dates.generateRemainingMonthItems(selectedYear);
        setSelectedMonth(newMonths[0]);
        setMonths(newMonths);
    };

    const renderMonthItems = () => months.map(item => (
        <PickerItem
            style={{ color: Colors.BLACK, backgroundColor: Colors.SUPER_LIGHT_GRAY, fontSize: 12 }}
            key={item}
            label={Dates.getMonthName(new Date(2021, item))}
            value={item}
        />
    ));

    const generateDayItems = () => {
        const newDays = Dates.generateRemainingDayItems(selectedYear, selectedMonth);
        setSelectedDay(newDays[0]);
        setDays(newDays);
    };

    const renderDayItems = () => days.map(item => (
        <PickerItem
            style={{ color: Colors.BLACK, backgroundColor: Colors.SUPER_LIGHT_GRAY, fontSize: 12 }}
            key={item}
            label={String(item)}
            value={item}
        />
    ));


    return (
        <Container>
            <ContentContainer>
                <TitleText>Year</TitleText>
                <CustomPickerYear
                    mode='dropdown'
                    onValueChange={setSelectedYear}
                    selectedValue={selectedYear}
                >
                    {renderYearItems()}
                </CustomPickerYear>
            </ContentContainer>

            <ContentContainer>
                <TitleText>Month</TitleText>
                <CustomPickerMonth
                    mode='dropdown'
                    onValueChange={setSelectedMonth}
                    selectedValue={selectedMonth}
                >
                    {renderMonthItems()}
                </CustomPickerMonth>
            </ContentContainer>

            {selectedDay && (
                <ContentContainer>
                    <TitleText>Day</TitleText>
                    <CustomPickerDay
                        mode='dropdown'
                        onValueChange={setSelectedDay}
                        selectedValue={selectedDay}
                    >
                        {renderDayItems()}
                    </CustomPickerDay>
                </ContentContainer>
            )}
        </Container>
    )
};

export default CustomDatePicker;
