import React, { useState } from 'react';
import Header from './Header';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    }
  };

  const onToggleMode = () => {
    setIsLogin(!isLogin);
  };

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return (
    <div style={styles.container}>
      <Header />
      <form onSubmit={onSubmit} style={styles.form}>
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
        <input type="submit" value={isLogin ? "Log In" : "Sign Up"} style={styles.submitButton} />
      </form>
      <div style={styles.signUpText}>
        <span>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
        </span>
        <a href="#" onClick={onToggleMode} style={styles.signUpLink}>
          {isLogin ? "Sign up here!" : "Log in here!"}
        </a>
      </div>
      {isLogin && (
        <button onClick={onLogout} style={styles.logOutButton}>
          Log Out
        </button>
      )}
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
    marginTop: '20px',
    fontSize: '14px',
    textAlign: 'center',
  },
  signUpLink: {
    color: '#4CAF50',
    textDecoration: 'none',
    marginLeft: '5px',
    cursor: 'pointer',
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

export default Login;
