import { Fragment } from "react";
import { useTranslations } from "next-intl";

interface IExperienceProps {
  className?: string;
}
type ExperienceItem = {
  company: string;
  time: string;
  icon: string;
  position: string;
  department: string;
  tags: string[];
  descriptionList: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "字节跳动",
    time: "2022年10月 - 至今",
    icon: "byte",
    position: "前端开发工程师",
    department: "客服平台",
    tags: ["React", "Node.js", "dnd-kit", "微前端", "首屏优化", "包体积优化"],
    descriptionList: [
      "负责人事、账号、链接管理平台系统的开发，为运营人员提供人事调动、账号权限控制、链接统一维护等功能。",
      "参与低代码平台的开发和测试，基于低代码平台开发多个页面并交付使用，贡献自定义物料组件。",
      "基于FaaS平台维护BFF服务，深入排查并解决了Node.js内存泄漏问题，确保系统的高效运行。",
      "基于Perfsee工具，优化项目打包后的体积，大幅提升Bundle得分，并建立了防劣化机制。",
      "实施了拦截器改造、请求缓存策略、接口逻辑优化及中间件重构，首屏从8秒优化至2秒，显著提升用户体验。",
      "主导系统框架的升级，构建速度提高了266%，依赖体积减少62%，提升开发体验，大幅降低了资源消耗。",
      "配置式表单设计与开发，通过配置化方式，实现表单的动态渲染与数据提交，提高了开发效率。",
      "全栈开发构建耗时看板，及时发现并解决构建耗时问题，提升团队效率。",
    ],
  },
  {
    company: "Shopee",
    time: "2022年6月 - 2022年9月",
    icon: "shopee",
    position: "大前端开发工程师",
    department: "App & RN",
    tags: ["React", "React Native", "Node.js", "Playwright", "Istanbul"],
    descriptionList: [
      "负责虾皮购物App的性能优化，主要内容为探索和实现React Native（RN）的服务端渲染技术。",
      "验证了在Node.js中运行RN代码的可行性，以及Node.js输出渲染序列的准确性，为未来项目奠定了技术基础。",
      "基于Istanbul，配合UI自动化框架，测试代码覆盖率，协助完善项目测试范围及提升应用性能。",
    ],
  },
];
const Experience = (props: IExperienceProps) => {
  const { className } = props;

  const t = useTranslations("experience");

  const experienceItem = ({
    company,
    time,
    icon,
    position,
    department,
    tags,
    descriptionList,
  }: ExperienceItem) => {
    return (
      <div key={time}>
        <div className={"flex items-center pl-1"}>
          <svg className="icon text-xl" aria-hidden="true">
            <use href={`#icon-${icon}`} />
          </svg>
          <div className="flex-1 flex items-center justify-between">
            <p className="font-bold ml-4 text-base">{position}</p>
            <p className="text-sm">
              {company} · {department}
            </p>
            <p className={"text-sm text-gray-500"}>{time}</p>
          </div>
        </div>
        <div className="mb-3">
          {tags.map((name) => {
            return (
              <span
                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                key={name}
              >
                {name}
              </span>
            );
          })}
        </div>
        <ul className={"list-disc text-sm ps-4"}>
          {descriptionList.map((description) => (
            <li className={"mt-1"} key={description}>
              {description}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className={className}>
      <div className={"flex items-center text-lg font-bold mb-2"}>
        {t("title")}
      </div>
      <div className="[&>:not(:first-child)]:mt-4">
        {EXPERIENCES.map((item, index) => {
          if (index === EXPERIENCES.length - 1) {
            return experienceItem(item);
          }
          return <Fragment key={index}>{experienceItem(item)}</Fragment>;
        })}
      </div>
    </div>
  );
};
export default Experience;
