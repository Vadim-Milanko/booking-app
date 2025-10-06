import {
  addDays,
  format,
  startOfDay,
  setHours,
  setMinutes,
  isBefore,
  getUnixTime,
} from 'date-fns';

import {DateItem, TimeSlot} from "@/interfaces/date";

/**
 * Generate an array of dates starting from today and ending 6 weeks ahead (42 days total)
 */
export const generateDateRange = (startDate: Date = new Date()): DateItem[] => {
  const today = startOfDay(new Date());
  const dates: DateItem[] = [];

  for (let i = 0; i < 42; i++) {
    const currentDate = addDays(startOfDay(startDate), i);
    dates.push({
      date: currentDate,
      dayOfWeek: format(currentDate, 'EEE'),
      dayOfMonth: format(currentDate, 'd'),
      isToday: format(currentDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd'),
    });
  }

  return dates;
};

/**
 * Generate time slots from 00:00 to 23:45 in 15-minute intervals
 * Disable slots that are in the past
 */
export const generateTimeSlots = (selectedDate: Date): TimeSlot[] => {
  const now = new Date();
  const timeSlots: TimeSlot[] = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const slotTime = setMinutes(setHours(selectedDate, hour), minute);
      const isPast = isBefore(slotTime, now);

      timeSlots.push({
        time: slotTime,
        label: format(slotTime, 'h:mm a'),
        disabled: isPast,
      });
    }
  }

  return timeSlots;
};

/**
 * Convert date and time to UNIX timestamp (in seconds)
 */
export const getTimestamp = (date: Date, time: Date): number => {
  const combined = setMinutes(
    setHours(date, time.getHours()),
    time.getMinutes()
  );

  return getUnixTime(combined);
};


