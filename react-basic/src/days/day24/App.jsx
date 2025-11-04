// ============ 24일차 과제 ============
import Greeting from "./Greeting.jsx";
import Button from "./button.jsx";
import Card from "./Card.jsx";

function App() {
  const name = "hwanga";
  const btns = [
    { text: "버튼1", color: "black" },
    { text: "버튼2", color: "red" },
    { text: "버튼3", color: "blue" },
    { text: "버튼4", color: "orange" },
  ];
  const cards = [
    {
      title: "안녕하소1",
      content: "소는 누가 키워어1",
      image:
        "https://img.freepik.com/free-vector/cute-cow-thumbs-up-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat-vector_138676-11965.jpg?semt=ais_hybrid&w=740&q=80",
    },
    { title: "안녕하소2", content: "소는 누가 키워어2", image: "웃는소2" },
    { title: "안녕하소3", content: "소는 누가 키워어3", image: "웃는소3" },
  ];
  return (
    <div>
      {/* 그리팅 */}
      <Greeting name={name} />

      {/* 버튼 */}
      {btns.map((btn) => (
        <Button text={btn.text} color={btn.color} />
      ))}

      {/* 카드 */}
      {cards.map((card) => {
        return (
          <Card title={card.title} content={card.content} image={card.image} />
        );
      })}
    </div>
  );
}

export default App;
