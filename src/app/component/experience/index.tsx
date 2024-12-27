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
        {experienceItem({
          department: t(`second.department`),
          descriptionList: [
            t(`second.contents.first`),
            t(`second.contents.second`),
            t(`second.contents.third`),
            t(`second.contents.fourth`),
            t(`second.contents.fifth`),
            t(`second.contents.sixth`),
            t(`second.contents.seventh`),
            t(`second.contents.eighth`),
          ],
          icon: t(`second.icon`),
          position: t(`second.position`),
          tags: [
            t(`second.tags.first`),
            t(`second.tags.second`),
            t(`second.tags.third`),
            t(`second.tags.fourth`),
            t(`second.tags.fifth`),
            t(`second.tags.sixth`),
          ],
          time: t(`second.time`),
          company: t(`second.company`),
        })}
        {experienceItem({
          department: t(`first.department`),
          descriptionList: [
            t(`first.contents.first`),
            t(`first.contents.second`),
            t(`first.contents.third`),
          ],
          icon: t(`first.icon`),
          position: t(`first.position`),
          tags: [
            t(`first.tags.first`),
            t(`first.tags.second`),
            t(`first.tags.third`),
            t(`first.tags.fourth`),
          ],
          time: t(`first.time`),
          company: t(`first.company`),
        })}
      </div>
    </div>
  );
};
export default Experience;
