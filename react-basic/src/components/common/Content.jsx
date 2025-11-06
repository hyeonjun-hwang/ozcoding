import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Heart } from "lucide-react";

function Content() {
  const tempAvatar = (
    <Avatar className="h-6 w-6">
      <AvatarImage src="https://github.com/evilrabbit.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
  const contents = [
    {
      avatar: tempAvatar,
      username: "개발좋아",
      views: 987,
      likes: 45,
    },
    {
      avatar: tempAvatar,
      username: "클론코딩마스터",
      views: 521,
      likes: 72,
    },
    {
      avatar: tempAvatar,
      username: "로이드",
      views: 450,
      likes: 18,
    },
    {
      avatar: tempAvatar,
      username: "노란노루",
      views: 339,
      likes: 98,
    },
    {
      avatar: tempAvatar,
      username: "제이_워커",
      views: 680,
      likes: 55,
    },
    {
      avatar: tempAvatar,
      username: "커피한잔",
      views: 310,
      likes: 31,
    },
    {
      avatar: tempAvatar,
      username: "프론트엔드_짱",
      views: 770,
      likes: 52,
    },
    {
      avatar: tempAvatar,
      username: "피카츄번개",
      views: 105,
      likes: 11,
    },
    {
      avatar: tempAvatar,
      username: "새벽코딩",
      views: 220,
      likes: 9,
    },
    {
      avatar: tempAvatar,
      username: "테일윈드덕후",
      views: 490,
      likes: 41,
    },
    {
      avatar: tempAvatar,
      username: "코드쟁이",
      views: 880,
      likes: 7,
    },
  ];
  return (
    <div className="px-16 py-4 flex flex-wrap gap-6">
      {/* 카드 */}
      {contents.map((content, i) => {
        const [isLoading, setIsLoading] = useState(true);
        return (
          <div className="w-fit h-fit flex flex-col gap-3">
            {/* 이미지 */}
            <div className="w-75 h-75">
              {isLoading && <Skeleton className="w-full h-full bg-gray-400" />}
              <div>
                <img
                  className="w-full h-full rounded-md"
                  src={`https://loremflickr.com/300/300/cartoon,vector,nature?random=${i}`}
                  onLoad={() => setIsLoading(false)}
                  alt=""
                />
              </div>
            </div>

            <div className="flex justify-between">
              {/* 유저 */}
              <div className="flex gap-2 items-center">
                {content.avatar}
                <p className="text-sm font-medium">{content.username}</p>
              </div>

              {/* 조회수/좋아요 */}
              <div className="flex items-center gap-2.5 text-xs font-medium text-gray-600/90">
                <div className="flex items-center gap-0.5">
                  <Eye className="w-4 h-4" />
                  <p>{content.views}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  <Heart className="w-4 h-4" />
                  <p>{content.likes}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
