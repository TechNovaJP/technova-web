import React from "react";
import Image from "next/image";
import Link from "next/link";
import VerticalText from "../VerticalItem/VerticalText";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import ViewButton from "../Button/ViewButton";

interface User {
  _id: string;
  profileImage: { src: string; altText?: string };
  role: string;
  graduationYear: string;
  fullName: string;
  x: string;
  github: string;
}

interface TeamProps {
  users: User[];
  title: string;
  id: string;
  displayIndexes?: number[];
  showButton?: boolean;
}

const MobileNav: React.FC<TeamProps> = ({
  users,
  title,
  id,
  displayIndexes,
  showButton,
}) => {
  const displayUsers = displayIndexes
    ? displayIndexes
        .map((index) => users[index])
        .filter((user) => user !== undefined)
    : users;

  return (
    <section
      id={id}
      className="flex-col pt-16 pb-2 pl-4 pr-3 w-full flex items-start sm:hidden"
    >
      <VerticalText text={title} />
      <div className="flex w-full gap-3 flex-col mt-8 pl-10 sm:hidden">
        {displayUsers.map((user) => (
          <div
            key={user._id}
            className="w-full border flex justify-between items-center bg-white shadow-xl p-2 rounded-md"
          >
            <div className="flex items-center">
              <Image
                src={user.profileImage.src}
                alt={user.profileImage.altText || "Profile Image"}
                className="object-contain border rounded-md"
                width={100}
                height={100}
              />
              <div className="pl-4">
                <div className="flex font-bold text-sm text-[#333333] items-center justify-start w-full pt-4">
                  <p>{user.role}</p>
                  <p>{user.graduationYear}</p>
                </div>
                <p className="text-base font-bold text-[#333333] pt-1 pb-3">
                  {user.fullName}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center pr-2">
              <Link href={user.x} target="_blank">
                <RiTwitterXLine size={20} />
              </Link>
              <Link href={user.github} target="_blank">
                <IoLogoGithub size={25} />
              </Link>
            </div>
          </div>
        ))}

        <ViewButton
          linkUrl="/team"
          linkText="view more"
          isVisible={showButton}
        />
      </div>
    </section>
  );
};

const DesktopNav: React.FC<TeamProps> = ({
  users,
  title,
  id,
  displayIndexes,
  showButton,
}) => {
  const displayUsers = displayIndexes
    ? displayIndexes
        .map((index) => users[index])
        .filter((user) => user !== undefined)
    : users;

  return (
    <section
      id={id}
      className="flex-col pt-16 pb-2 pl-4 pr-4 w-full sm:flex items-start hidden"
    >
      <VerticalText text={title} />
      <div className="flex w-full gap-3 mt-8 pl-14">
        {displayUsers.map((user) => (
          <div
            key={user._id}
            className="w-fit flex flex-col justify-center items-center bg-white shadow-xl p-2 rounded-md border"
          >
            <Image
              src={user.profileImage.src}
              alt={user.profileImage.altText || "Profile Image"}
              className="object-contain border rounded-md"
              width={150}
              height={150}
            />
            <div className="flex font-bold text-sm text-[#333333] items-center justify-center w-full pt-4">
              <p>{`${user.role} ${user.graduationYear}`}</p>
            </div>
            <p className="text-sm font-bold text-[#333333] pt-1 pb-3">
              {user.fullName}
            </p>
            <div className="flex gap-4 items-center pb-2">
              <Link href={user.x} target="_blank">
                <RiTwitterXLine size={20} />
              </Link>
              <Link href={user.github} target="_blank">
                <IoLogoGithub size={25} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <ViewButton linkUrl="/team" linkText="view more" isVisible={showButton} />
    </section>
  );
};

const TeamSection: React.FC<TeamProps> = (props) => {
  return (
    <>
      <DesktopNav {...props} />
      <MobileNav {...props} />
    </>
  );
};

export default TeamSection;
