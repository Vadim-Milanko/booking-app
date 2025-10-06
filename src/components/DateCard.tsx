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
        w-16 h-16 rounded-xl transition-all duration-200 cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2
        ${
          isSelected
            ? 'bg-gray-200'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }
      `}
      aria-label={`${dayOfWeek} ${dayOfMonth}`}
      aria-pressed={isSelected}
      tabIndex={0}
    >
      <span
        className={`text-base font-medium ${
          isSelected ? 'text-pink-500' : isToday ? 'text-orange-500' : 'text-black'
        }`}
      >
        {dayOfWeek}
      </span>

      <span
        className={`text-base font-medium ${
          isSelected ? 'text-pink-500' : isToday ? 'text-orange-500' : 'text-black'
        }`}
      >
        {dayOfMonth}
      </span>
    </button>
  );
};

export default DateCard;


// `text-base font-medium ${isToday ? 'text-orange-500' : 'text-black'}`
