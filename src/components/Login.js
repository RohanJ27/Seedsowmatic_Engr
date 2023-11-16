import React, { useState } from 'react'
import Header from './Header'
import { getAuth, signInWithEmailAndPassword, signOut  } from "firebase/auth";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  });
    }

    return (
        <div style={styles.container}>
          <Header />
          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }} style={styles.form}>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <input type="submit" value="Log In" style={styles.submitButton} />
          </form>
          <div style={styles.signUpText}>
            <span>Don't have an account? </span>
            <a href="/signup" style={styles.signUpLink}>Sign Up</a>
          </div>
          <button
            onClick={() => {
              const auth = getAuth();
              signOut(auth).then(() => {
                console.log("Sign-out successful.");
              }).catch((error) => {
                console.error("Sign-out error:", error);
              });
            }}
            style={styles.logOutButton}
          >
            Log Out
          </button>
        </div>
      );
    }
    
    const styles = {
      container: {
        textAlign: 'center',
      },
      form: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '300px',
        margin: '0 auto',
      },
      input: {
        margin: '10px 0',
        padding: '8px',
        fontSize: '16px',
      },
      submitButton: {
        background: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      },
      signUpText: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '14px',
      },
      signUpLink: {
        color: '#4CAF50',
        textDecoration: 'none',
        marginLeft: '5px',
      },
      logOutButton: {
        background: '#FF0000',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
      },
    };

export default Login