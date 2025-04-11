import React from "react"; // React 라이브러리를 react패키지에서 가져옴
import { BrowserRouter, Routes, Route } from "react-router-dom"; // react-router-dom에서 3개의 컴포넌트를 가져옴
import { Link } from "react-router-dom"; // Link 컴포넌트를 react-router-dom에서 가져옴
import Wk1 from "./wk_project/wk_1";
import Wk2 from "./wk_project/wk_2";
import "./App.css"; // 스타일 가져옴

function App() {
  // App 컴포넌트 정의
  return (
    // App 컴포넌트의 반환값
    <BrowserRouter>{/* React의 라우팅 기능을 제공하는 최상위 컴포넌트(브라우저의 URL 변경을 감지) */}
      <Routes>{/* 여러 개의 Route를 묶어주는 컨테이너 */}
        <Route //
          path="/" // 기본경로(루트)
          element={
            // 기본경로에 해당하는 컴포넌트를 element에 넣어줌(하나의 요소로 접근해야 하기 때문)
            <div>
              <h1> 구름톤 유니브 실습 </h1>
              <ul>
                <li className="wk_project">
                  <Link to="/wk_1">1주차</Link>
                </li>
                <li className="wk_project">
                  <Link to="/wk_2">2주차</Link>
                </li>
              </ul>
            </div>
          }
        />
        <Route path="/wk_1" element={<Wk1 />} />{/*경로 설정 가져올 컴포넌트 설정 */}
        <Route path="/wk_2" element={<Wk2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
