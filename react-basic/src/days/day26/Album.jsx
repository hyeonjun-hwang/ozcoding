import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

function Album() {
  const albums = [
    {
      type: "ALBUM",
      title: "Where The Glory Is",
      artist: "Josh Baldwin",
      description: "Featuring Patrick Mayberry",
      cover: "https://loremflickr.com/300/300/album,cover?random=1",
    },
    {
      type: "ALBUM",
      title: "Into THe Wild",
      artist: "Josh Baldwin",
      description: "Featuring Molly Skaggs, Kalley",
      cover: "https://loremflickr.com/300/300/album,cover?random=2",
    },
    {
      type: "SINGLE",
      title: "Evidence",
      artist: "Josh Baldwin",
      description: "Featuring Dante Bowe",
      cover: "https://loremflickr.com/300/300/album,cover?random=3",
    },
  ];
  return (
    <main className="w-screen h-screen bg-gray-50">
      <div className="px-12 py-6">
        {/* 타이틀 */}
        <p className="text-2xl">Appears On</p>

        <div className="mt-6 flex jus gap-4">
          {/* 카드들 */}
          {albums.map((album) => {
            // 이미지 로딩 상태
            const [isLoading, setIsLoading] = useState(true);

            return (
              <div>
                {/* 이미지 영역 */}
                <div className="relative flex">
                  <Badge
                    variant="secondary"
                    className="absolute m-3 bg-gray-500 text-white"
                  >
                    {album.type}
                  </Badge>
                  {isLoading && <Skeleton className="h-[300px] w-[300px]" />}
                  <img
                    src={album.cover}
                    onLoad={() => {
                      setIsLoading(false);
                    }}
                    alt=""
                  />
                </div>

                {/* 제목 및 디스크립션 */}
                <div className="my-2 flex flex-col gap-2">
                  <p className="font-semibold">{album.title}</p>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold">{album.artist}</p>
                    <p className="text-xs text-gray-400">{album.description}</p>
                  </div>
                </div>

                {/* 버튼 2개 */}
                <div className="my-2 flex gap-2">
                  <Button
                    className="rounded-full bg-gray-50 text-xs"
                    variant="outline"
                  >
                    Listen Now
                  </Button>
                  <Button
                    className="rounded-full bg-gray-50 text-xs"
                    variant="outline"
                  >
                    Resources
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        {/* 더보기 */}
        <div className="flex justify-center mt-5">
          <Button
            className="min-w-25 w-25 rounded-full bg-gray-50 text-xs"
            variant="outline"
          >
            View All ↓
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Album;
