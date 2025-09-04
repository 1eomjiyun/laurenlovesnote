import React, { useEffect, useState } from "react";

const DEMO_DATA = [
  {
    id: crypto.randomUUID(),
    type: "review",
    title: "Dyson V12 Detect Slim – After 6 months",
    date: "2025-08-12",
    tags: ["home", "cleaning", "appliances"],
    rating: 4,
    productUrl: "https://example.com/dyson-v12?aff=lauren",
    content:
      "Light, powerful, and the green laser is not just a gimmick. **Pros:** great battery life, easy to empty. **Cons:** pricey, hair wrap needs maintenance."
  },
  {
    id: crypto.randomUUID(),
    type: "blog",
    title: "Mindset shift: turning my shopping habit into a helpful blog",
    date: "2025-09-01",
    tags: ["personal", "money", "habits"],
    content:
      "I love trying new things—and now I’m writing honest notes so others can skip the duds."
  }
];

const LS_KEY = "lauren_posts_v1";
function loadPosts() {
  try { const raw = localStorage.getItem(LS_KEY); return raw ? JSON.parse(raw) : DEMO_DATA; } catch { return DEMO_DATA; }
}
function savePosts(posts) { localStorage.setItem(LS_KEY, JSON.stringify(posts)); }

export default function App() {
  const [posts, setPosts] = useState(() => loadPosts());
  useEffect(() => { savePosts(posts); }, [posts]);

  return (
    <div style={{fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial", padding:"2rem"}}>
      <h1>Lauren’s Notes ✨</h1>
      <p>Personal blog with reviews, family activities, and places we went.</p>

      {posts.map(p => (
        <article key={p.id} style={{border:"1px solid #e5e7eb",borderRadius:12, padding:"1rem", margin:"1rem 0", background:"#fff"}}>
          <header style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <strong style={{fontSize:18}}>{p.title}</strong>
            <time style={{fontSize:12, color:"#6b7280"}}>{p.date}</time>
          </header>
          <p style={{marginTop:8}}>{p.content}</p>
          {p.productUrl && <p><a href={p.productUrl} target="_blank" rel="noreferrer">View Product ↗</a></p>}
        </article>
      ))}
    </div>
  );
}
