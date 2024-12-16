import { h } from 'preact';
import { useState } from 'preact/hooks';

// Function to generate a 4D matrix of reviews
const generateReviewsMatrix = () => {
  return [
    [
      [
        [
          { id: 1, productId: 1, rating: 4, author: 'John D.', content: 'Great product for pain management', date: '2024-03-20' },
          { id: 2, productId: 1, rating: 5, author: 'Jane S.', content: 'Life-changing experience!', date: '2024-03-21' }
        ]
      ],
      [
        [
          { id: 3, productId: 2, rating: 3, author: 'Alice B.', content: 'It was okay, not the best.', date: '2024-03-22' },
          { id: 4, productId: 2, rating: 2, author: 'Bob C.', content: 'Did not work for me.', date: '2024-03-23' }
        ]
      ]
    ],
    [
      [
        [
          { id: 5, productId: 3, rating: 4, author: 'Charlie D.', content: 'Very effective for anxiety.', date: '2024-03-24' },
          { id: 6, productId: 3, rating: 5, author: 'Diana E.', content: 'Highly recommend!', date: '2024-03-25' }
        ]
      ]
    ]
  ];
};

// Component to render individual review
const ReviewCard = ({ review }) => (
  <div class="review-card">
    <div class="review-header">
      <span class="author">{review.author}</span>
      <span class="rating">{'★'.repeat(review.rating)}</span>
      <span class="date">{review.date}</span>
    </div>
    <p class="review-content">{review.content}</p>
  </div>
);

const Reviews = () => {
  const [reviews] = useState(generateReviewsMatrix());

  // Flatten the 4D array to render reviews
  const flattenedReviews = reviews.flat(3);

  return (
    <div class="reviews">
      <h2>Patient Reviews</h2>
      <div class="reviews-list">
        {flattenedReviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <button class="add-review-button">Write a Review</button>
    </div>
  );
};

export default Reviews; 