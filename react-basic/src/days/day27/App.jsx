import AppHeader from "@/components/common/AppHeader";
import AppBanner from "@/components/common/AppBanner";
import AppFamilySite from "@/components/common/AppFamilySite";
import CarouselBanner from "@/components/common/CarouselBanner";
import Category from "@/components/common/Category";
import Content from "@/components/common/Content";

function App() {
  return (
    <div className="w-full h-screen">
      {/* 배너 */}
      <AppBanner />

      {/* 자회사 링크 */}
      <AppFamilySite />

      {/* 헤더 */}
      <AppHeader />

      <main className="w-full h-full">
        {/* 캐러셀 */}
        <CarouselBanner />

        {/* 카테고리 */}
        <Category />

        {/* 콘텐츠 */}
        <Content />
      </main>
    </div>
  );
}

export default App;
