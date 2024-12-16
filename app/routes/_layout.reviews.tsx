import * as React from "react";
import { useState } from "react";

interface Review {
  id: number;
  productId: number;
  rating: number;
  author: string;
  content: string;
  date: string;
  condition?: string;
  verified?: boolean;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      productId: 1,
      rating: 4,
      author: 'John D.',
      content: 'Great product for pain management',
      date: '2024-03-20',
      condition: 'Chronic Pain',
      verified: true
    }
  ]);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddReview = (review: Omit<Review, 'id' | 'date'>) => {
    try {
      // Validation
      if (!review.content?.trim()) {
        throw new Error('Review content is required');
      }
      if (review.rating < 1 || review.rating > 5) {
        throw new Error('Rating must be between 1 and 5');
      }

      const newReview = {
        ...review,
        id: reviews.length + 1,
        date: new Date().toISOString().split('T')[0],
      };

      setReviews(prev => [...prev, newReview]);
      setIsAddingReview(false);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add review');
    }
  };

  return (
    <div className="container py-12 fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Patient Reviews</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <div className="grid gap-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-600">No reviews yet</p>
        ) : (
          reviews.map(review => (
            <div 
              key={review.id} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-medium text-gray-900">{review.author}</span>
                  {review.verified && (
                    <span className="ml-2 text-sm text-green-600">(Verified Purchase)</span>
                  )}
                  <div className="text-yellow-400 mt-1">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.content}</p>
              {review.condition && (
                <div className="mt-2 text-sm text-gray-600">
                  Condition: {review.condition}
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <button 
        onClick={() => setIsAddingReview(true)}
        className="mt-8 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
      >
        Write a Review
      </button>
    </div>
  );
}