'use client';

import React, { useRef, useState, useEffect } from 'react';

import ChevronLeft from '@/icons/ChevronLeft';
import ChevronRight from '@/icons/ChevronRight';

export enum ScrollDirection {
  LEFT = 'left',
  RIGHT = 'right',
}

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

  const handleScroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;

    const scrollDistance = direction === ScrollDirection.LEFT ? -scrollAmount : scrollAmount;

    scrollRef.current.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    direction: ScrollDirection
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
          onClick={() => handleScroll(ScrollDirection.LEFT)}
          onKeyDown={(e) => handleKeyDown(e, ScrollDirection.LEFT)}
          className="absolute left-[-28] top-1/2 -translate-y-1/2 z-10 w-8 h-8
                   flex items-center justify-center rounded-full
                   bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-gray-100"
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
          onClick={() => handleScroll(ScrollDirection.RIGHT)}
          onKeyDown={(e) => handleKeyDown(e, ScrollDirection.RIGHT)}
          className="absolute right-[-28] top-1/2 -translate-y-1/2 z-10 w-8 h-8
                   flex items-center justify-center rounded-full
                   bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-gray-100"
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


