import Image from "next/image";
import CenteredTextOverlay from "@/components/VerticalItem/CenteredTextOverlay";
import topImage from "./image/top-image.png";
import VerticalText from "@/components/VerticalItem/VerticalText";
import { getNews, getProducts } from "../../../libs/newt";
import { News } from "../../../types/news";

interface NewsProps {
  news: News[];
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth()は0から始まるため+1する
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};

const MobileNav: React.FC<NewsProps> = ({ news }) => {
  return (
    <main className="flex min-h-screen  w-full flex-col items-center  pr-[50px] pb-28 font-text sm:hidden">
      <CenteredTextOverlay topImage={topImage} text="理念" />
      <div className="flex-col pt-16 pb-2 pl-4 pr-3 w-full flex items-start">
        <VerticalText text="お知らせ" />
      </div>

      <div className="pl-6 pr-2 pt-8 w-full">
        {news.map((news) => (
          <>
            <div
              key={news._id}
              className="w-full flex justify-between items-center bg-white pr-2 pl-4 pt-6 pb-1 border-t hover:border hover:shadow-md hover:rounded-lg"
            >
              <div className="flex items-center">
                <Image
                  src={news.image.src}
                  alt={news.image.altText || "Profile Image"}
                  className="object-contain border rounded-md"
                  width={100}
                  height={60}
                />
                <p className="ml-4 pr-4 font-bold">{news.title}</p>
              </div>
            </div>
            <p className="text-sm pr-2 pb-1 font-bold w-full flex justify-end text-slate-300">
              {formatDate(news.date)}
            </p>
          </>
        ))}
        <div className="w-full ">
          <div className="w-full h-[0.3px] bg-slate-200 rounded-xl " />
        </div>
      </div>
    </main>
  );
};

const DesktopNav: React.FC<NewsProps> = ({ news }) => {
  return (
    <main className="sm:flex min-h-screen  w-full flex-col items-center  px-[50px] pb-28 font-text hidden">
      <CenteredTextOverlay topImage={topImage} text="理念" />
      <div className="flex-col pt-16 pb-2 pl-4 pr-3 w-full flex items-start">
        <VerticalText text="お知らせ" />
      </div>

      <div className="pl-14 pr-8 py-10 w-full">
        {news.map((news) => (
          <>
            <div
              key={news._id}
              className="w-full flex justify-between items-center bg-white pr-2 pl-4 py-8 border-t hover:border hover:shadow-md hover:rounded-lg"
            >
              <div className="flex items-center">
                <Image
                  src={news.image.src}
                  alt={news.image.altText || "Profile Image"}
                  className="object-contain border rounded-md"
                  width={100}
                  height={100}
                />
                <p className="ml-4 pr-4 font-bold">{news.title}</p>
              </div>
              <div>
                <p className="text-sm font-bold pr-2 text-slate-300">
                  {formatDate(news.date)}
                </p>
              </div>
            </div>
          </>
        ))}
        <div className="w-full ">
          <div className="w-full h-[0.3px] bg-slate-200 rounded-xl " />
        </div>
      </div>
    </main>
  );
};

export default async function Info() {
  const news = await getNews();
  console.log(news);

  return (
    <>
      <DesktopNav news={news} />
      <MobileNav news={news} />
    </>
  );
}
