import React from 'react';
import '../App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

function Auth() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  
  return (
    <>
      <LoginButton />
      <LogoutButton />

    </>
    
  );
}

export default Auth;
