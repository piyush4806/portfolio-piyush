"use client";

import React from "react";

export default function HotstarClone() {
  const movies = [
    { id: 1, img: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg", title: "Avatar" },
    { id: 2, img: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg", title: "Titanic" },
    { id: 3, img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", title: "The Matrix" },
    { id: 4, img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg", title: "The Dark Knight" },
    { id: 5, img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", title: "Pulp Fiction" },
    { id: 6, img: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", title: "Fight Club" },
  ];

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif", backgroundColor: "#0b0b0b", color: "white" }}>
      {/* Header */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#141414",
        position: "sticky",
        top: 0,
        zIndex: 10,
        flexWrap: "wrap"
      }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Disney%2B_Hotstar_logo.svg" 
          alt="Hotstar Logo" 
          style={{ width: "100px" }}
        />
        <nav style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: "16px", transition: "color 0.3s" }}>Home</a>
          <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: "16px", transition: "color 0.3s" }}>TV</a>
          <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: "16px", transition: "color 0.3s" }}>Movies</a>
          <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: "16px", transition: "color 0.3s" }}>Sports</a>
          <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: "16px", transition: "color 0.3s" }}>Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        height: "400px",
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1574267432644-f610f5ac2b85?w=1200') center/cover no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "#fff", marginBottom: "10px" }}>
          Welcome to Hotstar Clone
        </h1>
        <p style={{ fontSize: "clamp(14px, 3vw, 18px)", color: "#ccc", marginBottom: "20px" }}>
          Watch your favourite shows and movies anytime, anywhere.
        </p>
        <button style={{
          padding: "10px 25px",
          fontSize: "16px",
          backgroundColor: "#1f80e0",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
          transition: "background 0.3s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#1062b2"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#1f80e0"}
        >
          Start Watching
        </button>
      </section>

      {/* Movies Section */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "24px", paddingLeft: "20px" }}>Popular Movies</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "20px",
          padding: "0 20px"
        }}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
                overflow: "hidden",
                transition: "transform 0.3s, border 0.3s",
                cursor: "pointer",
                border: "2px solid transparent"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.border = "2px solid #1f80e0";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.border = "2px solid transparent";
              }}
            >
              <img 
                src={movie.img} 
                alt={movie.title}
                style={{ width: "100%", height: "240px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "20px",
        color: "#aaa",
        backgroundColor: "#111",
        marginTop: "40px"
      }}>
        © 2025 Hotstar Clone | Made for Learning Purpose
      </footer>
    </div>
  );
}
