import { useState } from 'react';

import React from "react";
import PostCard from "./components/postcard";
import "./App.css";

function App() {
  const posts = [
    {
      id: 1,
      profileImage:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      username: "Karan",
      content: "This is my first post!",
      isLiked: false,
    },
    {
      id: 2,
      profileImage:
        "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      username: "Hiya",
      content: "Loving this social media app.",
      isLiked: true,
    },
    {
      id: 3,
      profileImage:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      username: "Nishchey",
      content: "Just another day...",
      isLiked: false,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "grey" }}>Home Page</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
