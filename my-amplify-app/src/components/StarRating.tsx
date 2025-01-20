// src/components/StarRating.tsx
import { useState } from 'react';
import Rating from 'react-rating';

const StarRating = () => {
  const [value, setValue] = useState<number>(0);

  const handleRatingChange = (newValue: number) => {
    setValue(newValue);
    console.log('Rating value:', newValue);
  };

  return (
    <div>
      <Rating
        initialRating={value}
        emptySymbol="☆"
        fullSymbol="★"
        onChange={handleRatingChange}
      />
      <p>Current rating: {value}</p>
    </div>
  );
};

export default StarRating;
