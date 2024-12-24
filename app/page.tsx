import Profile from "@/app/component/profile";
import Education from "@/app/component/education";
import Skill from "@/app/component/skill";
import Experience from "@/app/component/experience";
import Basic from "@/app/component/basic";

export default function Home() {
  return (
    <main className="relative m-auto left-0 right-0 w-[794px] text-[color:#454d64]">
      <Basic className={"p-2"} />
      <Profile className={"p-2"} />
      <Education className={"p-2"} />
      <Experience className={"p-2"} />
      <Skill className={"p-2"} />
    </main>
  );
}
