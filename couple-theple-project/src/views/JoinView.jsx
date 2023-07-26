import React, { useState } from "react";
import Calendar from "../modules/Calender";
import { firebaseAuth, createUserWithEmailAndPassword } from "../firebase";
import { Firestore } from "firebase/firestore";

const JoinView = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("　");
  
  const register = async () => {
    try {
      setErrorMsg('　');
      const createdUser = await createUserWithEmailAndPassword(firebaseAuth, registerEmail, registerPassword);
      const db = Firestore.firestore() = db.collection("users").do
      console.log(createdUser);
      setRegisterEmail("");
      setRegisterPassword("");
  
    } catch(err){
      console.log(err.code);
      switch (err.code) {
        case 'auth/weak-password':
          setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
          break;
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다');
          break;
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입되어 있는 계정입니다');
          break;
      }
    }
  }

  return (
    <>
    <h1 className="text-center text-3xl text-error mt-10">회원가입</h1>
      <div className="flex justify-center mt-16 mb-20">
      <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">이메일</span>
            </label>
            <input
              type="email"
              placeholder="아이디@이메일을 입력해주세요"
              value={registerEmail}
              name={email}
              onChange={(e) => {setRegisterEmail(e.target.value)}}
              className="input input-bordered w-full max-w-xs border-error focus:border-red-500 focus:border-2"
              required/>
            <label className="label">
              <span className="label-text">비밀번호</span>
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={registerPassword}
              name={password}
              onChange={(e) => {setRegisterPassword(e.target.value)}}
              className="input input-bordered w-full max-w-xs border-error focus:border-red-500 focus:border-2"
              required/>
            <label className="label">
              <span className="label-text">비밀번호 재확인</span>
            </label>
            <input
              type="password"
              placeholder="비밀번호를 확인해주세요"
              className="input input-bordered w-full max-w-xs border-error focus:border-red-500 focus:border-2"
              required/>
              <input
                type="text"
                value={errorMsg}
                onChange={(e) => {setErrorMsg(e.target.value)}}
                className="text-error"
                readOnly
                />
            {/* <div className="flex w-full max-w-xs mt-1 items-center">
              <label className="label">
                <span className="label">남자</span>
              </label>
              <input type="radio" name="radio-2" className="flex radio radio-error justify-items-center" defaultChecked />
              <label className="label">
                <span className="label">여자</span>
              </label>
              <input type="radio" name="radio-2" className="radio radio-error" />
            </div> */}
              <label className="label">
                <span className="label-text">닉네임</span>
              </label>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                name={displayName}
                className="input input-bordered w-full max-w-xs border-error focus:border-red-500 focus:border-2"
                required/>
              <label className="label">
                <span className="label-text text-error">커플된 날짜</span>
              </label>
              <Calendar/>
            <div className="flex justify-center pt-5">
              <button className="mt-5  w-6/12 mr-2.5 btn btn-active btn-outline btn-base-100">취소</button>
              <button onClick={register} className="mt-5 w-6/12 ml-2.5 btn btn-active btn-outline btn-error text-neutral-content">가입</button>
          </div>
        </div>
        </div>
    </>
  )
};

export default JoinView;