import Image from "next/image";
import { News } from "../../types/news";
import { Product } from "../../types/products";
import { Member } from "../../types/member";
import topImage from "./image/top-image.png";
import { getNews, getProducts, getUser } from "../../libs/newt";
import VerticalText from "@/components/VerticalItem/VerticalText";
import Section from "@/components/section/Section";
import missionImage from "./image/mission-image.png";
import somaImage from "./image/soma-image.png";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

interface Props {
  news: News[];
  products: Product[];
  users: Member[];
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth()は0から始まるため+1する
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};

const MobileNav: React.FC<Props> = ({ news, users, products }) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center pr-[50px] pb-28 font-text sm:hidden">
      <div className="w-full relative">
        <Image
          src={topImage}
          alt="Top image"
          priority
          className="relative rounded-r-md sm:rounded-md w-full"
        />
        <div className="absolute rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-3 bg-blur-lg text-white ">
          <p className="tracking-[4px]  font-black text-2xl  leading-none">
            TechNova
          </p>
        </div>
      </div>
      {/* ミッション */}
      <section
        id="mission"
        className="flex-col sm:py-24 sm:px-10 py-16 pl-4 pr-3 w-full flex items-start"
      >
        <VerticalText text="ミッション" />
        <div className="sm:px-20  pl-10 ">
          <h2 className="whitespace-pre-line sm:mb-10 mb-6 tracking-widest lg:text-4xl md:text-[28px] text-xl font-black leading-relaxed">
            {`日常に新たな選択肢をもたらし、\n生活に彩りを`}
          </h2>
          <p className="whitespace-pre-line mb-12  text-xs tracking-[3px] ">
            {`私たちのコミュニティは、日常生活に新しい選択肢（サービス）を提供することで、人々の生活に多様性と豊かさをもたらします。\n技術の力を利用して、日々の生活に彩りを加える新しい方法を探求し、それを共有することで、人々の生活をより充実したものにします。`}
          </p>
          <Image src={missionImage} priority className="relative rounded-md" />
          <Link href="/about" className=" flex justify-end mt-6">
            <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
              view more
            </button>
          </Link>
        </div>
      </section>
      {/* プロダクト */}
      <section id="product" className="flex flex-col py-8  pl-5 pr-3  w-full  ">
        <div className=" flex-col flex items-start">
          <VerticalText text="プロダクト" />
        </div>
        <div className="flex flex-col w-full  pl-10  pt-4 pr-1">
          <p className="text-2xl font-bold  pb-4">{products[0].title}</p>
          <p className="text-xs text-[#c0bcbc] pb-6 truncate">
            {products[0].description}
          </p>
          <div className="grid grid-cols-3 gap-2 w-full">
            {products[0].coverImage.map((image, imageIndex) => (
              <div key={imageIndex} className="relative aspect-video">
                <Image
                  src={image.src}
                  alt={image.altText || "Cover Image"}
                  fill
                  className="object-contain border rounded-xl"
                />
              </div>
            ))}
          </div>
          <Link href="product" className=" flex justify-end mt-6">
            <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
              view more
            </button>
          </Link>
        </div>
      </section>
      {/* チーム */}
      <section
        id="team"
        className="flex-col pt-16 pb-2 pl-4 pr-3  w-full flex items-start"
      >
        <VerticalText text="チーム" />
        <div className="flex w-full gap-3 flex-col mt-8  pl-10  sm:hidden">
          <div
            key={users[0]._id}
            className="w-full border flex justify-between items-center bg-white shadow-xl p-2 rounded-md"
          >
            <div className="flex items-center">
              <Image
                src={users[0].profileImage.src}
                alt={users[0].profileImage.altText || "Profile Image"}
                className="object-contain border rounded-md"
                width={100}
                height={100}
              />
              <div className="pl-4">
                <div className="flex font-bold text-sm text-[#333333] items-center justify-start w-full pt-4">
                  <p>{users[0].role}</p>
                  <p>{users[0].graduationYear}</p>
                </div>
                <p className="text-base font-bold text-[#333333] pt-1 pb-3">
                  {users[0].fullName}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center pr-2">
              <Link href={users[0].x} target="_blank">
                <RiTwitterXLine size={20} />
              </Link>
              <Link href={users[0].github} target="_blank">
                <IoLogoGithub size={25} />
              </Link>
            </div>
          </div>

          <Link href="team" className=" flex justify-end mt-4">
            <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
              view more
            </button>
          </Link>
        </div>
      </section>
      {/* お知らせ */}
      <section className="w-full pr-3">
        <div className="flex-col pt-16 pb-2 pl-4  pr-3 w-full flex items-start">
          <VerticalText text="お知らせ" />
        </div>

        <div className=" pl-10  pr-2 pt-4 w-full ">
          <>
            <div
              key={news[0]._id}
              className="w-full flex justify-between items-center bg-white pr-2 pl-4 pt-6 pb-1 "
            >
              <div className="flex items-center">
                <Image
                  src={news[0].image.src}
                  alt={news[0].image.altText || "Profile Image"}
                  className="object-contain border rounded-md"
                  width={100}
                  height={60}
                />
                <p className="ml-4 pr-4 font-bold">{news[0].title}</p>
              </div>
            </div>
            <p className="text-sm pr-2 pb-1 font-bold w-full flex justify-end text-slate-300">
              {formatDate(news[0].date)}
            </p>
          </>
        </div>
        <Link href="info" className=" flex justify-end mt-6">
          <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
            view more
          </button>
        </Link>
      </section>
      {/* 概要 */}
      <section id="community" className="w-full">
        <div className="flex-col pt-16 pb-2 pl-4 pr-3 w-full flex items-start">
          <VerticalText text="概要" />
        </div>
        <div className="pl-14 pr-2 pt-4 w-full">
          <Image
            src={somaImage}
            width={200}
            height={200}
            priority
            className="rounded-md"
          />
        </div>
        <div className="sm:px-20  pl-14 pt-8 ">
          <p className="whitespace-pre-line mb-4 font-bold  text-xs tracking-[3px] ">
            {`私は兄からプログラミングを好きになるきっかけをもらいました。\n
同様に、私も他の人々にそのようなきっかけを提供したいと思っています。\n
芝浦工業大学において、プログラミングを好む人々を増やしていきたいです。`}
          </p>
          <p className="text-sm justify-end w-full flex pr-2">
            代表 Soma Takata
          </p>
        </div>
      </section>
      {/* お問い合わせ */}
      <section className="w-full">
        <div className="flex-col pt-16 pb-2 pl-4 pr-3 w-full flex items-start">
          <VerticalText text="お問い合わせ" />
        </div>
        <div className="pr-8 pl-14 -mt-20">
          <Link href="contact">
            <button className=" py-2 text-sm font-bold flex w-full justify-center border border-[#333333] rounded-lg ">
              お問い合わせへ
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

