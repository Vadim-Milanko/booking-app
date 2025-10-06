'use client';

import React, { useRef, useState, useEffect } from 'react';

import ChevronLeft from '../icons/ChevronLeft';
import ChevronRight from '../icons/ChevronRight';

interface ScrollableListProps {
  children: React.ReactNode;
  className?: string;
  scrollAmount?: number;
}

const ScrollableList: React.FC<ScrollableListProps> = ({
  children,
  className = '',
  scrollAmount = 300,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);

    return () => window.removeEventListener('resize', updateScrollButtons);
  }, [children]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollDistance = direction === 'left' ? -scrollAmount : scrollAmount;

    scrollRef.current.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    direction: 'left' | 'right'
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScroll(direction);
    }
  };

  return (
    <div className="relative w-full">
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => handleScroll('left')}
          onKeyDown={(e) => handleKeyDown(e, 'left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8
                   flex items-center justify-center rounded-full
                   bg-white shadow-md hover:shadow-lg transition-shadow
                   focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="Scroll left"
          tabIndex={0}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className={`flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth ${className}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      {canScrollRight && (
        <button
          type="button"
          onClick={() => handleScroll('right')}
          onKeyDown={(e) => handleKeyDown(e, 'right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8
                   flex items-center justify-center rounded-full
                   bg-white shadow-md hover:shadow-lg transition-shadow
                   focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="Scroll right"
          tabIndex={0}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default ScrollableList;


