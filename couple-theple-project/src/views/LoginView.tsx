import React from "react";

const LoginView = ():JSX.Element => {
  
  return (
    <>
      <h1 className="text-center text-3xl text-error mt-10">로그인</h1>
      <div className="flex justify-center mt-16">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">아이디</span>
          </label>
          <input type="text" placeholder="아이디를 입력해주세요" className="input input-bordered w-full max-w-xs border-error focus:border-red-500 focus:border-2" />
          <label className="label">
            <span className="label-text">비밀번호</span>
          </label>
          <input type="password" placeholder="비밀번호를 입력해주세요" className="input input-bordered w-full max-w-xs border-error focus:border-red-500 focus:border-2" />
          <button className="mt-5 btn btn-active btn-outline btn-error text-neutral-content">로그인</button>
        </div>
      </div>
    </>
  )
};

export default LoginView;