import CenteredTextOverlay from "@/components/VerticalItem/CenteredTextOverlay";
import topImage from "./image/top-image.png";
import { getNews } from "../../../../../libs/newt";
import { News } from "../../../../../types/news";
import InfoSection from "@/components/section/InfoSection";

interface NewsProps {
  news: News[];
}

const MobileNav: React.FC<NewsProps> = ({ news }) => {
  return (
    <main className="flex min-h-screen  w-full flex-col items-center  pr-[50px] pb-28 font-text sm:hidden">
      <CenteredTextOverlay topImage={topImage} text="お知らせ" />
      <InfoSection title="お知らせ" id="news" news={news} />
    </main>
  );
};

const DesktopNav: React.FC<NewsProps> = ({ news }) => {
  return (
    <main className="sm:flex min-h-screen  w-full flex-col items-center  px-[50px] pb-28 font-text hidden">
      <CenteredTextOverlay topImage={topImage} text="お知らせ" />
      <div className="w-full pl-6 pr-8">
        <InfoSection
          title="お知らせ"
          id="news"
          news={news}
          displayCount={0} // 表示するニュースの数を指定
        />
      </div>
    </main>
  );
};

export default async function Info() {
  const news = await getNews();

  return (
    <>
      <DesktopNav news={news} />
      <MobileNav news={news} />
    </>
  );
}
