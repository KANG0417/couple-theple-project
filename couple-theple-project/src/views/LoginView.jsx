import { 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
  // signInWithPopup,
  // GoogleAuthProvider
  // githubProvider
 } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleLogo from '../assets/images/btn_google_signin_dark_normal_web.png';

const LoginView = () => {
  const navigate = useNavigate();
  const sessionStorage = window.sessionStorage;

  const onSocialClick = async (event) => {
    // const {
    //   target: {name},
    // } = event;
    // let provider;
    // if (name === 'google') {
    //   provider = new GoogleAuthProvider();
    // }
    // const googleProvider = new GoogleAuthProvider();
    // const data = await signInWithPopup(firebaseAuth, googleProvider);
    // console.log(data); // 로그인 정보
    // navigate('/home');
  };

  // const onGithubClick = async (evt) => {
  //   const githubProvider = new githubProvider();
  //   const data = await signInWithPopup(firebaseAuth, githubProvider);
  //   console.log(data); // 로그인 정보
  //   navigate('/home');
  // };

  const onLogOutClick = () => {
    firebaseAuth.signOut();
    sessionStorage.removeItem("loginUser");
    navigate("/home");
  };
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState("");
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        loginEmail,
        loginPassword
      );
      
      sessionStorage.setItem("loginUser", JSON.stringify(user.user));
      navigate("/home");
      /**console.log(user, "HI");
      console.log(user.user, "HI");
      console.log(user.user.email, "HI");
      console.log(firebaseAuth);*/
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      <h1 className="text-center text-3xl text-error mt-10">로그인</h1>
      <div className="flex justify-center mt-16">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">아이디</span>
          </label>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={(e) => setLoginEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs border-error focus:border-red-500 focus:border-2" />
          <label className="label">
            <span className="label-text">비밀번호</span>
          </label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setLoginPassword(e.target.value)}
            className="input input-bordered w-full max-w-xs border-error focus:border-red-500 focus:border-2" />
          <button onClick={login} className="mt-5 btn btn-active btn-outline btn-error text-neutral-content">로그인</button>
        </div>
      </div>

        <div className="flex justify-center mt-5">
          <button>
           <img src={googleLogo} alt="구글로고"/>
          </button>
        </div>
        <div className="flex justify-center mt-2 mb-10">
          <button  className="btn w-48 bg-black text-white hover:bg-black   ">Git hub로 로그인</button>
        </div>
        <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
};

export default LoginView;