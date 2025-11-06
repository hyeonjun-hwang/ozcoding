import { Skeleton } from "../ui/skeleton";

function CarouselBanner() {
  const banners = [
    {
      title: "타이틀 타이틀 타이틀",
      description: "디스크립션",
    },
    {
      title: "타이틀 타이틀 타이틀",
      description: "디스크립션",
    },
    {
      title: "타이틀 타이틀 타이틀",
      description: "디스크립션",
    },
    {
      title: "타이틀 타이틀 타이틀",
      description: "디스크립션",
    },
    {
      title: "타이틀 타이틀 타이틀",
      description: "디스크립션",
    },
  ];
  return (
    <div>
      <section className="pt-10 pb-16 flex items-center gap-6 overflow-x-auto scrollbar-hide">
        {banners.map((banner, index) => {
          return (
            <div className="relative min-w-135 min-h-80 flex items-end">
              {/* 타이틀, 디스크립션 */}
              <div className="absolute left-6 bottom-4 flex flex-col gap-2 z-3 text-white">
                <p className="text-2xl">{banner.title}</p>
                <p className="text-sm">{banner.description}</p>
              </div>

              {/* 이미지 */}
              <div className="absolute w-135 h-25 rounded-b-sm bg-linear-to-t from-gray-900/90 to-gray-0 z-2"></div>
              <img
                className="w-full h-full rounded-sm z-1"
                src={`https://loremflickr.com/540/320/cartoon,vector,nature?random=${index}`}
                alt=""
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CarouselBanner;
