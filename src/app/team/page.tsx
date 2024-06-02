import CenteredTextOverlay from "@/components/VerticalItem/CenteredTextOverlay";
import topImage from "./image/top-image.jpg";
import VerticalText from "@/components/VerticalItem/VerticalText";
import { getUser } from "../../../libs/newt";
import { Member } from "../../../types/member";
import MemberSection from "@/components/section/MemberSection";

interface MemberProps {
  users: Member[];
}

const MobileNav: React.FC<MemberProps> = ({ users }) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center pr-[50px] pb-28 font-text sm:hidden">
      <CenteredTextOverlay topImage={topImage} text="チーム" />
      <div className="flex-col pt-16 pb-2 pl-4 pr-3  w-full flex items-start">
        <VerticalText text="チーム" />
        <MemberSection users={users} />
      </div>
    </main>
  );
};

const DesktopNav: React.FC<MemberProps> = ({ users }) => {
  return (
    <main className="sm:flex min-h-screen w-full flex-col items-center px-[50px] pb-28 font-text hidden">
      <CenteredTextOverlay topImage={topImage} text="チーム" />
      <div className="flex-col pt-24 pb-6 pl-12 pr-2 w-full flex items-start">
        <VerticalText text="チーム" />
        <MemberSection users={users} />
      </div>
    </main>
  );
};

export default async function Team() {
  const users = await getUser();
  console.log(users);
  return (
    <>
      <DesktopNav users={users} />
      <MobileNav users={users} />
    </>
  );
}
