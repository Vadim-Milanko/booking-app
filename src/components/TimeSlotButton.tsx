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
        flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2
        ${
          disabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : isSelected
            ? 'bg-gray-100 text-pink-500'
            : 'bg-white hover:bg-gray-50 border border-gray-200 cursor-pointer'
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


