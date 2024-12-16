import * as React from "react";
import { useState } from "react";

export default function Profile() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    reviews: 5,
    joinDate: '2024-01-01'
  });

  return (
    <div className="profile">
      <h2>My Profile</h2>
      <div className="profile-info">
        <div className="profile-section">
          <h3>Personal Information</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Member since: {user.joinDate}</p>
          <p>Reviews written: {user.reviews}</p>
        </div>
        <div className="profile-section">
          <h3>My Reviews</h3>
        </div>
      </div>
    </div>
  );
} 