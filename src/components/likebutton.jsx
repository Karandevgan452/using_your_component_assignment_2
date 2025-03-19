import React, { useState } from "react";

const LikeButton = () => {
  const [Liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!Liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: Liked ? "red" : "goldenrod",
        color: "blue",
        border: "5px",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {Liked ? "Like" : "Liked By You"}
    </button>
  );
};

export default LikeButton;
