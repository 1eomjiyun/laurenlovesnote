import React from "react";
import reviews from "../data/reviews";
import ReactMarkdown from "react-markdown";

export default function Reviews() {
  return (
    <div>
      <h1>My Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id} style={{ marginBottom: "20px" }}>
          <h2>{review.title}</h2>
          <p><strong>Date:</strong> {review.date}</p>
          <ReactMarkdown>{review.content}</ReactMarkdown>
          {review.link && (
            <p>
              <a href={review.link} target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
