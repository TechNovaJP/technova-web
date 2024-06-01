import Image, { StaticImageData } from "next/image";
import VerticalText from "@/components/VerticalItem/VerticalText";

interface SectionProps {
  title: string;
  id: string;
  heading: string;
  description: string;
  image: StaticImageData;
}

const Section: React.FC<SectionProps> = ({
  title,
  id,
  heading,
  description,
  image,
}) => {
  return (
    <section id={id} className="flex-col py-24 px-10 w-full flex items-start">
      <VerticalText text={title} />
      <div className="px-20">
        <h2 className="whitespace-pre-line mb-10 tracking-widest text-4xl font-black leading-relaxed">
          {heading}
        </h2>
        <p className="whitespace-pre-line mb-10 text-base tracking-[3px]">
          {description}
        </p>
        <Image
          src={image}
          alt={`${title} image`}
          priority
          className="relative rounded-md"
        />
      </div>
    </section>
  );
};

export default Section;
