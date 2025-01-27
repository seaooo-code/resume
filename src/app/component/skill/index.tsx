import { useTranslations } from "next-intl";

interface ISkillProps {
  className?: string;
}
const Skill = (props: ISkillProps) => {
  const { className } = props;

  const t = useTranslations("skill");

  return (
    <div className={className || ""}>
      <div className={"flex items-center text-lg font-bold"}>{t("title")}</div>
      <div className="flex items-center mt-2">
        <svg className="icon" aria-hidden="true">
          <use href="#icon-skill" />
        </svg>
        <div className={"ml-3 text-sm"}>
          <div>
            React、Vue、Node.js、Webpack、Vite、Next.js、Nest.js、Solid.js
          </div>
        </div>
      </div>
      <div className="flex items-center mt-1">
        <svg className="icon" aria-hidden="true">
          <use href="#icon-reward" />
        </svg>
        <span className="ml-3 text-sm">{t("honors")}</span>
      </div>
    </div>
  );
};

export default Skill;
