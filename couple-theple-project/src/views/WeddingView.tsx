import React from "react";

const WeddingView = () => {
  
  return (
    <>
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
              결혼정보
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

      <div className="overflow-x-auto flex justify-center bg-red-100">
        <table className="counseling-table table table-s bg-white">
          <thead className="text-2xl bordered text-error">
            <tr className="border-b">
              <th>번호</th> 
              <th>제목</th> 
              <th>작성자</th> 
              <th>날짜</th> 
              <th>댓글</th> 
            </tr>
          </thead> 
          <tbody>
            <tr className="border-b">
              <th className="text-center">1</th> 
              <td className="cursor-pointer">Littel, Schaden and Vandervort 얼마나 기다렸던가 드디어 찾았을까 한번더 dfdafdfdsfads dfdfdsfsdfdsfdfdsd</td> 
              <td>Canada</td> 
              <td>12/16/2020</td> 
              <td>Blue</td>
            </tr>
            <tr>
              <th className="text-center">2</th> 
              <td className="cursor-pointer">Zemlak, Daniel and Leannon</td> 
              <td>United States</td> 
              <td>12/5/2020</td> 
              <td>Purple</td>
            </tr>
            <tr>
              <th className="text-center">3</th> 
              <td className="cursor-pointer">Carroll Group</td> 
              <td>China</td> 
              <td>8/15/2020</td> 
              <td>Red</td>
            </tr>
            <tr>
              <th className="text-center">4</th> 
              <td className="cursor-pointer">Rowe-Schoen</td> 
              <td>Russia</td> 
              <td>3/25/2021</td> 
              <td>Crimson</td>
            </tr>
            <tr>
              <th className="text-center">5</th> 
              <td className="cursor-pointer">Wyman-Ledner</td> 
              <td>Brazil</td> 
              <td>5/22/2020</td> 
              <td>Indigo</td>
            </tr>
            <tr>
              <th className="text-center">6</th> 
              <td className="cursor-pointer">Wiza, Bins and Emard</td> 
              <td>Venezuela</td> 
              <td>12/8/2020</td> 
              <td>Purple</td>
            </tr>
            <tr>
              <th className="text-center">7</th> 
              <td className="cursor-pointer">Schuster-Schimmel</td> 
              <td>Philippines</td> 
              <td>2/17/2021</td> 
              <td>Yellow</td>
            </tr>
            <tr>
              <th className="text-center">8</th> 
              <td className="cursor-pointer">O'Hara, Welch and Keebler</td> 
              <td>Indonesia</td> 
              <td>5/23/2020</td> 
              <td>Crimson</td>
            </tr>
            <tr>
              <th className="text-center">9</th> 
              <td className="cursor-pointer">Turner-Kuhlman</td> 
              <td>Philippines</td> 
              <td>2/21/2021</td> 
              <td>Maroon</td>
            </tr>
            <tr>
              <th className="text-center">10</th> 
              <td className="cursor-pointer">Zaneta Tewkesbury</td> 
              <td>Chad</td> 
              <td>6/23/2020</td> 
              <td>Green</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="join flex justify-center bg-red-100 pb-10">
        <button className="join-item btn">이전</button>
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">5</button>
        <button className="join-item btn">6</button>
        <button className="join-item btn">7</button>
        <button className="join-item btn">8</button>
        <button className="join-item btn">9</button>
        <button className="join-item btn">10</button>
        <button className="join-item btn">다음</button>
        <button className="justify-end btn btn-error">글쓰기</button>
      </div>
    </>
    </>
  )
};

export default WeddingView;