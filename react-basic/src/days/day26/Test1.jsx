import { useState } from "react";

function Test1() {
  // useState 만듬
  const [text, setText] = useState("날짜 선택해주삼");
  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log(typeof e.target.value);
  };

  const [select, setSelect] = useState("");
  const handleSelectBox = (e) => {
    setSelect(e.target.value);
    console.log(e.target.name, e.target.value);
  };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(`${e.target.name}는 ${e.target.value}`);
  };
  //   console.log(state);
  // UI 그려준다리
  return (
    <div>
      {/* <div className="m-5">
        <input className="outline-1" type="date" onChange={handleOnChange} />
        <p>{text}</p>
      </div>
      <div className="m-5">
        <select
          className="outline-1"
          name="num"
          value={select}
          id=""
          onChange={handleSelectBox}
        >
          <option value="" disabled hidden></option>
          <option value="1">1번</option>
          <option value="2">2번</option>
          <option value="3">3번</option>
        </select>
        <p>{select}</p>
      </div> */}
      {/* ---- */}
      <div className="m-5">
        ------
        <div>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={handleState}
          />
        </div>
        <div>
          <select
            name="gender"
            id=""
            value={state.gender}
            onChange={handleState}
          >
            <option value=""></option>
            <option value="male">남</option>
            <option value="female">여</option>
          </select>
        </div>
        <div>
          <input
            name="birth"
            value={state.birth}
            type="date"
            onChange={handleState}
          />
        </div>
        <div>
          <textarea
            name="bio"
            value={state.bio}
            id=""
            onChange={handleState}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Test1;
