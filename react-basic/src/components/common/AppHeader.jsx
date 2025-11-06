import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const menu = [
  { lable: "발견", newest: false, dropdown: false },
  { lable: "채용", newest: false, dropdown: false },
  { lable: "워크숍/커뮤니티", newest: false, dropdown: true },
  { lable: "포폴 피드백", newest: true, dropdown: false },
  { lable: "에이전시", newest: false, dropdown: false },
];

function AppHeader() {
  return (
    <div>
      <header className="w-full flex items-center justify-between px-6 border-b pb-3">
        {/* 로고, 메뉴 */}
        <div className="flex items-center gap-6">
          {/* 로고 */}
          <img
            className="h-6 cursor-pointer"
            src="../../src/assets/logo.svg"
            alt="@LOGO"
          />

          {/* 메뉴 */}
          <nav className="flex items-center gap-5">
            {menu.map((item) => {
              return (
                <div className="font-medium flex items-center gap-1 cursor-pointer">
                  {item.lable}
                  {item.newest && (
                    <p className="text-xs text-emerald-400">NEW</p>
                  )}
                  {item.dropdown && <ChevronDown size={16} />}
                </div>
              );
            })}
          </nav>
        </div>

        {/* 검색창, 로그인btn, 회원가입btn */}
        <div>
          {/* 검색창 */}
          <div className="flex items-center gap-2">
            <div className="relative w-76 flex items-center bg-neutral-50">
              <Input
                className={
                  "pl-10 rounded-full w-full focus-visible:ring-0 placeholder:text-neutral-400"
                }
                placeholder="230,000개 이상의 크리에이티브 검색"
              ></Input>
              <Search
                className="absolute left-3.5 text-neutral-400"
                size={18}
              ></Search>
            </div>

            {/* 로그인btn */}
            <Button className={"cursor-pointer"} variant={"ghost"}>
              로그인
            </Button>

            {/* 회원가입btn */}
            <Button className={"rounded-full min-h-9 min-w-20 cursor-pointer"}>
              회원가입
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AppHeader;
