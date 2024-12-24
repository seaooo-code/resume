interface IBasicProps {
  className?: string;
}
export default function Basic(props: IBasicProps) {
  const { className } = props;
  return (
    <div className={`${className || ""}`}>
      <div className={"flex-1 flex flex-col justify-center"}>
        <p className={"text-3xl font-bold"}>杨晨辉</p>
        <p className={"mt-1"}>做你喜欢的事情，任何时候都不会太迟</p>
      </div>
      <div className="flex-1 mt-2 text-sm">
        <div className={"flex items-center"}>
          <svg className={"icon mr-2"} aria-hidden="true">
            <use href="#icon-frontend" />
          </svg>
          前端工程师
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
          北京市昌平区奥海明月北区 7 号楼
        </div>
      </div>
    </div>
  );
}
