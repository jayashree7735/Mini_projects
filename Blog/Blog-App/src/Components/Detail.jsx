import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";


const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) throw new Error("Failed to fetch post details");
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
export default Detail;