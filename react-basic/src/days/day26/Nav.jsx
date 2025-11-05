import { useState } from "react";

function Nav(props) {
  //   console.log(name, age, location);
  //   console.log(props);
  const ChildComp1 = props.children[0];

  // useState
  const [count, setCount] = useState(0);
  const onIncrese = () => {
    setCount(count + 1);
  };

  return (
    <div className="m-2">
      {ChildComp1}
      {/* {props.children[1]} */}
      <div>
        <h2>{count}</h2>
        <button onClick={onIncrese}>숫자 올리기</button>
      </div>
    </div>
  );
}

export default Nav;