const DesktopNav: React.FC<Props> = ({ news, users, products }) => {
  return (
    <main className="sm:flex min-h-screen w-full flex-col items-center px-[50px] pb-28 font-text hidden">
      <div className="w-full relative">
        <Image
          src={topImage}
          alt="Top image"
          priority
          className="relative rounded-r-md sm:rounded-md w-full"
        />
        <div className="absolute rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-3 bg-blur-lg text-white ">
          <p className="tracking-[4px]  font-black text-2xl  leading-none">
            TechNova
          </p>
        </div>
      </div>
      {/* ミッション */}
      <section
        id="mission"
        className="flex-col  pr-4 pl-4 mt-12 w-full flex items-start"
      >
        <VerticalText text="ミッション" />
        <div className=" pl-16 ">
          <h2 className="whitespace-pre-line sm:mb-10 mb-6 tracking-widest lg:text-4xl md:text-[28px] text-xl font-black leading-relaxed">
            {`日常に新たな選択肢をもたらし、\n生活に彩りを`}
          </h2>
          <p className="whitespace-pre-line mb-12  text-xs tracking-[3px] ">
            {`私たちのコミュニティは、日常生活に新しい選択肢（サービス）を提供することで、人々の生活に多様性と豊かさをもたらします。\n技術の力を利用して、日々の生活に彩りを加える新しい方法を探求し、それを共有することで、人々の生活をより充実したものにします。`}
          </p>
          <Image src={missionImage} priority className="relative rounded-md" />
          <Link href="/about" className=" flex justify-end mt-6">
            <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
              view more
            </button>
          </Link>
        </div>
      </section>
      {/* プロダクト */}
      <section id="product" className="flex flex-col py-8 pl-4 pr-3  w-full  ">
        <div className=" flex-col flex items-start">
          <VerticalText text="プロダクト" />
        </div>
        <div className="flex flex-col w-full pl-16  pt-4 pr-1">
          <p className="text-2xl font-bold  pb-4">{products[0].title}</p>
          <p className="text-xs text-[#c0bcbc] pb-6 truncate">
            {products[0].description}
          </p>
          <div className="grid grid-cols-3 gap-2 w-full">
            {products[0].coverImage.map((image, imageIndex) => (
              <div key={imageIndex} className="relative aspect-video">
                <Image
                  src={image.src}
                  alt={image.altText || "Cover Image"}
                  fill
                  className="object-contain border rounded-xl"
                />
              </div>
            ))}
          </div>
          <Link href="product" className=" flex justify-end mt-6">
            <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
              view more
            </button>
          </Link>
        </div>
      </section>
      {/* チーム */}
      <section
        id="team"
        className="flex-col pt-16 pb-2 pl-4 pr-4  w-full flex items-start"
      >
        <VerticalText text="チーム" />
        <div className="sm:flex w-full  gap-3 flex-col mt-8 pl-16 hidden">
          <div
            key={users[0]._id}
            className="w-full border flex justify-between items-center bg-white shadow-xl p-2 rounded-md"
          >
            <div className="flex items-center">
              <Image
                src={users[0].profileImage.src}
                alt={users[0].profileImage.altText || "Profile Image"}
                className="object-contain border rounded-md"
                width={100}
                height={100}
              />
              <div className="pl-4">
                <div className="flex font-bold text-sm text-[#333333] items-center justify-start w-full pt-4">
                  <p>{users[0].role}</p>
                  <p>{users[0].graduationYear}</p>
                </div>
                <p className="text-base font-bold text-[#333333] pt-1 pb-3">
                  {users[0].fullName}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center pr-2">
              <Link href={users[0].x} target="_blank">
                <RiTwitterXLine size={20} />
              </Link>
              <Link href={users[0].github} target="_blank">
                <IoLogoGithub size={25} />
              </Link>
            </div>
          </div>

          <Link href="team" className=" flex justify-end mt-6">
            <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
              view more
            </button>
          </Link>
        </div>
      </section>
      {/* お知らせ */}
      <section className="pl-[80px] pr-4 py-10 w-full">
        <div className="flex-col pt-16 pb-2 -ml-[65px] pr-3 w-full flex items-start">
          <VerticalText text="お知らせ" />
        </div>
        <div
          key={news[0]._id}
          className="w-full flex justify-between items-center bg-white pr-2 pl-4 py-8 border-y hover:border hover:shadow-md hover:rounded-lg"
        >
          <div className="flex items-center">
            <Image
              src={news[0].image.src}
              alt={news[0].image.altText || "Profile Image"}
              className="object-contain border rounded-md"
              width={100}
              height={100}
            />
            <p className="ml-4 pr-4 font-bold">{news[0].title}</p>
          </div>
          <div>
            <p className="text-sm font-bold pr-2 text-slate-300">
              {formatDate(news[0].date)}
            </p>
          </div>
        </div>

        <Link href="info" className=" flex justify-end mt-6">
          <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
            view more
          </button>
        </Link>
      </section>
      {/* 概要 */}
      <section id="community" className="w-full">
        <div className="flex-col pl-4 pt-16 pb-2  pr-3 w-full flex items-start">
          <VerticalText text="概要" />
        </div>
        <div className="pl-16  pr-2 pt-4 w-full">
          <Image
            src={somaImage}
            width={200}
            height={200}
            priority
            className="rounded-md"
          />
        </div>
        <div className="sm:px-20  pl-10 pt-8 ">
          <p className="whitespace-pre-line mb-4 font-bold  text-xs tracking-[3px] ">
            {`私は兄からプログラミングを好きになるきっかけをもらいました。\n
同様に、私も他の人々にそのようなきっかけを提供したいと思っています。\n
芝浦工業大学において、プログラミングを好む人々を増やしていきたいです。`}
          </p>
          <p className="text-sm justify-end w-full flex pr-2">
            代表 Soma Takata
          </p>
        </div>
      </section>
      {/* お問い合わせ */}
      <section className="w-full ">
        <div className="flex-col pt-16 pb-2 pl-4 pr-3 w-full flex items-start">
          <VerticalText text="お問い合わせ" />
        </div>
        <div className="pl-16  pr-8  -mt-20">
          <Link href="contact">
            <button className=" py-2 text-sm font-bold flex w-full justify-center border border-[#333333] rounded-lg ">
              お問い合わせへ
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default async function Home() {
  const news = await getNews();
  const products = await getProducts();
  const users = await getUser();
  console.log(news);

  return (
    <>
      <DesktopNav news={news} products={products} users={users} />
      <MobileNav news={news} products={products} users={users} />
    </>
  );
}
