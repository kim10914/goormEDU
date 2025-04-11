import React from "react"; // React 라이브러리를 react패키지에서 가져옴
import MyNameIs from "./my_name_is";
// import { Link } from "react-router-dom"; // Link 컴포넌트를 react-router-dom에서 가져옴

function Wk1() {
  return (
    <div>
      <h1>1주차 실습</h1>
      <MyNameIs
        name="김성환"
        major="컴퓨터공학과"
        student_number="20"
        image="https://i.namu.wiki/i/qp8maAy2xo5S0EO417L-Z0FKYh02JhDOwCOCM4lHoJG8sd583X0rO-6Vng67sE5KmIqTKpHbIt7IjiDuRPJNtqZc89o0Lj8pMvOyZAUSCgXg9fpR44vcFdVq8ghGBv-CO2ngae6XjIvoC9KQfuQEjQ.webp"
      />
    </div>
  );
}

export default Wk1;
