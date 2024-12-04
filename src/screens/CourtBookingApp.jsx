
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { format, addDays, startOfMonth, endOfMonth } from 'date-fns';

const CourtBookingApp = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);


  const getDatesForMonth = () => {
    const dates = [];
    const startDate = startOfMonth(new Date());
    const endDate = endOfMonth(new Date());
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push({
        id: currentDate.toISOString(),
        day: format(currentDate, 'EEE'), // Example: Mon, Tue
        date: format(currentDate, 'dd MMM'), // Example: 29 Nov
      });
      currentDate = addDays(currentDate, 1);
    }
    return dates;
  };

  const dates = getDatesForMonth();

  const courts = [
    { id: 1, name: 'Court 1', slots: ['8:00', '9:00', '10:00', '11:00', '12:00', '1:00'] },
    { id: 2, name: 'Court 2', slots: ['8:00', '9:30', '10:30', '11:30', '12:30', '1:30'] },
  ];

  const renderDate = ({ item }) => {
    const isSelected = selectedDate?.id === item.id;
    return (

      <TouchableOpacity
        style={[styles.dateButton, isSelected && styles.selectedDate]}
        onPress={() => setSelectedDate(item)}
      >
        <Text style={styles.dayText}>{item.day}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  const renderSlot = (courtId, slot) => {
    const isSelected = selectedSlot?.courtId === courtId && selectedSlot?.slot === slot;

    return (
      <TouchableOpacity
        style={[styles.slot, isSelected && styles.selectedSlot]}
        onPress={() => setSelectedSlot({ courtId, slot })}
      >
        <Text style={styles.slotText}>{slot}</Text>
      </TouchableOpacity>
    );
  };

  const renderCourt = ({ item: court }) => (
    <View style={styles.courtContainer}>
      {/* Court Name */}
      <Text style={styles.courtTitle}>{court.name}</Text>
      {/* Court Slots */}
      <FlatList
        data={court.slots}
        horizontal
        keyExtractor={(item, index) => `${court.id}-${index}`}
        renderItem={({ item }) => renderSlot(court.id, item)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );

  return (
    <View style={styles.container}>
    
      {/* Date Slider */}
      <FlatList
        data={dates}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderDate}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateList}
      />

      {/* Separate Courts with Slots */}
      <FlatList
        data={courts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCourt}
      />

      {/* Footer showing selected slot */}
      {selectedSlot && selectedDate && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Selected: {`Date ${selectedDate.date}, Court ${selectedSlot.courtId} at ${selectedSlot.slot}`}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#aaaa',
  },
  dateList: {
    paddingVertical: 10,
    // marginBottom: 20,
  },
  dateButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
    marginRight: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  selectedDate: {
    backgroundColor: '#4caf50',
    borderColor: '#aaa',
  },
  dayText: {
    fontSize: 14,
    color: '#555',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  courtContainer: {
    marginTop: 0,
    marginBottom: 24,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    // elevation: 2,
  },
  courtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  horizontalList: {
    paddingHorizontal: 8,
  },
  slot: {
    padding: 12,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  selectedSlot: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  slotText: {
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    padding: 16,
    backgroundColor: '#4caf50',
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default CourtBookingApp;
