import React, { useContext, useState} from 'react';
import { Google } from 'react-bootstrap-icons';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import * as firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



  firebase.initializeApp(firebaseConfig);


const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { signedInUser, name, email, photo } = loggedInUser;


    let history = useHistory();
    let location = useLocation();

  
    let { from } = location.state || { from: { pathname: "/" } };



    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
      
        const auth = getAuth();
          signInWithPopup(auth, provider)
          .then(res => {    
        const {displayName, email, photoURL} = res.user;
        const signedInUser = {
          signedInUser: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);

      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorMessage);
      });
    }
    
    const googleSignOut = () =>{
      const auth = getAuth();
      signOut(auth).then(res => {
        const signedInUser = {
          signedInUser: false,
          name: '',
          email: '',
          photo: ''
        }
        setLoggedInUser(signedInUser);

      }).catch(error => {
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorMessage);
      });
    }
      const storeAuthToken = () => {
        getAuth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
          sessionStorage.setItem('token', idToken);
          // Send token to your backend via HTTPS
          // ...
        }).catch(function(error) {
          // Handle error
        });
        
      }
  
    return (
        <div className='text-center'>
            {
              signedInUser &&<div className='text-center'>
              <h1>{name}</h1>
              <h2>{email}</h2>
              <img src={photo} alt="" />
            </div>
            }
            <h2>Login page</h2>
            <button onClick={() => signInWithGoogle()} className='btn btn-success m-2'> <Google style={{color:"red"}}/> Google Sign in</button>
             <br />
            <br />
            <button onClick={() => googleSignOut()} className='btn btn-primary m-3'> <Google style={{color:"red"}}/> Google Sign out</button> 
           
        </div>
    );
};

export default Login;