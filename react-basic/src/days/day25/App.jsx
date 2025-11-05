import Header from "./Header";
import Search from "./Search";
import ShortCut from "./ShortCut";
import Logo from "./Logo";

function App() {
  return (
    <div className="m-5">
      <Header />
      <div className="flex flex-col items-center justify-center gap-10 mt-40">
        <Logo />
        <Search />
        <ShortCut />
      </div>
    </div>
  );
}

export default App;
