import { h } from 'preact';
import { useState } from 'preact/hooks';

const Profile = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    reviews: 5,
    joinDate: '2024-01-01'
  });

  return (
    <div class="profile">
      <h2>My Profile</h2>
      <div class="profile-info">
        <div class="profile-section">
          <h3>Personal Information</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Member since: {user.joinDate}</p>
          <p>Reviews written: {user.reviews}</p>
        </div>
        <div class="profile-section">
          <h3>My Reviews</h3>
          {/* Add review list component here */}
        </div>
      </div>
    </div>
  );
};

export default Profile; 