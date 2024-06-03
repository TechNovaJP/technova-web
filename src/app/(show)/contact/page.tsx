import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="flex flex-col items-center  py-16 pb-24 px-4 w-full">
      <h2 className="sm:text-4xl text-3xl font-bold mb-8">お問い合わせ</h2>
      <form
        method="post"
        action="https://tech-nova.form.newt.so/v1/IYCa0uBIZ"
        className="w-full max-w-lg"
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            お名前 <span className="text-red-500">必須</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="お名前を入力"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="company"
          >
            会社名(学校名) <span className="text-red-500">必須</span>
          </label>

          <input
            type="text"
            name="company"
            placeholder="会社名・学校名を入力"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            メールアドレス <span className="text-red-500">必須</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="メールアドレスを入力"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            電話番号
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="電話番号を入力"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            お問い合わせ内容 <span className="text-red-500">必須</span>
          </label>
          <textarea
            name="message"
            placeholder="お問い合わせ内容を入力"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <button
            type="submit"
            className="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            送信
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
