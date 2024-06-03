import Image from "next/image";
import { News } from "../../types/news";
import { Product } from "../../types/products";
import { Member } from "../../types/member";
import topImage from "./image/top-image.png";
import { getNews, getProducts, getUser } from "../../libs/newt";
import VerticalText from "@/components/VerticalItem/VerticalText";
import visionImage from "./image/vision-image.png";
import somaImage from "./image/soma-image.png";
import Link from "next/link";
import AboutSection from "@/components/section/AboutSection";
import ProductsSection from "@/components/section/ProductsSection";
import TeamSection from "@/components/section/TeamSection";
import InfoSection from "@/components/section/InfoSection";
import CommunitySection from "@/components/section/CommunitySection";
import ViewButton from "@/components/Button/ViewButton";
interface Props {
  news: News[];
  products: Product[];
  users: Member[];
}

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
      <AboutSection
        title="ビジョン"
        id="vision"
        heading={`人から人へ繋がる\n新たな未来を生み出す`}
        description={`私たちは、日々の生活の中で人々が互いにつながり、支え合うことで、限りない可能性を開花させる新たな社会を創造します。\nテクノロジーを通じて人々が本来持っている創造力や繋がりを強化し、それぞれの個性が互いを豊かにする未来を目指します。`}
        image={visionImage}
        showButton={true}
      />
      {/* プロダクト */}
      <ProductsSection
        title="プロダクト"
        id="product"
        products={products}
        displayIndex={0}
        showButton={true}
      />
      {/* チーム */}
      <TeamSection title="チーム" id="team" users={users} />
      {/* お知らせ */}
      <InfoSection
        title="お知らせ"
        id="news"
        news={news}
        displayCount={0}
        showButton={true}
      />
      {/* 概要 */}
      <CommunitySection
        title="概要"
        id="overview"
        image={somaImage}
        description={`私は兄からプログラミングを好きになるきっかけをもらいました。\n
同様に、私も他の人々にそのようなきっかけを提供したいと思っています。\n
芝浦工業大学において、プログラミングを好む人々を増やしていきたいです。`}
        representative="Soma Takata"
      />
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
      <div className="h-10 " />
      <div className="w-full pl-8 pr-10">
        {/* ミッション */}
        <AboutSection
          title="ビジョン"
          id="vision"
          heading={`人から人へ繋がる\n新たな未来を生み出す`}
          description={`私たちは、日々の生活の中で人々が互いにつながり、支え合うことで、限りない可能性を開花させる新たな社会を創造します。\nテクノロジーを通じて人々が本来持っている創造力や繋がりを強化し、それぞれの個性が互いを豊かにする未来を目指します。`}
          image={visionImage}
          showButton={true}
        />
        {/* プロダクト */}
        <ProductsSection
          title="プロダクト"
          id="product"
          products={products}
          displayIndex={0}
          showButton={true}
        />
        {/* チーム */}
        <TeamSection
          title="チ―ム"
          id="team"
          users={users}
          displayIndexes={[0, 1, 2]}
          showButton={true}
        />

        {/* お知らせ */}
        <InfoSection
          title="お知らせ"
          id="news"
          news={news}
          displayCount={0}
          showButton={true}
        />
        {/* 概要 */}
        <CommunitySection
          title="概要"
          id="overview"
          image={somaImage}
          description={`私は兄からプログラミングを好きになるきっかけをもらいました。\n
同様に、私も他の人々にそのようなきっかけを提供したいと思っています。\n
芝浦工業大学において、プログラミングを好む人々を増やしていきたいです。`}
          representative="Soma Takata"
        />
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
      </div>
    </main>
  );
};

export default async function Home() {
  const news = await getNews();
  const products = await getProducts();
  const users = await getUser();

  return (
    <>
      <DesktopNav news={news} products={products} users={users} />
      <MobileNav news={news} products={products} users={users} />
    </>
  );
}
