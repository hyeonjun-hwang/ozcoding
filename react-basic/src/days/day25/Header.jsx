function Header() {
  return (
    <div className="flex gap-4 justify-end">
      <button>Gmail</button>
      <button>이미지</button>
      <a href="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-flask-conical-icon lucide-flask-conical"
        >
          <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
          <path d="M6.453 15h11.094" />
          <path d="M8.5 2h7" />
        </svg>
      </a>
      <button>메뉴(점9개)</button>
      <a href="">프로필 아이콘</a>
    </div>
  );
}

export default Header;
