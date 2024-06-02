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
    <section
      id={id}
      className="flex-col sm:py-24 sm:px-10 py-16 pl-4 pr-3 w-full flex items-start"
    >
      <VerticalText text={title} />
      <div className="sm:px-20  pl-16 ">
        <h2 className="whitespace-pre-line sm:mb-10 mb-6 tracking-widest lg:text-4xl md:text-[28px] text-xl font-black leading-relaxed">
          {heading}
        </h2>
        <p className="whitespace-pre-line mb-12  text-xs tracking-[3px] ">
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
