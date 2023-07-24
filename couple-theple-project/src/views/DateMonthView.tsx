import React from "react";

const DateMonthView = () => {
  
  return (
    <>
    <div className="text-sm breadcrumbs flex justify-center bg-red-100">
        <ul>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              홈
            </a>
          </li> 
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              연애상담/썸
            </a>
          </li>
        </ul>
      </div>


      <div className="flex justify-between pl-28 pr-28 bg-red-100">
        <div className="join">
          <input className="join-item btn bg-red-400" type="radio" name="options" aria-label="최신순" />
          <input className="join-item btn bg-red-400" type="radio" name="options" aria-label="오래된순" />
          <input className="join-item btn bg-red-400" type="radio" name="options" aria-label="많이본순" />
        </div>
      
      <div className="join">
        <div>
          <div>
            <input className="input input-bordered join-item" placeholder="검색할 내용을 입력해주세요"/>
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option selected>제목+내용</option>
          <option>제목</option>
          <option>내용</option>
          <option>태그</option>
        </select>
        <div className="indicator">
          <button className="btn join-item">검색</button>
        </div>
      </div>
      </div>

    <div className="overflow-x-auto flex bg-red-100">
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div> 
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
};

export default DateMonthView;