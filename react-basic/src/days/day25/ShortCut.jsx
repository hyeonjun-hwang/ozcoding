function ShortCut() {
  return (
    <div className="flex items-center justify-center gap-10">
      {/* 앱스토어 */}
      <div className="flex flex-col items-center gap-3">
        <a className="bg-gray-400 rounded-full p-2" href="">
          <img
            className="w-6 h-6"
            src="https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg"
            alt=""
          />
        </a>
        <span className="text-xs">앱스토어</span>
      </div>

      {/* 바로가기 */}
      <div className="flex flex-col items-center gap-3">
        <a className="bg-blue-500 rounded-full" href="">
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
            class="lucide lucide-plus-icon lucide-plus text-white m-2"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </a>
        <span className="text-xs">바로가기 추가</span>
      </div>
    </div>
  );
}

export default ShortCut;
