import CenteredTextOverlay from "@/components/VerticalItem/CenteredTextOverlay";
import topImage from "./image/top-image.jpg";
import { getUser } from "../../../../../libs/newt";
import { Member } from "../../../../../types/member";
import TeamSection from "@/components/section/TeamSection";

interface MemberProps {
  users: Member[];
}

const MobileNav: React.FC<MemberProps> = ({ users }) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center pr-[50px] pb-28 font-text sm:hidden">
      <CenteredTextOverlay topImage={topImage} text="チーム" />
      <div className="h-10 " />
      <TeamSection title="チーム" id="team" users={users} />
    </main>
  );
};

const DesktopNav: React.FC<MemberProps> = ({ users }) => {
  return (
    <main className="sm:flex min-h-screen w-full flex-col items-center px-[50px] pb-28 font-text hidden">
      <CenteredTextOverlay topImage={topImage} text="チーム" />
      <div className="h-16 " />
      <div className="w-full pl-6 pr-8">
        <TeamSection title="チーム" id="team" users={users} />
      </div>
    </main>
  );
};

export default async function Team() {
  const users = await getUser();

  return (
    <>
      <DesktopNav users={users} />
      <MobileNav users={users} />
    </>
  );
}
