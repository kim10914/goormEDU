// 3주차 실습 API에 있는 데이터 처리하기

import { useEffect, useState } from "react";

//주소 통합 함수
const get_full_address = (user) => {
  // user를 argument로 받음
  const street = user.address.street;
  const suite = user.address.suite;
  const city = user.address.city;
  const zipcode = user.address.zipcode;
  return `${street}, ${suite}, ${city}, ${zipcode}`; // 하나의 문자열로 리턴 $이거 쓰면 문자열에 변수 집어넣을 수 있지롱
};

function Wk3() {
  const [users, set_users] = useState([]); //users(배열), users값 업데이트할 상태 정의
  const [is_loading, set_is_loading] = useState(true); // 로딩 상태저장 배열, 로딩 상태 업데이트 함수 정의(기본값 true)

  useEffect(() => {
    //React가 컴포넌트를 mount 시 실행
    const fetch_users = async () => {
      // fetch_users를 비동기 함수로 선언언
      try {
        //아니 try-catch가 사용가능하다고? 젠장
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ); // API fetch -> 실무에서 여기서 페이징 기법으로 요청을 부분적으로 함

        if (!response.ok) {
          // API서버 응답코드가 200~299가 아니면(준비완료)
          throw new Error("서버 응답 오류"); // 오류 객체를 생성해 던짐("서버 응답 오류")->콘솔 출력
        }

        const data = await response.json(); //response API의 json 데이터를 그대로 가져와 바디 전체를 저장 -> 실무에선  이런게 속도 지연의 효과를 줄 수 있어서 페이징 기법을사용
        set_users(data); // users 데이터를 data로 저장
      } catch (err) {
        console.log(err.message);
      } finally {
        set_is_loading(false); // 로딩이 완료되었으니 로딩상태를 false로 바꿈
      }
    };
    fetch_users(); // 함수 호출
  }, []); //의존성을 NULL로 설정(한번만 호출함) -> 데이터 넣으면 데이터의 상태변화에 따라 계속 호출할 수 있음

  if (is_loading) {
    // 로딩이 아직 true라면
    console.log("데이터를 불러오는 중");
  } else {
    console.log("데이터 불러오기 완료");
  }

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) 주소 : {get_full_address(user)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wk3;
// 비동기 안시켜 주니까 데이터 안뜸 쿠쿠루삥뽕뽕 async/await 추가
