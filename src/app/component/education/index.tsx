import Image from "next/image";
import { useTranslations } from "next-intl";

interface IEducationProps {
  className?: string;
}
const Education = (props: IEducationProps) => {
  const { className } = props;

  const t = useTranslations("education");

  return (
    <div className={className}>
      <div className={"flex items-center text-lg font-bold"}>{t("title")}</div>
      <div className="flex items-center pt-2">
        <div className={"flex-1 flex"}>
          <div className="flex items-center">
            <Image src="bupt.svg" alt="hebut" width={48} height={48} />
          </div>
          <div className={"flex-1 ml-4"}>
            <p className={"font-bold"}>{t("bupt.name")}</p>
            <p className={"text-sm"}>
              {t("bupt.degree")}，{t("bupt.major")}
            </p>
            <p className="text-xs text-gray-500">{t("bupt.time")}</p>
          </div>
        </div>
        <div className={"flex-1 flex"}>
          <div className="flex items-center">
            <Image src="hebut.svg" alt="hebut" width={48} height={48} />
          </div>
          <div className={"flex-1 ml-4"}>
            <p className={"font-bold"}>{t("hebut.name")}</p>
            <p className={"text-sm"}>
              {t("hebut.degree")}，{t("hebut.major")}
            </p>
            <p className="text-xs text-gray-500">{t("hebut.time")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
