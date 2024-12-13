import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [users, setUsers] = useState([]); // State for user data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data); // Set fetched data to state
        setLoading(false); // Turn off loading
      } catch (error) {
        setError("Error fetching user data!"); // Handle errors
        setLoading(false);
      }
    };

    fetchUsers(); // Trigger the API call
  }, []);

  // Render loading, error, or user cards
  return (
    <div style={styles.container}>
      {loading && <p style={styles.message}>Loading...</p>}
      {error && <p style={styles.message}>{error}</p>}
      {!loading && !error && (
        <div style={styles.cardContainer}>
          {users.map((user) => (
            <div key={user.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{user.name}</h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Styles for the app
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#333",
  },
  message: {
    fontSize: "18px",
    color: "#666",
  },
};

export default Card;
