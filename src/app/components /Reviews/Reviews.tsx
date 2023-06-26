'use client';

import { Review } from './Review';
import { useGetReviewQuery } from '../../store/servises/reviewsApi';
import { Spinner } from '../Spinner/Spinner';

export const Reviews = ({ id }) => {
  const { data, isLoading, error } = useGetReviewQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <div>
      {data.map((child) => (
        <Review key={child} rating={child.rating} text={child.text} name={child.name} />
      ))}
    </div>
  );
};
