import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { firebaseConfig } from "../LogIn2/firebase.config";


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


function Stock() {
    const [newUser, setNewUSer] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: ''
    })
    const googleProvider = new firebase.auth.GoogleAuthProvider();


    const handleSginIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                console.log(res.user)
                setUser(signedInUser)
            })
            .catch(error => {
                console.log(error)
                console.log(error.message)
            })
    }
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSginIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var credential = result.credential;
                const user = result.user;
                var accessToken = credential.accessToken;
                console.log(user)
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                // ...
            });
    };


    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const isSginedOut = {
                    isSignIn: false,
                    name: '',
                    photo: "",
                    password: '',
                    email: '',
                    error: '',
                    success: false
                }
                setUser(isSginedOut);
                console.log(res)
            })
            .catch(res => {

            })
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const NewUSerInfo = { ...user }
                    NewUSerInfo.error = '';
                    NewUSerInfo.success = true;
                    setUser(NewUSerInfo);
                    updateUserInfo(user.name);
                })
                .catch((error) => {
                    const NewUSerInfo = { ...user }
                    NewUSerInfo.error = error.message
                    NewUSerInfo.success = false;
                    setUser(NewUSerInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const NewUSerInfo = { ...user }
                    NewUSerInfo.error = '';
                    NewUSerInfo.success = true;
                    setUser(NewUSerInfo);
                    console.log('sign in user info', res)
                })
                .catch((error) => {
                    const NewUSerInfo = { ...user }
                    NewUSerInfo.error = error.message
                    NewUSerInfo.success = false;
                    setUser(NewUSerInfo);
                });
        }
        e.preventDefault()
    }
    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        })
            .then(res => {
                console.log('user name updated successfully')
            })
            .catch(error => {
                console.log(error)
            });
    }
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const NewUSerInfo = { ...user }
            NewUSerInfo[e.target.name] = e.target.value;
            setUser(NewUSerInfo);
        }
    }


    return (
        <div className="App">
            { user.isSignIn ? <button onClick={handleSignOut}>sign out</button> :
                <button onClick={handleSginIn}>sign in</button>
            }
            <br />
            <button onClick={handleFbSginIn}>sign in with facebook</button>

            {
                user.isSignIn && <div>
                    <p>Welcome , {user.name}</p>
                    <p>your email : {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }

            <h1>Our Own Authentication</h1>
            <input type="checkbox" onChange={() => setNewUSer(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser"> new user sign up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <input name="name" onBlur={handleBlur} type="text" placeholder="your name" required />}
                <br />
                <input type="text" name="email" placeholder="your email address" onBlur={handleBlur} required />
                <br />
                <input type="password" name="password" id="" placeholder="enter your password" onBlur={handleBlur} required />
                <br />
                <input type="submit" value={newUser ? 'sign in' : 'sign up'} />
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <h4 style={{ color: 'green' }}>User {newUser ? 'Created' : 'Loged in'} Successfully Done </h4>}
        </div>
    );
}

export default Stock;