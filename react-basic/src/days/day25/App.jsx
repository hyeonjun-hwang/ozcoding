import Header from "./Header";
import Search from "./Search";
import ShortCut from "./ShortCut";
import Logo from "./Logo";

function App() {
  return (
    <div className="m-5">
      <Header />
      <div className="flex flex-col gap-12">
        <Logo />
        <Search />
      </div>
      <ShortCut />
    </div>
  );
}

export default App;
