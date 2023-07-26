// App.js
import React from 'react';
import './App.css';
import { auth } from './firebase'; // Make sure the path to firebase.js is correct
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

function App() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Google sign-in:', result);
      })
      .catch((err) => {
        console.log('Google sign-in error:', err);
      });
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Facebook sign-in:', result);
      })
      .catch((err) => {
        console.log('Facebook sign-in error:', err);
      });
  };

  return (
    <div className="App">
      <h1>Sign In</h1>
      <div className="sign-in-buttons">
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={signInWithFacebook}>Sign in with Facebook</button>
      </div>
    </div>
  );
}

export default App;
