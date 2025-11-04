function Header() {
  //   const [value, setValue] = useState("");
  const menu = ["오픈예정", "펀딩 +", "프리오더", "스토어", "더보기"];
  return (
    <div className="w-full ">
      <header className="w-full flex items-center justify-between p-6">
        <div className="flex gap-6">
          <a href="">wadiz</a>
          <nav className="flex gap-8">
            {menu.map((item) => {
              return <div className="font-bold">{item}</div>;
            })}
          </nav>
        </div>
        <div>
          <div>검색창</div>
          <div>아이콘 묶음</div>
          <div>로그인/회원가입</div>
          <div>프로젝트 만들기</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
