import topImage from "./image/top-image.png";
import visionImage from "./image/vision-image.png";
import missionImage from "./image/mission-image.png";
import valueImage from "./image/value-image.png";
import CenteredTextOverlay from "@/components/VerticalItem/CenteredTextOverlay";
import AboutSection from "@/components/section/AboutSection";

export default function About() {
  return (
    <main className="flex w-full flex-col items-center justify-between sm:px-[50px] pr-[50px] pb-16">
      <CenteredTextOverlay topImage={topImage} text="理念" />
      <AboutSection
        title="ビジョン"
        id="vision"
        heading={`人から人へ繋がる\n新たな未来を生み出す`}
        description={`私たちは、日々の生活の中で人々が互いにつながり、支え合うことで、限りない可能性を開花させる新たな社会を創造します。\nテクノロジーを通じて人々が本来持っている創造力や繋がりを強化し、それぞれの個性が互いを豊かにする未来を目指します。`}
        image={visionImage}
        showButton={false}
      />
      <AboutSection
        title="ミッション"
        id="mission"
        heading={`日常に新たな選択肢をもたらし、\n生活に彩りを`}
        description={`私たちのコミュニティは、日常生活に新しい選択肢（サービス）を提供することで、人々の生活に多様性と豊かさをもたらします。\n技術の力を利用して、日々の生活に彩りを加える新しい方法を探求し、それを共有することで、人々の生活をより充実したものにします。`}
        image={missionImage}
        showButton={false}
      />
      <AboutSection
        title="バリュ―"
        id="value"
        heading={`挑戦しよう\n超えよう\nいつだって楽しく`}
        description={""}
        image={valueImage}
        showButton={false}
      />
    </main>
  );
}
