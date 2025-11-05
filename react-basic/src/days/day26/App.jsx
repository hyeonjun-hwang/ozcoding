import { useMemo, useReducer, useRef, useState } from "react";
import Nav from "./Nav";
import Test1 from "./Test1";

import { Camera, ArrowUpAZ, FileChartColumn } from "lucide-react";

// ===== useRef =====
function App() {
  const inputElement = useRef(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    //useRef 동작
    // inputElement.current.focus();
    fileInputRef.current.click();
  };

  // ---
  const BodyProps = {
    name: "hwang",
    age: 20,
    location: ["대한민국", "경기도", "성남시"],
  };

  function ChildComp1(props) {
    const handleOnClick = (e) => {
      console.log(e.target.value);
    };
    return (
      <div>
        <input className="outline-1" type="text" />
        <button
          value={props.name}
          className="outline-1"
          onClick={handleOnClick}
        >
          버튼명
        </button>
      </div>
    );
  }
  function ChildComp2() {
    return <div>차일드 컴포넌트당2</div>;
  }

  return (
    <div className="m-3">
      <div className="flex items-center justify-center">
        <input className="outline-1" type="text" ref={inputElement} />
        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
        <button onClick={handleClick}>등록</button>
        <Camera color="black" size={12} strokeWidth={2} />
        <ArrowUpAZ />
      </div>
      <Nav {...BodyProps}>
        <ChildComp1 {...BodyProps} />
        <ChildComp2 />
      </Nav>
      <div className="mt-5">
        <Test1 />
      </div>
    </div>
  );
}
// ====================

// ===== use-memo =====
// const getAverage = (numbers) => {
//   // numbers -> number[]
//   console.log("평균값 계산 중입니다");
//   if (numbers.length === 0) return 0;

//   const sum = numbers.reduce((acc, cur) => acc + cur, 0);

//   return sum / numbers.length;
// };

// function App() {
//   const [list, setList] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   //   const [number, setNumber] = useState("");

//   const handleInsert = () => {
//     const newList = list.concat(parseInt(inputValue));
//     setList(newList); // number[]
//     setInputValue(""); // 인풋에 입력된 값 빈값으로 초기화
//   };

//   const average = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(event) => setInputValue(event.target.value)}
//       />
//       <button onClick={handleInsert}>등록</button>

//       <ul>
//         {list.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <div>
//         <b>평균값 : {average}</b>
//       </div>
//     </div>
//   );
// }
// ====================

export default App;
