import { useTranslations } from "next-intl";

interface IProfileProps {
  className?: string;
}
export default function Profile(props: IProfileProps) {
  const { className } = props;

  const t = useTranslations("profile");

  return (
    <div className={className || ""}>
      <div className={"flex items-center text-lg font-bold"}>{t("title")}</div>
      <ul className={"ps-4 list-outside list-disc text-sm"}>
        <li className={"mt-2"}>{t("item1")}</li>
        <li className={"mt-1"}>{t("item2")}</li>
        <li className={"mt-1"}>{t("item3")}</li>
      </ul>
    </div>
  );
}
