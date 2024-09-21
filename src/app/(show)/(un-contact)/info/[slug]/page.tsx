import { Metadata } from "next";
import { getArticleBySlug, getNews } from "../../../../../../libs/newt";
import { News } from "../../../../../../types/news";
import { formatDate } from "@/utils/formatDate";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await getNews();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  return {
    title: article?.title,
    description: "投稿詳細ページです",
  };
}

const MobileNav: React.FC<{ article: News }> = ({ article }) => {
  return (
    <main className="flex min-h-screen  w-full flex-col items-center pt-10  pr-[50px] pb-28 font-text sm:hidden">
      <div className="w-full">
        <p className="text-xl font-bold flex items-center justify-center">
          {article.title}
        </p>
        <div className="text-xs font-bold mt-4 flex justify-end text-slate-300">
          {formatDate(article.date)}
        </div>
        <div
          className="mt-6 w-full p-8 border text-sm rounded-r-xl gap-3 flex flex-col"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </main>
  );
};

const DesktopNav: React.FC<{ article: News }> = ({ article }) => {
  return (
    <main className="sm:flex min-h-screen py-12 w-full flex-col items-center  px-[50px] pb-28 font-text hidden">
      <div className="w-full">
        <p className="text-3xl font-bold flex items-center justify-center">
          {article.title}
        </p>
        <div className="text-sm font-bold mt-6 flex justify-end text-slate-300">
          {formatDate(article.date)}
        </div>
        <div
          className="mt-6 w-full p-8 border rounded-xl gap-3 flex flex-col"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </main>
  );
};

export default async function Info({ params }: Props) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  if (!article) return;


  return (
    <>
      <DesktopNav article={article} />
      <MobileNav article={article} />
    </>
  );
}
