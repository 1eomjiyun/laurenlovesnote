import React from "react";
import { reviews } from "../data/reviews";   // <-- named import
import ReactMarkdown from "react-markdown";

export default function Reviews() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem" }}>
      <h1>My Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id} style={{ marginBottom: "20px" }}>
          <h2>{review.title}</h2>
          {review.date && (
            <p><strong>Date:</strong> {review.date}</p>
          )}
          {/* Use .body to match the data file */}
          <ReactMarkdown>{review.body}</ReactMarkdown>

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
