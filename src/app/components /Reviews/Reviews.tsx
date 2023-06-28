'use client';

import { Review } from './Review';
import { useGetReviewQuery } from '../../store/servises/reviewsApi';
import { Spinner } from '../Spinner/Spinner';

interface ReviewProps {
  rating: number;
  text: string;
  name: string
}

export const Reviews = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useGetReviewQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <div>
      {data.map((child: ReviewProps) => (
        <Review key={child.text} rating={child.rating} text={child.text} name={child.name} />
      ))}
    </div>
  );
};
