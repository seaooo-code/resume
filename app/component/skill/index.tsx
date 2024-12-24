interface ISkillProps {
  className?: string;
}
const Skill = (props: ISkillProps) => {
  const { className } = props;
  return (
    <div className={className || ""}>
      <div className={"flex items-center text-lg font-bold"}>技能/荣誉</div>
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
        <span className="ml-3 text-sm">
          大学生服务外包大赛二等奖、英语四六级、优秀志愿者
        </span>
      </div>
    </div>
  );
};

export default Skill;
