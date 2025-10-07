'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

import {
  generateDateRange,
  generateTimeSlots,
  getTimestamp,
} from '@/utils/dateUtils';
import {DateItem, TimeSlot} from "@/interfaces/date";
import ClockIcon from '@/icons/ClockIcon';

import DateCard from './DateCard';
import TimeSlotButton from './TimeSlotButton';
import ScrollableList from './ScrollableList';

const BookingCard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  // Generate date range (42 days starting from today)
  const dateRange = useMemo<DateItem[]>(() => generateDateRange(), []);

  // Get unique months from date range
  const months = useMemo(() => {
    const uniqueMonths = new Set<string>();

    dateRange.forEach((dateItem) => {
      const monthKey = format(dateItem.date, 'MMM');
      uniqueMonths.add(monthKey);
    });

    return Array.from(uniqueMonths);
  }, [dateRange]);

  // Generate time slots based on selected date
  const timeSlots = useMemo<TimeSlot[]>(
    () => (selectedDate ? generateTimeSlots(selectedDate) : []),
    [selectedDate]
  );

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time: Date) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;

    const timestamp = getTimestamp(selectedDate, selectedTime);
    console.log({ timestamp });
  };

  const isConfirmDisabled = !selectedDate || !selectedTime;

  return (
    <article className="w-full h-full md:max-w-[568px] md:bg-white md:rounded-3xl md:shadow-2xl overflow-hidden flex flex-col">
      {/* Mobile Header */}
        <div className="md:hidden relative px-6 py-28">
          <div className="relative z-10">
            <h2 className="text-white text-[28px] font-medium mb-2">Cool session</h2>

            <p className="text-white/90 text-sm mb-4">Additional type</p>

            <div className="flex items-center gap-2 text-white/90 text-sm">
              <ClockIcon className="w-4 h-4" />
              <span>30 min</span>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-48 h-full">
            <Image
              src="/mobile-icon.png"
              alt="Stylist"
              width={200}
              height={300}
              className="object-cover h-full"
              priority
            />
          </div>
        </div>

      {/* Main Content */}
      <div className="flex-1 bg-white px-6 py-8 md:p-16 -mt-8 md:mt-0 rounded-t-3xl md:rounded-none relative z-10">
        {/* Header */}
        <header className="flex items-start gap-6 mb-8">
          <div className="hidden md:block flex-shrink-0">
            <Image
              src="/desktop-icon.png"
              alt="Stylist profile"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-[28px] font-bold mb-2">
              Book a Session
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed">
              Choose a date and time that is convenient for you to e-meet your stylist
            </p>
          </div>
        </header>

        <nav className="flex items-center gap-4" aria-label="Month navigation">
          {months.map((month, index) => (
            <span
              key={month}
              className='text-sm text-gray-500'
              aria-current={index === 0 ? 'true' : undefined}
            >
              {month}
            </span>
          ))}
        </nav>

        <section className="mb-8" aria-labelledby="date-selection-heading">
          <ScrollableList className="py-2">
          {dateRange.map((dateItem) => (
            <DateCard
              key={`date-${format(dateItem.date, 'yyyy-MM-dd')}`}
              dayOfWeek={dateItem.dayOfWeek}
              dayOfMonth={dateItem.dayOfMonth}
              isSelected={
                selectedDate
                  ? format(selectedDate, 'yyyy-MM-dd') ===
                    format(dateItem.date, 'yyyy-MM-dd')
                  : false
              }
              isToday={dateItem.isToday}
              onClick={() => handleDateSelect(dateItem.date)}
            />
          ))}
          </ScrollableList>
        </section>

        {selectedDate && (
          <section className="mb-8" aria-labelledby="time-selection-heading">
          <ScrollableList className="py-2">
            {timeSlots.map((slot) => (
              <TimeSlotButton
                key={`time-${format(slot.time, 'HH:mm')}`}
                label={slot.label}
                isSelected={
                  selectedTime
                    ? format(selectedTime, 'HH:mm') === format(slot.time, 'HH:mm')
                    : false
                }
                disabled={slot.disabled}
                onClick={() => !slot.disabled && handleTimeSelect(slot.time)}
              />
            ))}
          </ScrollableList>
        </section>
        )}

        <button
          type="button"
          onClick={handleConfirm}
          disabled={isConfirmDisabled}
          className={`
            w-full py-4 rounded-full font-semibold text-white text-base
            transition-all duration-300 focus:outline-none focus:ring-4
            ${
              isConfirmDisabled
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gray-900 hover:bg-gray-800 focus:ring-gray-400 shadow-lg hover:shadow-xl cursor-pointer'
            }
          `}
          aria-label="Confirm booking"
          aria-disabled={isConfirmDisabled}
        >
          Confirm
        </button>
      </div>
    </article>
  );
};

export default BookingCard;

