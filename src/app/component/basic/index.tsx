import { useTranslations } from "next-intl";

interface IBasicProps {
  className?: string;
}
export default function Basic(props: IBasicProps) {
  const { className } = props;

  const t = useTranslations("basic");

  return (
    <div className={`${className || ""}`}>
      <div className={"flex-1 flex flex-col justify-center"}>
        <p className={"text-3xl font-bold"}>{t("name")}</p>
        <p className={"mt-1"}>{t("motto")}</p>
      </div>
      <div className="flex-1 mt-2 text-sm">
        <div className={"flex items-center"}>
          <svg className={"icon mr-2"} aria-hidden="true">
            <use href="#icon-frontend" />
          </svg>
          {t("position")}
        </div>
        <div className={"flex items-center"}>
          <svg className={"icon mr-2"} aria-hidden="true">
            <use href="#icon-phone" />
          </svg>
          （+86）130-0130-2373
        </div>
        <div className={"flex items-center"}>
          <svg className={"icon mr-2"} aria-hidden="true">
            <use href="#icon-email" />
          </svg>
          chenhui.yang@seaooo.com
        </div>
        <div className={"flex items-center"}>
          <svg className={"icon mr-2"} aria-hidden="true">
            <use href="#icon-address" />
          </svg>
          {t("address")}
        </div>
      </div>
    </div>
  );
}
