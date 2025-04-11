import React from "react"; // React 라이브러리를 react패키지에서 가져옴

function MyNameIs(props) {
  return (
    <div>
      <img
        style={{ width: "300px", height: "200px" }} // 스타일
        src={props.image} // 이미지 URL로 받기
        alt={`${props.name}의 이미지`} // alt $는 문자 템플릿
      />
      <p>안녕하세요, 제 이름은 {props.name}입니다.</p>{" "}
      {/* props로 받은 name을 사용하여 출력 */}
      <p>
        저는 {props.major}
        {props.student_number}학번 학생 입니다.
      </p>
    </div>
  );
}

export default MyNameIs; // 히히 컴포넌트 발사
