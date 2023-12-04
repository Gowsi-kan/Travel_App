import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../theme/theme';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Login from '../components/Login';
import Welcome from '../components/Welcome';

const AuthFirebase = () => {

  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User|null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(activeUser => {
      setUser(activeUser);
      if (initializing) {
        setInitializing(false);
      }
    })
  }, [initializing]);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <Login/>
    );
  }

  return (
    <Welcome email={ user.email} />
  );
}

const styles = StyleSheet.create({
  Container: {
    color: COLORS.primaryWhiteHex,
  }
});

export default AuthFirebase;