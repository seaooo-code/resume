import Image from "next/image";

interface IEducationProps {
  className?: string;
}
const Education = (props: IEducationProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className={"flex items-center text-lg font-bold"}>教育经历</div>
      <div className="flex items-center pt-2">
        <div className={"flex-1 flex"}>
          <div className="flex items-center">
            <Image src="bupt.svg" alt="hebut" width={48} height={48} />
          </div>
          <div className={"flex-1 ml-4"}>
            <p className={"font-bold"}>北京邮电大学</p>
            <p className={"text-sm"}>硕士，软件工程</p>
            <p className="text-xs text-gray-500">2019年9月 - 2022年6月</p>
          </div>
        </div>
        <div className={"flex-1 flex"}>
          <div className="flex items-center">
            <Image src="hebut.svg" alt="hebut" width={48} height={48} />
          </div>
          <div className={"flex-1 ml-4"}>
            <p className={"font-bold"}>河北工业大学</p>
            <p className={"text-sm"}>本科，电气工程及其自动化</p>
            <p className="text-xs text-gray-500">2015年9月 - 2019年6月</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
