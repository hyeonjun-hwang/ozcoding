import { useEffect, useState } from "react";

// function App() {
//   // useState
//   const [value, setValue] = useState(0);
//   const incresement = () => setValue(value + 10);
//   const decresement = () => setValue(value - 1);

//   const [name, setName] = useState("");
//   const [nickName, setNickName] = useState("");
//   const onChangeName = (event) => setName(event.target.value);
//   const onChangeNickName = (event) => setNickName(event.target.value);

//   // useEffect
//   useEffect(() => {
//     console.log("useEffect 발동!!!");
//     console.log(name, nickName);
//   });

//   return (
//     <div className="App">
//       <div>
//         <Header />
//         <p>현재 숫자는 '{value}' 이다</p>
//       </div>
//       <div>
//         <button onClick={incresement}>1 증가</button>
//         <button onClick={decresement}>1 감소</button>
//       </div>
//       <div>
//         이름 입력
//         <input type="text" value={name} onChange={onChangeName} />
//         <br />
//         닉네임 입력
//         <input type="text" value={nickName} onChange={onChangeNickName} />
//       </div>
//       <div>
//         <p>입력한 이름 : {name}</p>
//         <p>입력한 닉네임 : {nickName}</p>
//       </div>
//       {/* <Button /> */}
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>app1 이다</h1>
    </div>
  );
}

export { App };
