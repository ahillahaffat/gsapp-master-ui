import { useState } from 'react';

export function useCarousel(itemsLength: number) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % itemsLength);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + itemsLength) % itemsLength);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return {
    current,
    handleNext,
    handlePrev,
    goToSlide,
  };
}
