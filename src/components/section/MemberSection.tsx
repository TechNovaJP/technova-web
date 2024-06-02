import { Member } from "../../../types/member";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

interface MemberProps {
  users: Member[];
}

const MobileNav: React.FC<MemberProps> = ({ users }) => {
  return (
    <div className="flex w-full gap-3 flex-col mt-8 pl-4 sm:hidden">
      {users.map((user) => (
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
    </div>
  );
};

const DesktopNav: React.FC<MemberProps> = ({ users }) => {
  return (
    <div className="sm:flex hidden gap-3 flex-wrap mt-8 pl-4 ">
      {users.map((user) => (
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
            <p>
              <p>{`${user.role} ${user.graduationYear}`}</p>
            </p>
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
  );
};

export default function MemberSection({ users }: MemberProps) {
  return (
    <>
      <DesktopNav users={users} />
      <MobileNav users={users} />
    </>
  );
}
