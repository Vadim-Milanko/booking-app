import React from 'react';

interface DateCardProps {
  dayOfWeek: string;
  dayOfMonth: string;
  isSelected: boolean;
  isToday: boolean;
  onClick: () => void;
}

const DateCard: React.FC<DateCardProps> = ({
  dayOfWeek,
  dayOfMonth,
  isSelected,
  isToday,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex-shrink-0 flex flex-col items-center justify-center
        w-16 h-20 rounded-lg transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
        ${
          isSelected
            ? 'bg-pink-500 text-white shadow-lg scale-105'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }
      `}
      aria-label={`${dayOfWeek} ${dayOfMonth}`}
      aria-pressed={isSelected}
      tabIndex={0}
    >
      <span
        className={`text-sm font-medium ${
          isSelected ? 'text-white' : isToday ? 'text-pink-500' : 'text-gray-500'
        }`}
      >
        {dayOfWeek}
      </span>

      <span
        className={`text-2xl font-semibold mt-1 ${
          isSelected ? 'text-white' : 'text-gray-900'
        }`}
      >
        {dayOfMonth}
      </span>
    </button>
  );
};

export default DateCard;


