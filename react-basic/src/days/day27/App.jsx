import React from "react";
import AppHeader from "../../components/common/AppHeader";
import AppBanner from "@/components/common/AppBanner";
import AppFamilySite from "@/components/common/AppFamilySite";
import { Skeleton } from "@/components/ui/skeleton";

function App() {
  return (
    <div className="w-full h-screen">
      {/* 배너 */}
      <AppBanner />

      {/* 자회사 링크 */}
      <AppFamilySite />

      {/* 헤더 */}
      <AppHeader />

      <main>
        <section className="mt-6 flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <Skeleton className="min-w-[520px] w-[520px] h-80" />
          <Skeleton className="min-w-[520px] w-[520px] h-80" />
          <Skeleton className="min-w-[520px] w-[520px] h-80" />
          <Skeleton className="min-w-[520px] w-[520px] h-80" />
          <Skeleton className="min-w-[520px] w-[520px] h-80" />
        </section>
      </main>
    </div>
  );
}

export default App;
