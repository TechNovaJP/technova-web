import React from "react";
import Link from "next/link";

const ThanksPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <h1 className="sm:text-4xl text-2xl font-bold mb-6">
        ありがとうございました
      </h1>
      <p className="sm:text-lg text-sm text-center  mb-8">
        お問い合わせありがとうございます。
        <br />
        後ほど担当者よりご連絡いたします。
      </p>
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 sm:text-base text-sm border px-6 py-2 rounded-lg"
      >
        ホームページに戻る
      </Link>
    </div>
  );
};

export default ThanksPage;
