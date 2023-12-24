/* eslint-disable @typescript-eslint/no-explicit-any */
// ProfilePage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://localhost:3000/api/profile');
        setProfileData(response.data);
      } catch (error) {
        console.error('Failed to fetch profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      {profileData ? (
        <div>
          <p>ID: {profileData.id}</p>
          <p>Email: {profileData.email}</p>
          <p>First Name: {profileData.first_name}</p>
          <p>Last Name: {profileData.last_name}</p>
          <p>Login: {profileData.login}</p>
          <p>Avatar URL: {profileData.avatar_url}</p>
          <p>Is Blocked: {profileData.isBlocked ? 'Yes' : 'No'}</p>
          <p>Role: {profileData.role}</p>
          <p>Created At: {profileData.created_at}</p>
          <p>Updated At: {profileData.updated_at}</p>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default ProfilePage;