import {
  ArrowUpDown,
  Layers,
  CirclePlay,
  Palette,
  LayoutTemplate,
  PenTool,
  Code,
  Megaphone,
  Rss,
  Globe,
  Camera,
  BanknoteArrowUp,
} from "lucide-react";

import { Separator } from "../ui/separator";
import React from "react";

function Category() {
  const Categorys = [
    {
      name: "전체",
      icon: <Layers />,
      isActive: true,
    },
    {
      name: "영상/모션그래픽",
      icon: <CirclePlay />,
      isActive: false,
    },
    {
      name: "그래픽 디자인",
      icon: <Palette />,
      isActive: false,
    },
    {
      name: "브랜딩/편집",
      icon: <BanknoteArrowUp />,
      isActive: false,
    },
    {
      name: "UI/UX",
      icon: <LayoutTemplate />,
      isActive: false,
    },
    {
      name: "일러스트레이션",
      icon: <PenTool />,
      isActive: false,
    },
    {
      name: "디지털 아트",
      icon: <Code />,
      isActive: false,
    },
    {
      name: "AI",
      icon: <Megaphone />,
      isActive: false,
    },
    {
      name: "캐릭터 디자인",
      icon: <Camera />,
      isActive: false,
    },
    {
      name: "웹/앱 개발",
      icon: <Globe />,
      isActive: false,
    },
    {
      name: "3D 모델링",
      icon: <Rss />,
      isActive: false,
    },
    {
      name: "사진/이미지",
      icon: <Code />,
      isActive: false,
    },
    {
      name: "마케팅 콘텐츠",
      icon: <Megaphone />,
      isActive: false,
    },
    {
      name: "아이콘/폰트",
      icon: <Camera />,
      isActive: false,
    },
  ];
  return (
    <div className="px-16 py-3 flex items-center justify-center gap-10">
      {/* 정렬 */}
      <div className="w-fit min-w-12 flex flex-col items-center gap-2">
        <ArrowUpDown />
        <p className="whitespace-nowrap">정렬</p>
      </div>

      <Separator className="h-8!" orientation="vertical" />

      {/* 카테고리 리스트 */}
      <div className="flex gap-10 overflow-scroll scrollbar-hide">
        {Categorys.map((category) => {
          // isActive가 true일 때 클래스 추가
          const colorClass =
            category.isActive && "text-emerald-500 font-semibold";

          return (
            <div className="w-fit flex flex-col items-center gap-2">
              {category.isActive
                ? React.cloneElement(category.icon, {
                    className: colorClass,
                  })
                : category.icon}
              <p className={`whitespace-nowrap ${colorClass}`}>
                {category.name}
              </p>
            </div>
          );
        })}
      </div>

      <Separator className="h-8!" orientation="vertical" />

      {/* 경기도 AI 콘텐츠 */}
      <div className="w-fit flex flex-col items-center gap-1">
        <img
          className="w-8"
          src="https://cdn-bastani.stunning.kr/static/feature/portfolio/category/img-gyeonngi-do.png"
          alt=""
        />
        <p className="whitespace-nowrap">경기도 AI 콘텐츠</p>
      </div>
    </div>
  );
}

export default Category;
