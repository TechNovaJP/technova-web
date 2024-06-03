import React from "react";
import Image from "next/image";
import VerticalText from "../VerticalItem/VerticalText";
import ViewButton from "../Button/ViewButton";

interface NewsItem {
  _id: string;
  image: { src: string; altText?: string };
  title: string;
  date: string;
}

interface InfoProps {
  news: NewsItem[];
  title: string;
  id: string;
  displayCount?: number;
  showButton?: boolean;
}

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("ja-JP", options);
};

const MobileNav: React.FC<InfoProps> = ({ news, title, id, showButton }) => {
  return (
    <section
      id={id}
      className="flex flex-col py-16 px-4 w-full items-start sm:hidden"
    >
      <VerticalText text={title} />
      <div className="pt-8 pl-10 w-full">
        {news.map((newsItem) => (
          <div key={newsItem._id} className="mb-4">
            <div className="flex flex-col items-stretch bg-white p-4 pt-6 pb-2 border-y hover:border hover:shadow-md hover:rounded-lg">
              <div className="flex items-center">
                <Image
                  src={newsItem.image.src}
                  alt={newsItem.image.altText || "Profile Image"}
                  className="object-contain border rounded-md"
                  width={100}
                  height={60}
                />
                <p className="ml-4 font-bold">{newsItem.title}</p>
              </div>
              <p className="text-sm font-bold w-full flex justify-end text-slate-300">
                {formatDate(newsItem.date)}
              </p>
            </div>
          </div>
        ))}
        <ViewButton
          linkUrl="/info"
          linkText="view more"
          isVisible={showButton}
        />
      </div>
    </section>
  );
};

const DesktopNav: React.FC<InfoProps> = ({ news, title, id, showButton }) => {
  return (
    <section
      id={id}
      className="pl-[80px] pr-4 py-6 w-full sm:flex hidden flex-col"
    >
      <div className="flex-col pt-16  -ml-[65px] mb- pr-3 w-full  items-start ">
        <VerticalText text={title} />
      </div>
      {news.map((newsItem) => (
        <div
          key={newsItem._id}
          className="w-full flex justify-between items-center bg-white pr-2 pl-4 py-8 border-y hover:border hover:shadow-md hover:rounded-lg mb-4"
        >
          <div className="flex items-center">
            <Image
              src={newsItem.image.src}
              alt={newsItem.image.altText || "Profile Image"}
              className="object-contain border rounded-md"
              width={100}
              height={100}
            />
            <p className="ml-4 pr-4 font-bold">{newsItem.title}</p>
          </div>
          <div>
            <p className="text-sm font-bold pr-2 text-slate-300">
              {formatDate(newsItem.date)}
            </p>
          </div>
        </div>
      ))}
      <ViewButton linkUrl="/info" linkText="view more" isVisible={showButton} />
    </section>
  );
};

const InfoSection: React.FC<InfoProps> = ({
  news,
  title,
  id,
  displayCount,
  showButton,
}) => {
  const displayNews =
    displayCount !== undefined && displayCount > 0
      ? news.slice(0, displayCount)
      : news;

  return (
    <>
      <DesktopNav
        news={displayNews}
        title={title}
        id={id}
        showButton={showButton}
      />
      <MobileNav news={displayNews} title={title} id={id} />
    </>
  );
};

export default InfoSection;
