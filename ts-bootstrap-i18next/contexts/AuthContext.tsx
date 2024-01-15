// 'use client';

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '@/../firebase.config';

// type Props = {
//   children?: React.ReactNode;
// };

// type AuthTypes = {
//   email: string | null;
//   uid: string | null;
// };

// const AuthValues = {
//   email: null,
//   uid: null,
// };

// // Create auth context
// const AuthContext = createContext({});

// // Make auth context available across the app by exporting it
// const useAuth = () => useContext(AuthContext);

// // Create the auth context provider
// const AuthContextProvider = (props: Props) => {
//   const { children } = props;

//   // Define the constants for the user and loading state
//   const [user, setUser] = useState<AuthTypes>(AuthValues);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Update the state depending on auth
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser({
//           email: user.email,
//           uid: user.uid,
//         });
//       } else {
//         setUser({ email: null, uid: null });
//       }
//     });

//     setLoading(false);

//     return () => unsubscribe();
//   }, []);

//   // Sign up the user
//   const signUp = (email: string, password: string) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Login the user
//   const logIn = (email: string, password: string) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Logout the user
//   const logOut = async () => {
//     setUser({ email: null, uid: null });
//     return await signOut(auth);
//   };

//   // Wrap the children with the context provider
//   return (
//     <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>{loading ? null : children}</AuthContext.Provider>
//   );
// };

// export { AuthContextProvider, useAuth };
