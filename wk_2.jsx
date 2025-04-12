import React, { useState } from "react"; // React 라이브러리 가져오기(와 미쳤다)
// import { useState } from "react"; //useState Hook 가져오기기

function Wk2() {
  const [todos, set_todos] = useState([ // 저장은 todos에 설정은 set_todos함수로 기본값 좀 추가
    {
      id:1,
      text : "이빨 닦기",
      completed : false
    },
    {
      id:2,
      text : "양치하기",
      completed : false
    },
    {
      id:3,
      text : "구강세정하기",
      completed : false
    }
  ]); 
  const [input, set_input] = useState(""); // 입력은 input으로 받고 set_input으로 제어 빈문자열 기본

  //새로운 할 일 추가
  const add_todo = () => {
    // 람다식 사용(아니면 const function add_todo(){} 이런형식으로 사용가능) -> 코드 정리 설정해놔서 지맘대로 enter 치내 버릇없는 녀석
    if (input.trim() === "") return; // 입력이 공백일 경우 아무것도 안함
    // 새로운 todo객체 생성
    const new_todo = {
      id: Date.now(), // 현재 시간 받아서 id에 저장
      text: input, // 입력 받은 텍스트
      completed: false, // 기본은 false
    };
    set_todos([...todos, new_todo]); // set_todos호출하고 todos에 있는 instance들 전개 연산자로 긁어온 다음 new_todo에 있는 instance 추가
    set_input(""); // 인풋 공백
  };
  //완료 여부 토글
  const toggle_complete = (id) => { //id를 argument로 받아서 처리
    set_todos( //상태 업데이트할 꺼임
      todos.map((todo) => //각 instance를 순회
        todo.id === id ? { ...todo, completed: !todo.completed } : todo //id가 같다면 기존 todo를 가져와서 complete를 반전 시킴
      )
    );
  };
  //삭제
  const delete_todo = (id) => { //id를 argument로 받기
    set_todos(todos.filter((todo) => todo.id !== id)); // 일치하는 id를 필터링 해서 나머지만 남김
  };
  // 컴포넌트 생성
  return (
    <div>
      <h1>2주차 실습</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => set_input(e.target.value)} //사용자 입력값을 익명 객체로 받아 todo생성성
      />
      <button onClick={add_todo}>추가</button> {/*추가 버튼 */}

      <ul> {/*리스트 작성 */}
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed}onChange={() => toggle_complete(todo.id)}/>{/* 체크박스 만들고 클릭되면 메서드 호출 */}
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span> {/* 조건부로 completed 상태라면 중간줄 그어 줌 */}
            <button onClick={() => delete_todo(todo.id)}>삭제</button> {/* 클릭되면 메서드 호출 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wk2;
