import React, { useEffect, useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Welcome from './Welcome';

import { firebase } from '../config';

export default function MainScreen() {
  const [isSigningUp, setSigningUp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(setUser);
  }, []);

  const handleEnter = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        setUser(response.user);
      })
      .catch(error => alert(error));
  }

  const handleRegister = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        setUser(response.user);
      })
      .catch(error => alert(error));
  }

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {setUser(null); setSigningUp(false)} )
      .catch(error => alert(error));
  }

  if (user === null) {
    if (isSigningUp) {
      return <SignUp onRegister={handleRegister} onSignUp={setSigningUp} />;
    }
    return <SignIn onEnter={handleEnter} onSignUp={setSigningUp} />;

  }
  else {
    return <Welcome user={user} onLogout={() => handleLogout()} />;
  }
}