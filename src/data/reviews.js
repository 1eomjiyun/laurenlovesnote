// src/data/reviews.js
import { reviews } from "../data/reviews";


export const reviews = [
  {
    id: (typeof crypto !== "undefined" && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now()),
    title: "Point Pleasant Beach – Family Day Trip",
    date: "2025-09-03",
    location: "Point Pleasant, NJ",
    rating: 5, // 1–5 stars
    tags: ["beach", "family", "New Jersey"],
    cover: "", // e.g. "/uploads/point-pleasant.jpg" if you add one later
    link: "",  // e.g. a ticket or info link
    body: `
We spent the afternoon at **Point Pleasant Beach** and had a great time.

**Pros**
- Clean beach and boardwalk
- Plenty of snacks + arcades for kids
- Easy parking off-season

**Cons**
- Crowded on summer weekends
- Badge prices add up

**Tips**
- Arrive before 10am for parking
- Jenkinson’s Aquarium is great if it rains
`
  }
];
