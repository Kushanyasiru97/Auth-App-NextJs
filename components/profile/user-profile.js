import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (!session) {
        window.location.href = '/auth'; // Redirect to auth page if not authenticated
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };
    fetchSession();
  }, []);

  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies in the request
    });

    const data = await response.json();
    console.log(data);
  }

  if (isLoading) {
    return <p className={classes.profile}>Loading...</p>;
  }

  if (!isAuthenticated) {
    return null; // Optionally render a loading state or a message while checking auth
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
