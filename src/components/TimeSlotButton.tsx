import React from 'react';

interface TimeSlotButtonProps {
  label: string;
  isSelected: boolean;
  disabled: boolean;
  onClick: () => void;
}

const TimeSlotButton: React.FC<TimeSlotButtonProps> = ({
  label,
  isSelected,
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex-shrink-0 px-6 py-3 rounded-lg font-medium text-sm
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
        ${
          disabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : isSelected
            ? 'bg-pink-500 text-white shadow-md scale-105'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }
      `}
      aria-label={label}
      aria-pressed={isSelected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {label}
    </button>
  );
};

export default TimeSlotButton;


